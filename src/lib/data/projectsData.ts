export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'external';
}

export interface ProjectArchitectureComponent {
  layer: string;
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  status: string;
  featured: boolean;
  bentoSpan: string; // Tailwind grid span classes
  shortDescription: string;
  longDescription?: string;
  technologies: string[];
  problem?: string;
  approach?: string;
  architectureComponents?: ProjectArchitectureComponent[];
  implementation?: string;
  aiMl?: string;
  engineeringDecisions?: string[];
  results?: string[];
  metrics?: { label: string; value: string }[];
  links?: ProjectLink[];
  asciiDiagram?: string;
  isPlaceholder?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'polarems',
    title: 'POLAREMS',
    subtitle: 'AI-Driven Smart Energy Management System for Polar Research Stations',
    category: 'SYSTEMS & AI',
    role: 'Software & AI Engineer',
    status: 'PROTOTYPE SYSTEM',
    featured: true,
    bentoSpan: 'col-span-12 lg:col-span-8',
    shortDescription:
      'Asynchronous microgrid energy management platform engineered for load/renewable forecasting, battery/diesel dispatch optimization, and digital-twin simulation at extreme-environment polar research stations.',
    longDescription:
      'PolarEMS is a modular, asynchronous backend and telemetry control framework designed for polar microgrid energy management (such as Antarctic Station Maitri). Built with Python 3.11 and FastAPI, it integrates SQLAlchemy 2.0 AsyncIO with PostgreSQL 15, scikit-learn forecasting, dispatch optimization solvers, digital-twin station simulation, and a mission control dashboard.',
    technologies: [
      'Python 3.11',
      'FastAPI',
      'PostgreSQL 15',
      'SQLAlchemy 2.0 AsyncIO',
      'asyncpg',
      'Alembic',
      'Pydantic v2',
      'scikit-learn',
      'Docker',
      'Chart.js',
      'Pytest',
    ],
    problem:
      'Extreme polar research stations rely on fragile microgrids pairing diesel generators with solar/wind renewables and battery storage. Managing power demands in sub-zero environments requires real-time telemetry ingestion, weather integration, anomaly detection, and automated dispatch optimization to maintain grid stability.',
    approach:
      'Architected a fully asynchronous Python backend using FastAPI, SQLAlchemy 2.0 AsyncIO, and asyncpg connected to PostgreSQL 15 running in Docker. Decoupled core domain services into distinct modules for telemetry ingestion, background weather polling, renewable forecasting, battery/diesel dispatch optimization, and digital-twin station simulation.',
    architectureComponents: [
      {
        layer: '01 / TELEMETRY & WEATHER INGESTION',
        name: 'Ingestion & Poller Core',
        description:
          'Validates and stores time-series telemetry snapshots while background workers poll environmental weather conditions.',
      },
      {
        layer: '02 / ANOMALY & FORECASTING ENGINE',
        name: 'ML Analytics Package',
        description:
          'Scikit-learn models evaluate load patterns, renewable solar/wind production forecasts, and flag operational power anomalies.',
      },
      {
        layer: '03 / DISPATCH & DIGITAL TWIN',
        name: 'Optimization & Simulator',
        description:
          'Solves battery and diesel generator dispatch strategies while running digital-twin microgrid station simulations.',
      },
      {
        layer: '04 / ASYNC API & DATABASE LAYER',
        name: 'FastAPI & PostgreSQL Core',
        description:
          'SQLAlchemy 2.0 AsyncIO with asyncpg driver exposes REST API endpoints with Pydantic v2 validation and Alembic migrations.',
      },
      {
        layer: '05 / MISSION CONTROL DASHBOARD',
        name: 'Static Control Interface',
        description:
          'Renders live telemetry, station status, anomaly alerts, and Chart.js time-series visualizers.',
      },
    ],
    implementation:
      'Implemented using FastAPI with Uvicorn ASGI server, PostgreSQL 15 containerized with Docker Compose, and Alembic database migrations. Domain modules are structured under app/api/v1/endpoints covering stations, assets, telemetry, forecasts, optimization, anomaly detection, alerts, weather, and digital-twin simulation.',
    aiMl:
      'Utilizes scikit-learn and numpy for load/renewable power forecasting and anomaly detection algorithms across microgrid asset streams.',
    engineeringDecisions: [
      'Adopted SQLAlchemy 2.0 AsyncIO and asyncpg to prevent database thread blocking during continuous high-frequency telemetry writes.',
      'Containerized PostgreSQL 15 with Docker Compose and managed schema evolution via Alembic migrations for repeatable deployments.',
      'Decoupled analytics, weather polling, and dispatch optimization into isolated service modules for strict separation of concerns.',
      'Constructed a comprehensive automated test suite (670+ tests with Pytest-AsyncIO and HTTPX) covering all REST API endpoints.',
    ],
    results: [
      'Developed 11 functional REST API domain modules covering telemetry, forecasts, dispatch optimization, anomaly detection, and simulation.',
      'Validated asynchronous database pipeline and endpoint reliability with 670+ automated Pytest test cases.',
    ],
    metrics: [
      { label: 'AUTOMATED PYTEST TESTS', value: '670+' },
      { label: 'REST API DOMAIN MODULES', value: '11' },
    ],
    asciiDiagram: `
  +----------------------+      +-----------------------+      +-----------------------+
  |  TELEMETRY & WEATHER | ---> | FASTAPI & ASYNCPG CORE| ---> |  MISSION CONTROL UI   |
  | (INGESTION & POLLER) |      | (POSTGRESQL / ALEMBIC)|      | (CHART.JS VISUALIZER) |
  +----------------------+      +-----------------------+      +-----------------------+
                                           |
                                           v
                                +-----------------------+
                                | ML & DISPATCH SOLVERS |
                                | (FORECAST & SIMULATE) |
                                +-----------------------+
`,
    links: [],
  },
  {
    id: 'autonomous-agent-archive',
    title: 'AGENTIC COMPUTATION LAB',
    subtitle: 'Multi-Agent Workflow & Task Orchestration Engine',
    category: 'AI & SYSTEMS',
    role: 'Software & AI Engineer',
    status: 'RESEARCH ARCHIVE',
    featured: false,
    bentoSpan: 'col-span-12 lg:col-span-4',
    shortDescription:
      'Experimental framework exploring autonomous agent communication, tool invocation workflows, and state-driven task completion.',
    technologies: ['Python', 'TypeScript', 'LLM Architectures', 'JSON Schema'],
    problem:
      'Complex multi-step tasks require structured execution loops, state validation, and reliable fallback strategies for tool-using AI models.',
    approach:
      'Constructed a deterministic state machine for managing agent context, memory persistence, and tool evaluation cycles.',
    links: [],
    isPlaceholder: true,
  },
  {
    id: 'distributed-systems-engine',
    title: 'DISTRIBUTED DATA PIPELINE',
    subtitle: 'Low-Latency Event Stream & Microservice Core',
    category: 'SYSTEMS ARCHITECTURE',
    role: 'Systems Engineer',
    status: 'SYSTEM ARCHIVE',
    featured: false,
    bentoSpan: 'col-span-12 lg:col-span-4',
    shortDescription:
      'Modular event processing core designed for asynchronous data routing, state synchronization, and reliable message queuing.',
    technologies: ['Node.js', 'TypeScript', 'Distributed Queues', 'REST/gRPC'],
    problem:
      'Ensuring consistent data delivery and status verification across asynchronous service nodes without message duplication.',
    approach:
      'Implemented transactional queue handling with explicit ack mechanisms and structured log verification.',
    links: [],
    isPlaceholder: true,
  },
  {
    id: 'creative-shader-lab',
    title: 'GOTHIC COMPUTATIONAL LAB',
    subtitle: 'Minimalist Monospaced & ASCII Interface System',
    category: 'CREATIVE COMPUTATION',
    role: 'Frontend Architect',
    status: 'ACTIVE LAB',
    featured: false,
    bentoSpan: 'col-span-12 lg:col-span-8',
    shortDescription:
      'High-performance design system and component architecture built for gothic technical editorial applications and monospaced visual archives.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    problem:
      'Creating dense, information-rich technical interfaces that remain legible, responsive, and visually striking without relying on heavy WebGL assets.',
    approach:
      'Developed lightweight custom rendering patterns for monospaced ASCII art, hair-line layout grids, and accessible drawer/modal components.',
    links: [],
    isPlaceholder: true,
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}
