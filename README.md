# 🚀 TaskFlow — Enterprise Project & Task Management SaaS

**TaskFlow** is a production-quality, enterprise-grade Project & Task Management SaaS application built with modern **JavaScript (ES6+)**, **HTML5**, **CSS3**, and **Python 3.10+** (utility scripts). It operates fully client-side with robust `LocalStorage` state persistence, reactive Pub/Sub architecture, responsive dark/light glassmorphism UI, interactive Kanban board, scheduling calendar, team workload management, SVG analytics, 5 automated test suites, and Docker multi-stage containerization.

---

## 🌟 Key Features

- **🔐 Authentication & Demo Quick Login**: Complete login and registration workflow with quick 1-click access for `demo@taskflow.com` / `Demo@123`.
- **📊 Live Analytics Dashboard**: Real-time KPI stat cards (Total Projects, Tasks, Completion Rate %, Overdue Count), active project progress bars, status breakdown, urgent deadline alerts, and activity feed.
- **📁 Project Management**: Create, edit, filter, and track project budgets, category badges, start/end timelines, and associated task completion.
- **📋 Granular Task CRUD**: Task drawer with interactive subtask checklists, real-time comments stream with author avatars & timestamps, priority badges (Low, Medium, High, Urgent), status stages, due dates, estimated vs. actual hours tracking, and progress slider (0%–100%).
- **🏷️ Multi-Criteria Filters & Sorting**: Instant multi-parameter filtering (Project, Status, Priority, Assignee, Label) and sorting (Due Date, Priority, Title, Progress %).
- **📌 Interactive Kanban Board**: 5 drag-and-drop columns (`Backlog`, `To Do`, `In Progress`, `Review`, `Done`) with HTML5 Drag Events and Touch support, visual ghosting, column metric counts, and immediate store state synchronization.
- **📅 Schedule & Deadline Calendar**: Interactive Month & Week deadline scheduler with date navigation (`Prev`, `Next`, `Today`), color-coded priority pills on due dates, and click-to-drawer details.
- **👥 Team & Workload Management**: Team member roster cards with custom avatars, role tags, assigned task count, and 40-hour capacity indicators.
- **📈 Custom Reports & Analytics**: Interactive SVG donut charts, priority distribution bar charts, and data export tools (Export CSV & Backup JSON).
- **⚙️ Settings & Theme Customization**: Dark/Light mode switcher, 5 dynamic primary accent color presets (`Indigo`, `Emerald`, `Violet`, `Rose`, `Amber`), database backup import/export, and demo data re-seeding engine.

---

## 🔑 Demo Account & Pre-seeded Dataset

TaskFlow features an automated seed engine that initializes on first run if storage is empty, or when triggered via Settings:

- **Email**: `demo@taskflow.com`
- **Password**: `Demo@123`
- **Pre-seeded Data**: 5 team members, 4 realistic projects (*Enterprise Mobile App v2.0*, *Cloud Infrastructure Migration*, *Design System Library*, *AI Analytics Engine*), and **52 tasks** with checklists, comments, deadlines, and assignees.

---

## 🏗️ Architecture & Modular Project Structure

