# 🎯 Project: Home Layout Designer (Static Web App)

## 1. Project Goal
Build a web-based tool to design floor plans and furniture layouts. It must be a 100% client-side static application capable of running on GitHub Pages without a backend server.

## 2. Core Features
 * **Room Management**: Create rooms with specific dimensions. Drag-and-drop support (Touch/Mouse).
 * **Magnet Snapping**: Rooms and furniture snap to each other or walls for alignment.
 * **Furniture Management**: Place furniture inside rooms with a layering (Z-index) system for stacking.
 * **Responsive UI**: Dynamic layouts friendly to both Mobile and Desktop users.
 * **Data Persistence**: Support Export/Import functionality using **Base64** encoded strings with MD5 checksum.

## 3. Technical Stack
 * **Framework**: React (Vite)
 * **Canvas Library**: Fabric.js
 * **Styling**: Tailwind CSS
 * **Testing**: Vitest + React Testing Library

## 4. Architectural Principles
 1. **Engine Layer**: Core math, snapping, and collision logic. Pure functions only. (Stable)
 2. **Feature/Logic Layer**: State management (Z-index, ordering), event handling.
 3. **UI Layer**: React components and responsive styling. (Dynamic)

## 5. 🧠 Human-Like Execution Protocol (MANDATORY)
You must follow this progressive thinking process for every task:

### Phase 1: Mental Sandbox (Analysis)
 * **Think First**: Before any code change, document the thought process.
 * **Impact Assessment**: Which files will be affected? Will this break the "Layered Architecture"?
 * **Decomposition**: Break the task into atomic units (e.g., 1. Define Engine Logic -> 2. Write Test -> 3. Implement -> 4. Wire UI).

### Phase 2: Progressive TDD Implementation
For each atomic unit identified:
 1. **Define Interface**: Define types/interfaces first.
 2. **RED (Test)**: Write a failing test for the specific logic.
 3. **GREEN (Implement)**: Write the absolute minimal code to pass.
 4. **Refactor**: Improve code quality while maintaining Green status.
 5. **Verify**: Ensure the unit works in isolation.

### Phase 3: Integration & Cross-Device Validation
 * Connect logic to UI.
 * **Validation**: Manually "think" through the touch/mouse event flow.
 * Ensure the layout remains responsive on mobile viewports.

### Phase 4: Final Validation & Technical Reporting
 * **Surgical Cleanup**: Ensure no unrelated code or temporary files are modified.
 * **Generate Technical Summary (MANDATORY)**: Create a file named PR_SUMMARY.md.
   * **IMPORTANT**: This file is for the PR body description only and should NOT be committed to the repository (it is in .gitignore).
   * **Content**:
     * **Modified Files**: List each modified file and the technical reason for the change.
     * **Core Logic**: Explain key algorithms or data structure changes.
     * **Testing**: Proof of TDD cycle completion.
   * **Language**: Korean summary for the PR body.

## 6. Coding Rules
 * **Surgical Editing**: Minimal code changes. No unnecessary refactors.
 * **Strict TDD**: No production code without a test.
 * **Language**: Code/Comments/Docs in **English**, PR summary in **Korean**.

## 7. Data Schema & Constraints
 * **Serialization**: Data must be serialized to JSON, then encoded into a **Base64** string for Export/Import.
 * **Integrity**: Append/Include an **MD5** hash to the data to verify integrity during Import.
 * **Zero-Backend**: 100% client-side. Use LocalStorage. All assets must be inline SVGs.
