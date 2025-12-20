<!-- AGENT_INSTRUCTIONS_START
### 🤖 Agent Protocol: Port Management & Registry Sync

**Objective**: Maintain a conflict-free registry of ports for all applications in the user's workspace, supporting multi-service apps (Frontend + Backend).

**When you encounter this file in a project:**
1.  **Identify the Project**: Read `package.json` to get the `name` of the current project. If no `package.json`, use the folder name.
2.  **Scan Registry**: Read the "Port Registry" table below.
3.  **Determine Action**:
    *   **Project IS listed with valid ports**: Verify local config matches. If not, update local config.
    *   **Project IS listed but Ports are "Pending"**:
        1.  Find the **highest numeric port** currently assigned in the table (scan ALL columns).
        2.  Assign the **next available port(s)** to this project.
            *   If Single App: Assign `Highest + 1`.
            *   If Full Stack (FE + BE): Assign `Highest + 1` (FE) and `Highest + 2` (BE).
        3.  **Update the table** with the new ports.
        4.  **Update local config** files (`vite.config.js`, `index.js`, `.env`) to use these new ports.
    *   **Project is NOT listed (New App)**:
        1.  Find the **highest numeric port** currently assigned in the table.
        2.  Assign the **next available port(s)**.
        3.  **Add to Registry**: Append a new row to the **bottom** of the table with the Project Name, New Ports, and Description.
        4.  **Configure App**: Update the local configuration files to use these new ports.

**Configuration Update Guide**:
*   **Vite (`vite.config.ts`/`js`)**: 
    *   Update `server: { port: <FE_PORT> }`.
    *   Update proxy target: `target: 'http://localhost:<BE_PORT>'`.
*   **Express/Node (`index.ts`/`js`)**: Update `const port = <BE_PORT>;` or `app.listen(<BE_PORT>)`.
*   **Environment (`.env`)**: Update `PORT=<BE_PORT>` (and `VITE_API_URL` if applicable).

AGENT_INSTRUCTIONS_END -->

# 🌐 Application Access & Port Registry

## 🚀 Current Context: SREdesigns Portfolio
*   **Local URL**: [http://localhost:3005](http://localhost:3005)
*   **Frontend Port**: `3005`
*   **Backend Port**: `-` (Static/Client-side)

---

## 📒 Master Port Registry

| Application Name | Frontend Port | Backend Port | Port Details | Description |
|------------------|---------------|--------------|--------------|-------------|
| **WellNest** | 3000 | - | 3000: Main App (Next.js/React) | Mental health tracking app (Full Stack) |
| **WordSlide** | 3001 | - | 3001: Game Interface | Word Puzzle Game |
| **storyweaver** | 3002 | 3003 | 3002: UI/Vite Server<br>3003: API/Express Server | Interactive Story Builder |
| **3D Asset Studio** | 3004 | - | 3004: Vite Dev Server | AI-powered 3D Asset Generator |
| **SREdesigns Portfolio** | 3005 | - | 3005: Vite Dev Server | Personal Design Portfolio |
| **HomePlanner** | Pending | Pending | - | *Reserved* |
| **Word-Music-Game** | Pending | Pending | - | *Reserved* |
| **AI-Sprite-Forge-Playground-2** | Pending | Pending | - | *Reserved* |

*(Agent: Add new projects above this line. Keep table sorted by Port if possible.)*

---

### 🛠️ How to Run This App
1.  Ensure you are in the project root.
2.  Run `npm run dev` (This usually runs both FE and BE concurrently).
3.  Access via the **Local URL** defined at the top.
