# 🎯 Project: Home Layout Designer (Static Web App)
## 1. Project Goal
Build a web-based tool to design floor plans and furniture layouts. It must be a 100% client-side static application capable of running on GitHub Pages without a backend server.
## 2. Core Features
 * **Room Management**: Create rooms with specific dimensions. Rooms can be moved via drag-and-drop (Touch/Mouse).
 * **Magnet Snapping**: Rooms and furniture should snap to each other or walls when close for alignment.
 * **Furniture Management**:
   * Furniture must be placed within rooms.
   * **Collision & Layering**: By default, furniture cannot overlap. However, support a "Stacking/Layering" option (e.g., placing an item on a desk). Use a layer-based system to manage vertical order.
 * **Responsive UI**: Dynamic layouts friendly to both Mobile and Desktop.
 * **Data Persistence**: Export/Import via JSON string with MD5 checksum.
## 3. Technical Stack
 * **Framework**: React (Vite)
 * **Canvas Library**: Fabric.js (Object manipulation & Layering)
 * **Styling**: Tailwind CSS
 * **Testing**: Vitest + React Testing Library
## 4. Architectural Principles (Layered Architecture)
 1. **Engine Layer**: Core math, snapping algorithms, and collision detection. Keep this stable.
 2. **Feature/Logic Layer**: State management (Z-index/Layering), event handling.
 3. **UI Layer**: React components and responsive styling.
## 5. Coding Rules & TDD Protocol
 * **Strict TDD**: Always write tests before implementation. Every logic change needs a corresponding test update.
 * **Surgical Editing (Absolute Minimal Changes)**:
   * **Core Instruction**: Even if the user's request is high-level (e.g., "Add positive value check for room size"), you must identify the exact file and function to modify.
   * **Constraint**: Modify ONLY the necessary lines. Do not refactor, reformat, or touch unrelated functions, files, comments, or tests.
   * **Scope**: Keep the impact radius of any change as small as possible.
 * **Language**:
   * Code/Comments/Docs: **English**.
   * PR Descriptions/Summaries: **Korean**.
 * **Clean Code**: Follow SOLID principles. Keep components small.
## 6. Data Schema
 * Serialized JSON string for Export/Import.
 * MD5 hash for integrity check.
## 7. Operational Constraints
 * No external APIs/DBs. Use LocalStorage.
 * Use inline SVGs for all icons.
