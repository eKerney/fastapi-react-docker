# My Full-Stack App

A full-stack application with FastAPI (backend) and React/Vite/TypeScript (frontend), containerized with Docker.

## Prerequisites
- Docker
- Docker Compose
- Yarn

## Setup
#### 1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/my-fullstack-app.git
   cd my-fullstack-app
   ```
#### 2. Build and run:
   ```bash
   docker compose up --build
   ```
#### 3. Access:
   - Frontend: http://localhost:3000
   - kBackend: http://localhost:8000

#### 4. Development
   - Frontend: Hot reloads with yarn dev.
   - Backend: Hot reloads with Uvicorn --reload.
   
#### **Considerations**:
   - Include any setup quirks (e.g., `sudo` if needed).
   - Mention the proxy (`/api/`) for frontend-backend communication.

#### 5. **Secrets and Security**
   - **No Hardcoded Secrets**: Double-check `main.py` and `App.tsx` for hardcoded keys or URLs. Use `.env` if needed.
   - **Git History**: If you committed sensitive data earlier, use `git filter-branch` or `bfg` to clean history before pushing.

#### 6. **Branching Strategy**
   - Start with a `main` branch for the working app.
   - Create a `dev` branch for future changes:
  ```bash
  git checkout -b dev
  git push origin dev
  ```
# fastapi-react-docker
