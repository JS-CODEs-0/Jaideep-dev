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
  liveUrl?: string;
  asciiDiagram?: string;
  isPlaceholder?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'polarems',
    title: 'POLAREMS',
    subtitle: 'AI-Driven Smart Energy Management System for Polar Research Stations',
    category: 'SYSTEMS & AI',
    role: 'AI & Software Developer',
    status: 'PROTOTYPE SYSTEM',
    featured: true,
    bentoSpan: 'col-span-12 lg:col-span-12',
    liveUrl: 'https://sih-workspace-ruddy.vercel.app/',
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
    links: [
      {
        label: 'VIEW LIVE SITE',
        url: 'https://sih-workspace-ruddy.vercel.app/',
        type: 'demo',
      },
      {
        label: 'GITHUB',
        url: 'https://github.com/JS-CODEs-0/SIH-WORKSPACE',
        type: 'github',
      },
    ],
  },
  {
    id: 'sk-yoga',
    title: 'SK YOGA',
    subtitle: 'Responsive Digital Platform for SK Yoga Classes',
    category: 'WEB DEVELOPMENT',
    role: 'Web Developer',
    status: 'DEPLOYED WEBSITE',
    featured: true,
    bentoSpan: 'col-span-12 lg:col-span-6',
    liveUrl: 'https://www.skyogacentre.com/',
    shortDescription:
      'Responsive web application engineered for SK Yoga Classes in Jodhpur, Rajasthan. Features custom video intro player, section navigation, class schedules, gallery, and direct WhatsApp contact integration.',
    longDescription:
      'A bespoke digital platform built for SK Yoga Classes guided by Kamlesh Sir in Jodhpur, Rajasthan. Designed to present traditional yoga offerings across all ages and levels, featuring smooth scroll interactions, optimized HTML5 video media, studio values showcase, and direct WhatsApp communication channels.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'HTML5 Video', 'Responsive Design'],
    problem:
      'Local yoga studios require clear, accessible web presence to communicate traditional practice offerings, schedules, studio philosophy, and direct client inquiry options.',
    approach:
      'Built a lightweight, responsive web application using clean semantic HTML5, custom CSS styling, smooth scroll triggers, interactive intro video controls, and direct WhatsApp API links.',
    implementation:
      'Implemented custom mobile menu drawer, full-screen background video intro overlay with bypass controls, image reveal animations, and accessible contact triggers.',
    engineeringDecisions: [
      'Leveraged lightweight native JavaScript without external heavy framework overhead for ultra-fast load times.',
      'Implemented progressive image loading and HTML5 video optimization for seamless mobile web performance.',
    ],
    results: [
      'Delivered responsive multi-section landing page with interactive class schedules and direct messaging.',
    ],
    links: [
      {
        label: 'VIEW LIVE SITE',
        url: 'https://www.skyogacentre.com/',
        type: 'demo',
      },
      {
        label: 'GITHUB',
        url: 'https://github.com/JS-CODEs-0/sk-yoga',
        type: 'github',
      },
    ],
  },
  {
    id: 'editor-mohit',
    title: 'EDITOR MOHIT',
    subtitle: 'Portfolio Showcase for Cinematic Video Editor Mohit Motwani',
    category: 'WEB DEVELOPMENT',
    role: 'Web Developer',
    status: 'DEPLOYED WEBSITE',
    featured: true,
    bentoSpan: 'col-span-12 lg:col-span-6',
    liveUrl: 'http://editor-mohit.vercel.app/',
    shortDescription:
      'High-impact portfolio showcase for cinematic video editor Mohit Motwani. Features custom background video loopers, smooth scroll reveals, interactive skills grid, video showcase cards, and direct contact options.',
    longDescription:
      'An editorial, multimedia-rich portfolio application designed for cinematic video editor Mohit Motwani. Built to highlight video editing work, Instagram Reels, gaming content edits, and motion graphics services through background video hero players, custom cursor follower, dynamic loaders, and interactive project cards.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'HTML5 Video', 'Font Awesome'],
    problem:
      'Creative media editors need high-impact, visual-first digital portfolios to showcase video showreels, client work samples, and direct hire inquiry channels.',
    approach:
      'Designed a sleek, dark-themed responsive website incorporating HTML5 video background loops, custom cursor tracking, animated section reveals, and structured service/skill matrices.',
    implementation:
      'Structured using semantic HTML5, modular CSS stylesheets, custom JS cursor followers, scroll progress indicators, and responsive media containers.',
    engineeringDecisions: [
      'Utilized video background wrappers with dark overlays to ensure text contrast and legibility.',
      'Implemented custom navigation toggle and smooth section scrolling for intuitive mobile viewing.',
    ],
    results: [
      'Created a video showcase platform presenting cinematic edits, skills breakdown, and direct client hire triggers.',
    ],
    links: [
      {
        label: 'VIEW LIVE SITE',
        url: 'http://editor-mohit.vercel.app/',
        type: 'demo',
      },
      {
        label: 'GITHUB',
        url: 'https://github.com/JS-CODEs-0/editor-mohit',
        type: 'github',
      },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}