```
taskflow/
├── index.html                  # Single Page Application HTML5 shell
├── package.json                # Dependencies, Vitest & Vite build scripts
├── vite.config.js              # Vite bundling configuration
├── vitest.config.js            # Vitest automated test configuration
├── Makefile                    # Unified developer automation commands
├── Dockerfile                  # Multi-stage Docker Nginx static build
├── docker-compose.yml          # Container orchestration service
├── nginx.conf                  # Production Gzip SPA Nginx server config
├── .dockerignore               # Docker build file exclusions
├── src/
│   ├── css/                    # Modular Design System
│   │   ├── variables.css       # Design tokens, HSL colors, dark/light themes
│   │   ├── base.css            # Reset, typography, scrollbars, focus rings
│   │   ├── layout.css          # App grid layout, sidebar, navbar, responsive container
│   │   ├── components.css      # Buttons, cards, badges, modal, drawer, toasts
│   │   ├── views.css           # Dashboard, Kanban, Calendar, Team, Reports styles
│   │   └── animations.css      # Keyframe animations, skeleton shimmer, drag ghosts
│   └── js/
│       ├── config.js           # Storage keys, default settings, demo credentials
│       ├── app.js              # SPA application entrypoint & route wiring
│       ├── services/
│       │   ├── storage.js      # LocalStorage abstraction & export/import
│       │   ├── seed.js         # Demo dataset seeder (52 tasks, 4 projects, 5 team)
│       │   ├── store.js        # Reactive central store with EventBus Pub/Sub
│       │   ├── auth.js         # Login, register, demo session controller
│       │   ├── router.js       # Client-side hash router with auth route guards
│       │   └── analytics.js    # Data aggregation engine for KPIs & metrics
│       ├── components/
│       │   ├── navbar.js       # Header search, quick-add, notifications, profile menu
│       │   ├── sidebar.js      # Responsive sidebar navigation
│       │   ├── toast.js        # Floating notification toast messages
│       │   ├── modal.js        # Accessible modal container (Tasks/Projects)
│       │   └── drawer.js       # Task detail slide-over drawer
│       ├── views/
│       │   ├── authView.js     # Login & Register views
│       │   ├── dashboardView.js# Analytics KPI dashboard
│       │   ├── projectsView.js # Projects grid & management
│       │   ├── tasksView.js    # Tasks data table & multi-filters
│       │   ├── kanbanView.js   # 5-column Drag-and-Drop Kanban Board
│       │   ├── calendarView.js # Monthly/Weekly deadline scheduler
│       │   ├── teamView.js     # Team member roster & workload capacity
│       │   ├── reportsView.js  # SVG charts & CSV/JSON export tools
│       │   ├── profileView.js  # Profile editor & role settings
│       │   └── settingsView.js # Dark/Light mode & demo dataset reset
│       └── utils/
│           ├── formatters.js   # Dates, relative time, badges, HTML escape
│           └── dom.js          # DOM query & element generation helpers
├── test/                       # 5 Vitest Automated Unit Test Files
│   ├── storage.test.js         # Persistence & serialization tests
│   ├── store.test.js           # Reactive Store & EventBus tests
│   ├── auth.test.js            # Authentication & session tests
│   ├── tasks.test.js           # Task CRUD & dispatch tests
│   └── analytics.test.js       # Analytics calculation engine tests
└── scripts/                    # Python 3.10+ Utility Scripts
    ├── seed_generator.py       # Generates JSON seed data
    ├── task_validator.py       # Schema & foreign key reference validator
    ├── analytics_exporter.py   # CLI terminal analytics summary reporter
    └── benchmark_storage.py    # 10,000 tasks stress benchmark script
```

---

## 🧪 Automated Testing

TaskFlow comes with **5 comprehensive test suites** covering storage, reactive state dispatchers, authentication, task CRUD operations, and analytics formulas:

```bash
# Run all Vitest automated unit test suites
npm test
```

---

## 🐍 Python 3.10+ Utility Tools

The `scripts/` directory includes Python 3.10+ tools for dataset generation, schema validation, CLI reporting, and performance stress testing:

```bash
# 1. Generate custom seed dataset JSON
python scripts/seed_generator.py

# 2. Validate task dataset schema integrity & foreign key references
python scripts/task_validator.py

# 3. Print CLI terminal analytics summary report
python scripts/analytics_exporter.py

# 4. Run 10,000 tasks performance & memory stress test
python scripts/benchmark_storage.py
```

---

## 🐳 Docker Support & Deployment

TaskFlow uses a multi-stage Docker build with Nginx Alpine static server:

```bash
# Build Docker image
docker build -t taskflow-saas .

# Run Docker container on http://localhost:8080
docker run -d -p 8080:80 --name taskflow_app taskflow-saas
```

Or using Docker Compose:

```bash
docker-compose up -d
```

---

## 🛠️ Makefile Commands

Automate common development workflows using the Makefile:

| Command | Description |
| :--- | :--- |
| `make install` | Install npm dependencies |
| `make dev` | Start local Vite development server |
| `make test` | Run Vitest unit test suites |
| `make build` | Build production static bundle in `dist/` |
| `make docker-build` | Build multi-stage Docker image |
| `make docker-run` | Launch Docker container on port 8080 |
| `make python-tools` | Run all Python seed, validation & benchmark scripts |
| `make clean` | Clean build artifacts and node_modules |

---

## 🔀 Git Development & Pull Request History (5 Phases)

1. **Phase 1: Core Architecture, Design System & LocalStorage Engine + Auth**
   - Implemented modular ES6 project structure, CSS design tokens, HSL palette, dark/light themes, reactive `Store`, `LocalStorage` persistence, `AuthService`, and `HashRouter`.
2. **Phase 2: Project Management & Task CRUD Engine**
   - Built project management cards, task data table, multi-criteria search/filter/sort, slide-over task detail drawer (checklists, comments, progress slider), and modal dialogues.
3. **Phase 3: Interactive Kanban Board & Calendar Views**
   - Implemented 5-stage Kanban board with HTML5 + Touch drag-and-drop, column metrics, and interactive month/week deadline calendar.
4. **Phase 4: Team Member Management & SVG Analytics Reports**
   - Developed team member workload capacity cards, interactive SVG donut & bar charts, and CSV/JSON export utility tools.
5. **Phase 5: Settings, Python Utilities, Docker & Test Suite**
   - Added accent color themes, backup import/export, 5 Vitest automated test files, Python 3.10 utility tools, multi-stage `Dockerfile`, `Makefile`, and complete documentation.

---

## 📄 License

MIT License &copy; 2026 TaskFlow SaaS Application. Built for professional portfolio demonstration.
"# task_flow" 
