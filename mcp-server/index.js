import readline from "readline";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Log debugging info safely to stderr so it doesn't corrupt stdout JSON-RPC
function logDebug(msg) {
  process.stderr.write(`[DEBUG] ${msg}\n`);
}

// Format and send JSON-RPC response
function sendResponse(id, result, error) {
  const msg = { jsonrpc: "2.0" };
  if (id !== undefined && id !== null) {
    msg.id = id;
  }
  if (error) {
    msg.error = error;
  } else {
    msg.result = result;
  }
  process.stdout.write(JSON.stringify(msg) + "\n");
}

// Handle requests
function handleRequest(request) {
  const { method, params, id } = request;
  logDebug(`Received request: ${method}`);

  if (method === "initialize") {
    sendResponse(id, {
      capabilities: {
        tools: {}
      },
      serverInfo: {
        name: "portfolio-manager",
        version: "1.0.0"
      }
    });
    return;
  }

  if (method === "tools/list") {
    sendResponse(id, {
      tools: [
        {
          name: "list_portfolio_data",
          description: "Lists current projects and skills from the portfolio data files.",
          inputSchema: {
            type: "object",
            properties: {}
          }
        },
        {
          name: "add_portfolio_project",
          description: "Appends a new project to the projects.js data file.",
          inputSchema: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              type: { type: "string", enum: ["web", "mobile", "fullstack"] },
              shortDescription: { type: "string" },
              description: { type: "string" },
              problem: { type: "string" },
              solution: { type: "string" },
              features: { type: "array", items: { type: "string" } },
              techStack: { type: "array", items: { type: "string" } },
              role: { type: "string" },
              challenges: { type: "string" },
              githubUrl: { type: "string" },
              liveUrl: { type: "string" },
              imageColor: { type: "string" }
            },
            required: ["id", "name", "type", "shortDescription", "description", "problem", "solution", "features", "techStack", "role", "challenges", "imageColor"]
          }
        },
        {
          name: "add_portfolio_skill",
          description: "Adds a new skill to the skills.js data file under a specific category.",
          inputSchema: {
            type: "object",
            properties: {
              category: { type: "string", enum: ["Frontend", "Backend", "Database", "Cloud & DevOps", "Tools"] },
              name: { type: "string" },
              iconName: { type: "string" }
            },
            required: ["category", "name", "iconName"]
          }
        }
      ]
    });
    return;
  }

  if (method === "tools/call") {
    const { name, arguments: args } = params;
    
    if (name === "list_portfolio_data") {
      try {
        const projectsPath = path.resolve(__dirname, "../src/data/projects.js");
        const skillsPath = path.resolve(__dirname, "../src/data/skills.js");

        const projectsContent = fs.readFileSync(projectsPath, "utf8");
        const skillsContent = fs.readFileSync(skillsPath, "utf8");

        sendResponse(id, {
          content: [
            {
              type: "text",
              text: `=== PROJECTS DATA ===\n${projectsContent}\n\n=== SKILLS DATA ===\n${skillsContent}`
            }
          ]
        });
      } catch (err) {
        sendResponse(id, null, { code: -32603, message: `Error loading data: ${err.message}` });
      }
      return;
    }

    if (name === "add_portfolio_project") {
      try {
        const filePath = path.resolve(__dirname, "../src/data/projects.js");
        const fileContent = fs.readFileSync(filePath, "utf8");
        
        // Dynamic parse using evaluation helper
        const arrayText = fileContent.replace(/export\s+const\s+projectsData\s*=/, "").trim().replace(/;$/, "");
        const data = new Function(`return ${arrayText}`)();
        
        // Append
        data.push(args);
        
        // Write back
        const updatedContent = `export const projectsData = ${JSON.stringify(data, null, 2)};\n`;
        fs.writeFileSync(filePath, updatedContent, "utf8");

        sendResponse(id, {
          content: [
            {
              type: "text",
              text: `Project '${args.name}' was successfully added to ${filePath}!`
            }
          ]
        });
      } catch (err) {
        sendResponse(id, null, { code: -32603, message: `Error updating projects: ${err.message}` });
      }
      return;
    }

    if (name === "add_portfolio_skill") {
      try {
        const filePath = path.resolve(__dirname, "../src/data/skills.js");
        const fileContent = fs.readFileSync(filePath, "utf8");
        
        // Dynamic parse using evaluation helper
        const arrayText = fileContent.replace(/export\s+const\s+skillCategories\s*=/, "").trim().replace(/;$/, "");
        const categories = new Function(`return ${arrayText}`)();

        const category = categories.find(c => c.category.toLowerCase() === args.category.toLowerCase());
        if (category) {
          category.skills.push({ name: args.name, iconName: args.iconName });
          const updatedContent = `export const skillCategories = ${JSON.stringify(categories, null, 2)};\n`;
          fs.writeFileSync(filePath, updatedContent, "utf8");

          sendResponse(id, {
            content: [
              {
                type: "text",
                text: `Skill '${args.name}' was successfully added to category '${args.category}' inside ${filePath}!`
              }
            ]
          });
        } else {
          sendResponse(id, null, { code: -32602, message: `Category '${args.category}' not found in skills.js.` });
        }
      } catch (err) {
        sendResponse(id, null, { code: -32603, message: `Error updating skills: ${err.message}` });
      }
      return;
    }

    sendResponse(id, null, { code: -32601, message: `Tool '${name}' not found.` });
    return;
  }

  // Fallback for unsupported methods
  sendResponse(id, null, { code: -32601, message: `Method '${method}' not supported.` });
}

// Bind input listener
rl.on("line", (line) => {
  if (!line.trim()) return;
  try {
    const request = JSON.parse(line);
    handleRequest(request);
  } catch (err) {
    sendResponse(null, null, { code: -32700, message: "Parse error" });
  }
});

logDebug("Portfolio Manager MCP Server started.");
