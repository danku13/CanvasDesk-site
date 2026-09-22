/* ===== CanvasDesk — конфигурация сайта (v3: визуальная система математического моделирования) =====
   Дефолтные значения. Админка (admin.html) сохраняет правки в localStorage,
   а для деплоя экспортирует config.json в корень сайта.

   Приоритет источников (от высшего к низшему):
     1. localStorage  — правки из админки (мгновенное превью, только у вас)
     2. config.json   — продакшен-контент (для всех посетителей)
     3. значения ниже — базовые дефолты

   Позиционирующий контракт — ADR-0007 (репозиторий CanvasDesk):
   «CanvasDesk — визуальная система математического моделирования».
   Факты: 45 шаблонов, 39 MCP-инструментов, <10 мс на 1000 нод, WebGPU-веб-версия. */

const PLATFORMS = {
  github:         { icon: '🐙', label: 'GitHub',          kind: 'code' },
  telegram:       { icon: '✈️', label: 'Telegram',         kind: 'chat' },
  habr:           { icon: '📝', label: 'Habr',             kind: 'articles' },
  linkedin:       { icon: '💼', label: 'LinkedIn',         kind: 'chat' },
  medium:         { icon: '✍️', label: 'Medium',           kind: 'articles' },
  boosty:         { icon: '🚀', label: 'Boosty',           kind: 'donation' },
  donationalerts: { icon: '💜', label: 'DonationAlerts',   kind: 'donation' }
};

const DEFAULT_CONFIG = {

  brand: {
    name: 'CanvasDesk',
    tagline: { en: 'Visual mathematical modeling system. Open source, written in Rust.', ru: 'Визуальная система математического моделирования. Открытый код, написан на Rust.' }
  },

  seo: {
    title: {
      en: 'CanvasDesk — Visual Mathematical Modeling System. Executable models on an infinite canvas',
      ru: 'CanvasDesk — визуальная система математического моделирования. Исполняемые модели на бесконечном канвасе'
    },
    description: {
      en: 'Build executable math models from Numi sheets and 45 templates on an infinite zoomable canvas. Values flow along value-edges with instant recalculation; domain math (Erlang-C, NPV, LTV) is built in; an AI agent assembles and verifies models via MCP. Rust + wgpu, WebGPU web version, open JSON Canvas format.',
      ru: 'Собирайте исполняемые математические модели из Numi-листов и 45 шаблонов на бесконечном зумируемом канвасе. Значения текут по value-связям с мгновенным пересчётом; доменная математика (Erlang-C, NPV, LTV) встроена в ядро; ИИ-агент собирает и проверяет модели через MCP. Rust + wgpu, веб-версия на WebGPU, открытый формат JSON Canvas.'
    },
    keywords: {
      en: 'CanvasDesk, mathematical modeling, visual modeling, Numi formulas, value flow, DAG engine, queueing theory, Erlang-C, unit economics, LTV, CAC, NPV, capacity planning, MCP, AI agent, JSON Canvas, infinite canvas, Rust, WebGPU',
      ru: 'CanvasDesk, математическое моделирование, визуальное моделирование, Numi-формулы, поток значений, DAG-движок, теория очередей, Эрланг-C, юнит-экономика, LTV, CAC, NPV, планирование мощности, MCP, ИИ-агент, JSON Canvas, бесконечный канвас, Rust, WebGPU'
    },
    ogImage: 'assets/og-cover.png'
  },

  nav: {
    features: { en: 'Features',    ru: 'Возможности' },
    demo:     { en: 'Demo',        ru: 'Демо' },
    steps:    { en: 'Get started', ru: 'Как начать' },
    widgets:  { en: 'Templates',   ru: 'Шаблоны' },
    ai:       { en: 'AI & MCP',    ru: 'ИИ и MCP' },
    faq:      { en: 'FAQ',         ru: 'Вопросы' },
    community:{ en: 'Community',   ru: 'Сообщество' },
    star:     { en: 'Star on GitHub', ru: 'Звезда на GitHub' },
    menu:     { en: 'Menu',        ru: 'Меню' }
  },

  announcement: {
    text: { en: 'New: the same engine runs in your browser — CanvasDesk Web (WebGPU)', ru: 'Новое: тот же движок работает в браузере — CanvasDesk Web (WebGPU)' },
    cta:  { en: 'Open the app', ru: 'Открыть приложение' }
  },

  hero: {
    badge: { en: 'Visual mathematical modeling system · Rust · wgpu · WebGPU', ru: 'Визуальная система математического моделирования · Rust · wgpu · WebGPU' },
    titleA: { en: 'The canvas that', ru: 'Канвас, который' },
    titleAccent: { en: 'does the math', ru: 'считает сам' },
    subtitle: {
      en: 'CanvasDesk builds executable mathematical models from Numi sheets and templates on an infinite zoomable canvas. Values flow along value-edges and recalculate live, domain math — units, queueing, finance — is built into the core, and an AI agent assembles and verifies the whole model via MCP.',
      ru: 'CanvasDesk собирает исполняемые математические модели из Numi-листов и шаблонов на бесконечном зумируемом канвасе. Значения проливаются по value-связям и пересчитываются мгновенно, доменная математика — единицы, теория очередей, финансы — встроена в ядро, а ИИ-агент соберёт и проверит всю модель через MCP.'
    },
    ctaPrimary:   { en: 'Try in the browser', ru: 'Открыть веб-версию' },
    ctaSecondary: { en: 'Star on GitHub',     ru: 'Звезда на GitHub' },
    ctaTertiary:  { en: 'Documentation',      ru: 'Документация' },
    chips: ['Web · WebGPU', 'Windows 10/11', 'Linux · macOS', 'JSON Canvas', 'MCP'],
    mediaTitle: { en: 'Reference model: service capacity on the canvas', ru: 'Эталонная модель: расчёт capacity сервиса на канвасе' },
    mediaHint:  { en: 'Numi-sheets, value-edges with live labels, template nodes', ru: 'Numi-листы, value-связи с живыми подписями, шаблонные ноды' },
    communityLink: { en: 'Pick your platform', ru: 'Выберите свою платформу' }
  },

  stats: [
    { value: '45',     label: { en: 'built-in templates',            ru: 'встроенных шаблонов' } },
    { value: '39',     label: { en: 'MCP tools for AI agents',       ru: 'MCP-инструментов для ИИ' } },
    { value: '<10 ms', label: { en: 'to recalc 1000 nodes',          ru: 'пересчёт 1000 нод' } },
    { value: '5000',   label: { en: 'nodes at 60 FPS',               ru: 'нод при 60 FPS' } },
    { value: '3',      label: { en: 'OS builds in CI + web version', ru: 'ОС в сборках CI + веб-версия' } }
  ],

  trust: {
    stars:  { en: 'GitHub stars', ru: 'звёзд на GitHub' },
    forks:  { en: 'forks',        ru: 'форков' },
    commit: { en: 'last commit',  ru: 'последний коммит' },
    today:  { en: 'today',        ru: 'сегодня' },
    badges: {
      en: ['One engine — browser & desktop', 'Open JSON Canvas format', '1000+ tests in CI', 'No telemetry'],
      ru: ['Один движок — браузер и десктоп', 'Открытый формат JSON Canvas', '1000+ тестов в CI', 'Без телеметрии']
    }
  },

  features: {
    kicker: { en: 'Features', ru: 'Возможности' },
    title:  { en: 'Executable models on one endless plane', ru: 'Исполняемые модели на одной бесконечной плоскости' },
    subtitle: {
      en: 'Not a picture of a model — a model that computes: formulas, flows and domain math live right on the canvas.',
      ru: 'Не картинка модели, а считающая модель: формулы, потоки значений и доменная математика живут прямо на канвасе.'
    },
    items: [
      { icon: '♾️', title: { en: 'Infinite zoomable canvas', ru: 'Бесконечный зумируемый канвас' }, text: { en: 'Pan with Space+drag, zoom to cursor 0.05–4×, infinite grid, groups and focus mode. R-tree + culling keep 5000 nodes at 60 FPS.', ru: 'Панорамирование Space+drag, зум к курсору 0.05–4×, бесконечная сетка, группы и режим фокуса. R-tree + culling держат 5000 нод при 60 FPS.' } },
      { icon: '🧮', title: { en: 'Numi sheets — formulas in plain language', ru: 'Numi-листы — формулы человеческим языком' }, text: { en: 'Any note line “name = expression” computes: rps = 1000, latency = 50 ms. Units with dimensions convert automatically, variables flow top-down.', ru: 'Любая строка заметки «имя = выражение» становится вычисляемой: rps = 1000, latency = 50 ms. Единицы с размерностями конвертируются автоматически, переменные протекают сверху вниз.' } },
      { icon: '🌊', title: { en: 'Value flow between nodes', ru: 'Поток значений между нодами' }, text: { en: 'Shift+drag draws a value-edge: the source value instantly recalculates the whole downstream — as $in or $1..$N. The graph is a DAG, cycles are blocked.', ru: 'Shift+drag рисует value-связь: значение источника мгновенно пересчитывает весь downstream — как $in или $1..$N. Граф — DAG, циклы блокируются.' } },
      { icon: '📚', title: { en: '45 built-in templates', ru: '45 встроенных шаблонов' }, text: { en: 'Infrastructure (LB, gateway, cache, DB, Kafka, CDN), unit economics (CAC, LTV, MRR, runway), product analytics (retention, funnel, NPS). Palette Ctrl+P and wheel-menu.', ru: 'Инфраструктура (балансировщик, шлюз, кэш, БД, Kafka, CDN), юнит-экономика (CAC, LTV, MRR, runway), продуктовая аналитика (retention, воронка, NPS). Палитра Ctrl+P и wheel-меню.' } },
      { icon: '📐', title: { en: 'Domain math in the core', ru: 'Доменная математика в ядре' }, text: { en: 'Queueing: mm1, mmc, erlang_c, littles_law — overload at ρ ≥ 1 is detected. Finance: npv, irr, cagr, cohort_ltv. Units cancel and convert on their own.', ru: 'Теория очередей: mm1, mmc, erlang_c, littles_law — перегрузка ρ ≥ 1 детектируется. Финансы: npv, irr, cagr, cohort_ltv. Единицы сокращаются и конвертируются сами.' } },
      { icon: '🔎', title: { en: 'Bottlenecks & what-if', ru: 'Узкие места и what-if' }, text: { en: 'Bottleneck indicators (ρ, response time) color the canvas edges; scenarios swap parameters and show “was → became (+Δ)” deltas with one-undo apply.', ru: 'Индикаторы узких мест (ρ, время ответа) подсвечивают канвас; сценарии подменяют параметры и показывают дельты «было → стало (+Δ)» с применением одним undo-шагом.' } },
      { icon: '🤖', title: { en: 'AI agent via MCP', ru: 'ИИ-агент через MCP' }, text: { en: 'One command — canvasdesk mcp — gives Claude and any MCP client 39 typed tools: the agent assembles reference models in minutes and verifies numbers against oracles ±1%.', ru: 'Одна команда — canvasdesk mcp — даёт Claude и любому MCP-клиенту 39 типизированных инструментов: агент собирает эталонные модели за минуты и сверяет числа с оракулами ±1%.' } },
      { icon: '🗂️', title: { en: 'Open format, real files', ru: 'Открытый формат, настоящие файлы' }, text: { en: 'Storage is JSON Canvas (.canvas) — the layout opens in Obsidian and back, unknown fields survive round-trip. Cards are real files; widgets and desktop mode are the carrier.', ru: 'Формат хранения — JSON Canvas (.canvas): раскладка открывается в Obsidian и наоборот, неизвестные поля переживают round-trip. Карточки — настоящие файлы; виджеты и desktop-режим — носитель.' } }
    ]
  },

  steps: {
    kicker: { en: 'Get started', ru: 'Начало работы' },
    title:  { en: 'First model in three steps', ru: 'Первая модель — три шага' },
    subtitle: {
      en: 'No install needed: the same Rust engine runs in the browser (WebGPU) and as a native binary.',
      ru: 'Установка не нужна: тот же движок на Rust работает в браузере (WebGPU) и нативным бинарем.'
    },
    items: [
      { icon: '🌐', title: { en: 'Open the web version', ru: 'Откройте веб-версию' }, text: { en: 'CanvasDesk Web runs in Chrome/Edge on WebGPU with browser storage (OPFS). Prefer desktop? Grab a CI build for Windows 10/11 — Linux and macOS run the windowed canvas.', ru: 'CanvasDesk Web работает в Chrome/Edge на WebGPU с хранением в браузере (OPFS). Нужен десктоп? Возьмите сборку CI для Windows 10/11 — Linux и macOS запускают оконный канвас.' } },
      { icon: '🧮', title: { en: 'Build the model', ru: 'Соберите модель' }, text: { en: 'Write Numi formulas in plain language or drop templates from the palette (Ctrl+P). Connect nodes with value-edges — numbers flow and recalculate live.', ru: 'Пишите Numi-формулы человеческим языком или раскладывайте шаблоны из палитры (Ctrl+P). Соедините ноды value-связями — числа потекут и пересчитываются на лету.' } },
      { icon: '🤖', title: { en: 'Bring in the AI agent', ru: 'Подключите ИИ-агента' }, text: { en: 'One command exposes MCP tools: the agent assembles a reference model in minutes and validates it — you twist parameters and watch deltas.', ru: 'Одна команда открывает MCP-инструменты: агент соберёт эталонную модель за минуты и провалидирует её — вам останется крутить параметры и смотреть дельты.' } }
    ],
    installTitle: { en: 'Connect the agent (MCP)', ru: 'Подключение ИИ-агента (MCP)' },
    installHint: { en: 'Add CanvasDesk to any MCP client (Claude Desktop and others). The whole stack — GUI service + tools — in one command. On Windows use canvasdesk.exe, on Linux/macOS — canvasdesk.', ru: 'Добавьте CanvasDesk в любой MCP-клиент (Claude Desktop и другие). Весь стек — GUI-сервис и инструменты — одной командой. На Windows это canvasdesk.exe, на Linux/macOS — canvasdesk.' },
    installCommands: '{\n  "mcpServers": {\n    "canvasdesk": {\n      "command": "canvasdesk.exe",\n      "args": ["mcp"]\n    }\n  }\n}',
    copy:   { en: 'Copy',     ru: 'Копировать' },
    copied: { en: 'Copied!',  ru: 'Скопировано!' }
  },

  dives: {
    files: {
      kicker: { en: 'Calculation core', ru: 'Расчётное ядро' },
      title: { en: 'Numi sheets: formulas that flow across the canvas', ru: 'Numi-листы: формулы, которые текут по канвасу' },
      text: { en: 'A note becomes a program: assignment lines compute top-down, prose and code fences are ignored. Values travel along teal value-edges with live labels — change the source, and the downstream recalculates within the frame (a 1000-node graph recalcs in under 10 ms).', ru: 'Заметка становится программой: строки-присваивания считаются сверху вниз, проза и код-фенсы игнорируются. Значения передаются по бирюзовым value-связям с живыми подписями — поменяйте источник, и downstream пересчитается в пределах кадра (граф из 1000 нод — быстрее 10 мс).' },
      bullets: {
        en: ['Units with dimensions: 100 req / 2 sec = 50 req/s', '$in, $1..$N and named value ports (FR-029)', '“Pouring” a value into a template overrides its default', 'Autocomplete: functions, units, variables, $-references (FR-021)'],
        ru: ['Единицы с размерностями: 100 req / 2 sec = 50 req/s', '$in, $1..$N и именованные порты значений (FR-029)', '«Проливание» значения в шаблон перекрывает его дефолт', 'Автодополнение: функции, единицы, переменные, $-ссылки (FR-021)']
      },
      mediaTitle: { en: 'Numi sheet with autocomplete and a result line', ru: 'Numi-лист с автодополнением и строкой результата' },
      mediaHint:  { en: 'An erroneous line is highlighted — the rest keep computing', ru: 'Ошибочная строка подсвечена — остальные продолжают считать' }
    },
    widgets: {
      kicker: { en: 'Library · 45 templates', ru: 'Библиотека · 45 шаблонов' },
      title: { en: 'Ready-made calculations from three worlds', ru: 'Готовые расчёты из трёх миров' },
      text: { en: 'A template is a calculation role of a node: typed parameters plus a formula with $param. Take it from the palette (Ctrl+P), the wheel-menu or MCP — and pour values into it from neighboring nodes.', ru: 'Шаблон — расчётная роль ноды: типизированные параметры плюс формула с $param. Возьмите его из палитры (Ctrl+P), wheel-меню или MCP — и пролейте в него значения из соседних нод.' },
      bullets: {
        en: ['Infrastructure · 15: LB, gateway, cache, DB master/replica, Kafka, CDN, S3', 'Unit economics · 18: CAC, LTV, MRR, ARPU, runway, contribution margin', 'Product analytics · 12: retention D1/D7/D30, funnel, NPS, stickiness, TTFV', 'Custom templates and composites — planned (FR-020, R4)'],
        ru: ['Инфраструктура · 15: балансировщик, шлюз, кэш, БД master/replica, Kafka, CDN, S3', 'Юнит-экономика · 18: CAC, LTV, MRR, ARPU, runway, contribution margin', 'Продуктовая аналитика · 12: retention D1/D7/D30, воронка, NPS, stickiness, TTFV', 'Custom-шаблоны и композиты — в планах (FR-020, R4)']
      },
      mediaTitle: { en: 'Template palette: search across 45 calculation nodes', ru: 'Палитра шаблонов: поиск по 45 расчётным нодам' },
      mediaHint:  { en: 'Categories: infrastructure, unit economics, product analytics', ru: 'Категории: инфраструктура, юнит-экономика, продуктовая аналитика' }
    },
    ai: {
      kicker: { en: 'AI · MCP', ru: 'ИИ · MCP' },
      title: { en: 'The agent assembles — the human explores', ru: 'Агент собирает — человек исследует' },
      text: { en: 'CanvasDesk ships an MCP server: Claude or any MCP client gets typed tools to read the graph, validate it and apply changes atomically. Reference models — Instagram MVP and catalog №1–5 — converge with oracle numbers within ±1%.', ru: 'CanvasDesk содержит MCP-сервер: Claude или любой MCP-клиент получает типизированные инструменты чтения графа, валидации и атомарных изменений. Эталонные модели — Instagram MVP и каталог №1–5 — сходятся с оракул-числами в пределах ±1%.' },
      bullets: {
        en: ['canvasdesk mcp — the whole stack in one command', 'graph_apply: assemble a model in one call, one undo step', 'graph_validate: E-CYCLE, E-UNIT, E-OVERLOAD error codes', 'Skills package for external agents — in the repository'],
        ru: ['canvasdesk mcp — весь стек одной командой', 'graph_apply: сборка модели одним вызовом, один undo-шаг', 'graph_validate: коды ошибок E-CYCLE, E-UNIT, E-OVERLOAD', 'Пакет скиллов для внешних агентов — в репозитории']
      },
      mediaTitle: { en: 'AI agent assembles a reference model via MCP', ru: 'ИИ-агент собирает эталонную модель по MCP' },
      mediaHint:  { en: 'Validate, apply, analyze bottlenecks, what-if — 39 tools', ru: 'Валидация, сборка, анализ узких мест, what-if — 39 инструментов' }
    },
    desktop: {
      kicker: { en: 'Format · carrier', ru: 'Формат · носитель' },
      title: { en: '.canvas: open format, real files, whole desktop', ru: '.canvas: открытый формат, настоящие файлы, весь рабочий стол' },
      text: { en: 'The storage format is JSON Canvas: the layout opens in Obsidian and back, unknown fields survive round-trip. File cards are real files with system thumbnails; JS/HTML widgets and the desktop mode are the carrier your models live on.', ru: 'Формат хранения — JSON Canvas: раскладка открывается в Obsidian и обратно, неизвестные поля переживают round-trip. Файловые карточки — настоящие файлы с системными тамбнейлами; JS/HTML-виджеты и режим «вместо рабочего стола» — носитель, на котором живут модели.' },
      bullets: {
        en: ['Round-trip with Obsidian: layout and data survive', 'Cards are real files — drag-and-drop from Explorer', 'Widget SDK: sdk/canvasdesk.ts, install by drag-and-drop', 'Desktop mode (--desktop) on Windows'],
        ru: ['Round-trip с Obsidian: раскладка и данные не теряются', 'Карточки — реальные файлы, drag-and-drop из проводника', 'SDK виджетов: sdk/canvasdesk.ts, установка drag-ом', 'Режим «вместо рабочего стола» (--desktop) на Windows']
      },
      mediaTitle: { en: 'The canvas carrier: files, widgets and models together', ru: 'Канвас-носитель: файлы, виджеты и модели вместе' },
      mediaHint:  { en: 'Autosave every 2 s + .bak of the previous version', ru: 'Автосейв каждые 2 с + .bak предыдущей версии' }
    }
  },

  gallery: {
    kicker: { en: 'Gallery', ru: 'Галерея' },
    title:  { en: 'See the models in action', ru: 'Посмотрите модели в действии' },
    subtitle: { en: 'Key scenarios of the calculation core: from a Numi sheet to an agent-assembled reference model.', ru: 'Ключевые сценарии расчётного ядра: от Numi-листа до эталонной модели, собранной агентом.' },
    items: [
      { title: { en: 'Canvas overview: capacity model with minimap', ru: 'Обзор канваса: модель capacity с миникартой' }, hint: 'assets/hero-canvas.png', poster: 'assets/hero-canvas.png' },
      { title: { en: 'Numi sheet & autocomplete', ru: 'Numi-лист и автодополнение' }, hint: 'assets/shot-numi.png', poster: 'assets/shot-numi.png' },
      { title: { en: 'Palette: 45 templates in three categories', ru: 'Палитра: 45 шаблонов в трёх категориях' }, hint: 'assets/shot-templates.png', poster: 'assets/shot-templates.png' },
      { title: { en: 'Bottlenecks: ρ thresholds and overload', ru: 'Узкие места: пороги ρ и перегрузки' }, hint: 'assets/shot-bottleneck.png', poster: 'assets/shot-bottleneck.png' },
      { title: { en: 'What-if: scenarios and deltas', ru: 'What-if: сценарии и дельты' }, hint: 'assets/shot-whatif.png', poster: 'assets/shot-whatif.png' },
      { title: { en: 'AI agent assembles a model via MCP', ru: 'ИИ-агент собирает модель по MCP' }, hint: 'assets/shot-agent.png', poster: 'assets/shot-agent.png' }
    ]
  },

  useCases: {
    kicker: { en: 'Who it is for', ru: 'Кому подходит' },
    title:  { en: 'One canvas — four classes of problems', ru: 'Один канвас — четыре класса задач' },
    subtitle: { en: 'Reference models ship in the box: from service capacity to startup runway. Build your own — or ask the agent.', ru: 'Эталонные модели уже в комплекте: от capacity сервиса до runway стартапа. Соберите свою — или попросите агента.' },
    items: [
      { icon: '🏗️', title: { en: 'System architects', ru: 'Системным архитекторам' }, text: { en: 'Capacity and load: Erlang-C, M/M/1, bottlenecks at ρ ≥ 1 visible on the canvas before deployment. References №1–№2 cover system design.', ru: 'Capacity и нагрузка: Erlang-C, M/M/1, узкие места при ρ ≥ 1 видны на канвасе до деплоя. Эталоны №1–№2 закрывают system design.' } },
      { icon: '📈', title: { en: 'Product analysts', ru: 'Продуктовым аналитикам' }, text: { en: 'Unit economics and growth: LTV/CAC, retention D1/D7/D30, funnels, stickiness — 18 ue-* and 12 pa-* templates.', ru: 'Юнит-экономика и рост: LTV/CAC, retention D1/D7/D30, воронки, stickiness — 18 шаблонов ue-* и 12 pa-*.' } },
      { icon: '💰', title: { en: 'Finance & founders', ru: 'Финансам и владельцам' }, text: { en: 'Budgets, P&L and defending the numbers: NPV, IRR, CAGR, runway; what-if grids for references №2–№4.', ru: 'Бюджеты, P&L и защита цифр: NPV, IRR, CAGR, runway; сценарные сетки «что если» для эталонов №2–№4.' } },
      { icon: '🤖', title: { en: 'Engineers with AI', ru: 'Инженерам с ИИ' }, text: { en: 'Describe the model in words — the agent assembles it via MCP in minutes and verifies it against the reference; you just twist the parameters.', ru: 'Опишите модель словами — агент соберёт её через MCP за минуты и проверит по эталону; вам останется крутить параметры.' } }
    ]
  },

  compare: {
    kicker: { en: 'Comparison', ru: 'Сравнение' },
    title:  { en: 'How CanvasDesk compares', ru: 'Чем CanvasDesk отличается' },
    subtitle: { en: 'Not a spreadsheet and not a whiteboard: the model is computed and visible at the same time.', ru: 'Не таблица и не доска: модель одновременно считается и видна.' },
    columns: ['CanvasDesk', 'Excel', 'Whiteboards', 'Obsidian Canvas'],
    columnsFull: { en: ['CanvasDesk', 'Excel & spreadsheets', 'Canvas boards (Miro)', 'Obsidian Canvas'], ru: ['CanvasDesk', 'Excel и таблицы', 'Канвас-доски (Miro)', 'Obsidian Canvas'] },
    labels: {
      yes:      { en: 'Yes', ru: 'Да' },
      partial:  { en: 'Partial', ru: 'Частично' },
      no:       { en: '—', ru: '—' },
      free:     { en: 'Free · open source', ru: 'Бесплатно · открытый код' },
      freemium: { en: 'Freemium', ru: 'Freemium' },
      personal: { en: 'Free for personal use', ru: 'Бесплатно для личного использования' },
      plugins:  { en: 'via plugins', ru: 'через плагины' },
      apps:     { en: 'via apps', ru: 'через приложения' }
    },
    rows: [
      { name: { en: 'Value flow between nodes (DAG, live)', ru: 'Поток значений между нодами (DAG, live)' }, cells: ['yes', 'partial', 'no', 'plugins'] },
      { name: { en: 'Units with dimensions that convert', ru: 'Единицы с размерностями и конвертацией' }, cells: ['yes', 'no', 'no', 'no'] },
      { name: { en: 'Domain math: Erlang-C, NPV, LTV', ru: 'Доменная математика: Erlang-C, NPV, LTV' }, cells: ['yes', 'partial', 'no', 'no'] },
      { name: { en: 'Model graph on an infinite canvas', ru: 'Граф модели на бесконечном канвасе' }, cells: ['yes', 'no', 'yes', 'yes'] },
      { name: { en: 'Bottleneck indicators (ρ, latency)', ru: 'Индикаторы узких мест (ρ, latency)' }, cells: ['yes', 'no', 'no', 'no'] },
      { name: { en: 'What-if scenarios with deltas', ru: 'What-if сценарии с дельтами' }, cells: ['yes', 'partial', 'no', 'no'] },
      { name: { en: 'AI agent assembles & verifies (MCP)', ru: 'ИИ-агент собирает и проверяет (MCP)' }, cells: ['yes', 'no', 'no', 'plugins'] },
      { name: { en: 'Price', ru: 'Цена' }, cells: ['free', 'freemium', 'freemium', 'personal'] }
    ]
  },

  matrix: {
    kicker: { en: 'Platforms', ru: 'Платформы' },
    title:  { en: 'Where CanvasDesk runs', ru: 'Где работает CanvasDesk' },
    subtitle: { en: 'Windows 10/11 x64 — the full feature set; Linux and macOS — the windowed canvas, platform-specific features land by the M7 plan. CI builds artifacts for all three OSes, and the web version (WebGPU) runs in Chrome/Edge.', ru: 'Windows 10/11 x64 — полная функциональность; Linux и macOS — оконный канвас, платформенные фичи закрываются по плану M7. CI собирает артефакты для всех трёх ОС, а веб-версия (WebGPU) работает в Chrome/Edge.' },
    columns: { en: ['Capability', 'Windows', 'Linux', 'macOS'], ru: ['Возможность', 'Windows', 'Linux', 'macOS'] },
    rows: [
      { name: { en: 'Canvas, notes, edges, minimap, search, undo', ru: 'Канвас, заметки, связи, миникарта, поиск, undo' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'Numi engine, value flow, templates', ru: 'Numi-движок, поток значений, шаблоны' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'File watcher', ru: 'Файловый вотчер' }, win: 'RDCW', linux: 'inotify', mac: 'FSEvents' },
      { name: { en: 'File thumbnails', ru: 'Тамбнейлы файлов' }, win: 'yes', linux: 'M7 · T27', mac: 'M7 · T27' },
      { name: { en: 'Drag-and-drop from file manager', ru: 'Drag-and-drop из файлового менеджера' }, win: 'yes', linux: 'M7 · T28', mac: 'M7 · T28' },
      { name: { en: 'MCP (AI clients)', ru: 'MCP (ИИ-клиенты)' }, win: 'Named pipe', linux: 'M7 · UDS', mac: 'M7 · UDS' },
      { name: { en: 'Live widgets / desktop mode', ru: 'Живые виджеты / режим «вместо стола»' }, win: 'WebView2 · yes', linux: 'Snapshot · —', mac: 'Snapshot · —' }
    ],
    yes: { en: 'Full', ru: 'Полностью' },
    hotkeysTitle: { en: 'Hotkeys', ru: 'Горячие клавиши' },
    hotkeys: [
      { keys: 'Shift + drag',   action: { en: 'Value-edge (value flow)', ru: 'Value-связь (поток значений)' } },
      { keys: 'Ctrl + P',       action: { en: 'Template palette', ru: 'Палитра шаблонов' } },
      { keys: 'Shift + click',  action: { en: 'Template wheel-menu', ru: 'Wheel-меню шаблонов' } },
      { keys: 'F',              action: { en: 'Focus: node connections', ru: 'Фокус: связи ноды' } },
      { keys: 'Ctrl + G',       action: { en: 'Group selection', ru: 'Сгруппировать выделенное' } },
      { keys: 'F3',             action: { en: 'HUD (fps, p95)', ru: 'HUD (fps, p95)' } },
      { keys: 'Ctrl + ,',       action: { en: 'Settings', ru: 'Настройки' } },
      { keys: 'Ctrl+Z / Y',     action: { en: 'Undo · redo (50 steps)', ru: 'Отмена · возврат (50 шагов)' } }
    ]
  },

  roadmap: {
    kicker: { en: 'Roadmap', ru: 'Дорожная карта' },
    title:  { en: 'Ships in the open', ru: 'Разработка идёт открыто' },
    subtitle: { en: 'Waves are planned and closed in the public repository — this page never oversells the current state.', ru: 'Волны планируются и закрываются в публичном репозитории — эта страница не приукрашивает текущее состояние.' },
    changelog: { en: 'Follow the changelog', ru: 'Следить за changelog' },
    items: [
      { id: 'M1–M6', title: { en: 'Core: infinite canvas, real files, notes, edges, search, widgets', ru: 'Ядро: бесконечный канвас, настоящие файлы, заметки, связи, поиск, виджеты' }, status: 'done' },
      { id: 'Numi', title: { en: 'Modeling wave: Numi engine, value flow, units, queueing, 45 templates', ru: 'Расчётная волна: Numi-движок, поток значений, единицы, queueing, 45 шаблонов' }, status: 'done' },
      { id: 'A', title: { en: 'Wave A · composition: value ports (FR-029), graph_validate (FR-032), graph_apply (FR-033), agent recipe', ru: 'Волна A · композиция: порты значений (FR-029), graph_validate (FR-032), graph_apply (FR-033), рецепт агента' }, status: 'done' },
      { id: 'B', title: { en: 'Wave B · analytics: bottleneck indicators (FR-016) and what-if scenarios (FR-017)', ru: 'Волна B · аналитика: индикаторы узких мест (FR-016) и what-if сценарии (FR-017)' }, status: 'done' },
      { id: 'Web', title: { en: 'Web version: the same engine in the browser on WebGPU (OPFS storage)', ru: 'Веб-версия: тот же движок в браузере на WebGPU (хранение в OPFS)' }, status: 'done' },
      { id: 'M7', title: { en: 'Cross-platform: Linux and macOS — windowed canvas works, platform features by plan', ru: 'Кроссплатформенность: Linux и macOS — оконный канвас работает, платформенные фичи по плану' }, status: 'progress' },
      { id: 'V', title: { en: 'Wave V · demand check: dogfooding and live demos — gate: ≥5 users return to their model on their own', ru: 'Волна V · проверка спроса: догфудинг и живые демо — гейт: ≥5 пользователей вернулись к своей модели сами' }, status: 'progress' },
      { id: 'S', title: { en: 'Wave S · after the gate: statistics & distributions, Monte Carlo, composite templates', ru: 'Волна S · после гейта: статистика и распределения, Monte Carlo, композитные шаблоны' }, status: 'plan' }
    ]
  },

  quotes: {
    kicker: { en: 'Wall of love', ru: 'Отзывы' },
    title:  { en: 'What early users say', ru: 'Что говорят ранние пользователи' },
    subtitle: { en: 'Hand-moderated quotes from live demos and GitHub Discussions — never invented, never auto-pulled.', ru: 'Отобранные вручную цитаты с живых демо и из GitHub Discussions — без выдумок и автоподтяжки.' },
    slotHint: { en: 'Quote slot — add a real user quote from GitHub Discussions in the admin panel', ru: 'Место для цитаты — добавьте реальный отзыв из GitHub Discussions в админке' },
    emptyAuthor: { en: 'Awaiting a real quote', ru: 'Ждём настоящий отзыв' },
    items: []
  },

  ctaBand: {
    title:    { en: 'Build your first model in minutes', ru: 'Соберите первую модель за минуты' },
    text:     { en: 'Free and open: run it in the browser, grab a Windows build from CI, or wire up the AI agent with one command.', ru: 'Бесплатно и открыто: запустите в браузере, заберите сборку для Windows из CI или подключите ИИ-агента одной командой.' },
    download: { en: 'Download for Windows', ru: 'Скачать для Windows' },
    star:     { en: 'Star on GitHub', ru: 'Звезда на GitHub' }
  },

  faq: {
    kicker: { en: 'FAQ', ru: 'FAQ' },
    title:  { en: 'Frequently asked questions', ru: 'Частые вопросы' },
    items: [
      { q: { en: 'What is CanvasDesk?', ru: 'Что такое CanvasDesk?' }, a: { en: 'A visual mathematical modeling system: an infinite zoomable canvas where executable models are assembled from calculation nodes — Numi sheets and templates. Values pour along value-edges (a DAG engine with live recalculation), domain math — units, queueing, finance — is built into the core, and an AI agent assembles and verifies models via MCP.', ru: 'Это визуальная система математического моделирования: бесконечный зумируемый канвас, на котором исполняемые модели собираются из расчётных нод — Numi-листов и шаблонов. Значения проливаются по value-связям (DAG-движок с live-пересчётом), доменная математика — единицы, теория очередей, финансы — встроена в ядро, а ИИ-агент собирает и проверяет модели через MCP.' } },
      { q: { en: 'Can I try it without installing?', ru: 'Можно ли попробовать без установки?' }, a: { en: 'Yes. CanvasDesk Web runs the same engine in the browser on WebGPU (Chrome/Edge) with storage in OPFS. For the full desktop experience grab a CI build: Windows 10/11 x64 has the complete feature set; Linux and macOS run the windowed canvas.', ru: 'Да. CanvasDesk Web запускает тот же движок в браузере на WebGPU (Chrome/Edge) с хранением в OPFS. Для полноценного десктопа возьмите сборку CI: Windows 10/11 x64 — полная функциональность; Linux и macOS — оконный канвас.' } },
      { q: { en: 'What is a Numi sheet?', ru: 'Что такое Numi-лист?' }, a: { en: 'A note whose lines compute: “rps = 1000”, “latency = 50 ms”. Units with dimensions convert automatically (1 sec + 500 ms = 1.5 sec), variables flow top-down, prose and code fences are ignored, and the result line updates as you type.', ru: 'Заметка, чьи строки считаются: «rps = 1000», «latency = 50 ms». Единицы с размерностями конвертируются автоматически (1 sec + 500 ms = 1.5 sec), переменные протекают сверху вниз, проза и код-фенсы игнорируются, а строка результата обновляется по мере ввода.' } },
      { q: { en: 'How is it different from Excel?', ru: 'Чем это отличается от Excel?' }, a: { en: 'Formulas live on a canvas as nodes connected by value-flow edges: the model structure is visible, overload (ρ ≥ 1) and bottlenecks are highlighted, what-if deltas show “was → became”. Plus domain functions Excel lacks — mm1, erlang_c, cohort_ltv — and an open file format.', ru: 'Формулы живут на канвасе нодами, соединёнными потоками значений: структура модели видна, перегрузки (ρ ≥ 1) и узкие места подсвечиваются, what-if показывает дельты «было → стало». Плюс доменные функции, которых в Excel нет, — mm1, erlang_c, cohort_ltv — и открытый формат файла.' } },
      { q: { en: 'How is it different from Miro or Obsidian Canvas?', ru: 'Чем это отличается от Miro или Obsidian Canvas?' }, a: { en: 'Boards store pictures of thinking; CanvasDesk nodes compute. At the same time the storage format is JSON Canvas, so .canvas layouts open in Obsidian and back — compatibility is part of the carrier, not the positioning.', ru: 'Доски хранят картинки мыслей; ноды CanvasDesk считаются. При этом формат хранения — JSON Canvas: раскладки .canvas открываются в Obsidian и обратно — совместимость часть носителя, а не позиционирование.' } },
      { q: { en: 'How do I connect an AI agent?', ru: 'Как подключить ИИ-агента?' }, a: { en: 'One command — canvasdesk mcp — starts the whole stack as an MCP server for Claude Desktop or any MCP client: 39 typed tools including graph_apply (assemble a model in one call) and graph_validate. A skills package for external agents ships in the repository.', ru: 'Одна команда — canvasdesk mcp — поднимает весь стек как MCP-сервер для Claude Desktop или любого MCP-клиента: 39 типизированных инструментов, включая graph_apply (сборка модели одним вызовом) и graph_validate. Пакет скиллов для внешних агентов приложен в репозитории.' } },
      { q: { en: 'How fast is the engine?', ru: 'Что с производительностью?' }, a: { en: 'The value-flow recalc handles a 1000-node graph in under 10 ms; the canvas keeps 5000 nodes at 60 FPS thanks to an R-tree spatial index and culling. HUD (F3) shows fps and p95 live.', ru: 'Пересчёт потока значений держит граф из 1000 нод быстрее 10 мс; канвас рисует 5000 нод при 60 FPS благодаря пространственному индексу R-tree и culling. HUD (F3) показывает fps и p95 вживую.' } },
      { q: { en: 'How can I support the project?', ru: 'Как поддержать проект?' }, a: { en: 'Star the repository on GitHub, share it with architects and analysts, or use the donation links below — they fund the development directly.', ru: 'Поставьте звезду репозиторию на GitHub, поделитесь им с архитекторами и аналитиками или воспользуйтесь ссылками на поддержку ниже — они идут напрямую в разработку.' } }
    ]
  },

  community: {
    kicker: { en: 'Community & support', ru: 'Сообщество и поддержка' },
    title:  { en: 'Pick your platform', ru: 'Выберите свою платформу' },
    subtitle: { en: 'Follow the development, read deep dives or support the author — choose what suits you. Links below are selected for your region and language.', ru: 'Следите за разработкой, читайте большие статьи или поддержите автора — выбирайте, что вам ближе. Ссылки ниже подобраны под ваш регион и язык.' },
    donateTitle: { en: 'Enjoying CanvasDesk?', ru: 'Нравится CanvasDesk?' },
    donateText: { en: 'The project is developed in open source and for free. A star on GitHub or a small donation keeps the development going.', ru: 'Проект разрабатывается открыто и бесплатно. Звезда на GitHub или небольшое пожертвование помогают разработке двигаться дальше.' },
    donateCta: { en: 'Donate', ru: 'Поддержать' }
  },

  finalCta: {
    title:    { en: 'From a formula to a working model', ru: 'От формулы — к работающей модели' },
    text:     { en: 'Try the web version, grab a build for Windows or connect the agent — and assemble your first model today.', ru: 'Попробуйте веб-версию, заберите сборку для Windows или подключите агента — и соберите свою первую модель уже сегодня.' },
    download: { en: 'Download for Windows', ru: 'Скачать для Windows' },
    star:     { en: 'Star on GitHub', ru: 'Звезда на GitHub' },
    support:  { en: 'or support the author via', ru: 'или поддержите автора через' }
  },

  stickyCta: {
    download: { en: 'Download', ru: 'Скачать' },
    star:     { en: 'Star',     ru: 'Звезда' }
  },

  media: {
    heroDemo:     { src: 'assets/hero-canvas.png',    poster: '' },
    filesShot:    { src: 'assets/shot-numi.png',      poster: '' },
    widgetsGif:   { src: 'assets/shot-templates.png', poster: '' },
    aiShot:       { src: 'assets/shot-agent.png',     poster: '' },
    desktopVideo: { src: 'assets/shot-flow.png',      poster: '' },
    searchShot:   { src: 'assets/shot-whatif.png',    poster: '' }
  },

  footer: {
    tagline: { en: 'Visual mathematical modeling system. Open source, written in Rust.', ru: 'Визуальная система математического моделирования. Открытый код, на Rust.' },
    sectionsProduct: { en: 'Product', ru: 'Продукт' },
    sectionsContent: { en: 'Content', ru: 'Контент' },
    sectionsAbout:   { en: 'About',   ru: 'О проекте' },
    disclaimer: { en: 'CanvasDesk is an independent project. The JSON Canvas format (jsoncanvas.org) is an open standard; .canvas layouts are compatible with Obsidian.', ru: 'CanvasDesk — независимый проект. Формат JSON Canvas (jsoncanvas.org) — открытый стандарт; раскладки .canvas совместимы с Obsidian.' },
    builtWith: { en: 'Built with Rust · wgpu · WebGPU · JSON Canvas', ru: 'Сделано на Rust · wgpu · WebGPU · JSON Canvas' },
    made: { en: 'Made with ❤️ by the CanvasDesk team', ru: 'Сделано с ❤️ командой CanvasDesk' }
  },

  links: {
    github:         'https://github.com/danku13/CanvasDesk',
    webapp:         'https://danku13.github.io/CanvasDesk/app/',
    docs:           'https://danku13.github.io/CanvasDesk/',
    telegram:       '',   // TODO: вставьте ссылку на канал
    habr:           'https://habr.com/ru/users/danku13/',
    linkedin:       '',   // TODO: вставьте ссылку
    medium:         '',   // TODO: вставьте ссылку
    boosty:         '',   // TODO: вставьте ссылку
    donationalerts: ''    // TODO: вставьте ссылку
  },

  roles: {
    github:         { en: 'Source code, issues, CI artifacts & agent skills', ru: 'Исходный код, issues, артефакты CI и скиллы для агентов' },
    linkedin:       { en: 'Development updates in your feed', ru: 'Новости разработки в вашей ленте' },
    medium:         { en: 'Long-form articles and deep dives', ru: 'Большие статьи и разборы' },
    habr:           { en: 'Articles and devlog in Russian', ru: 'Статьи и devlog проекта' },
    telegram:       { en: 'News, chat and quick help', ru: 'Новости, чат и быстрая помощь' },
    boosty:         { en: 'Monthly support with bonus content', ru: 'Постоянная поддержка и бонусный контент' },
    donationalerts: { en: 'One-time donation to the author', ru: 'Разовое пожертвование автору' }
  },

  priorities: {
    en: ['linkedin', 'medium', 'github', 'donationalerts'],
    ru: ['habr', 'telegram', 'github', 'boosty', 'donationalerts']
  }
};

/* ===== Хелперы (используются и лендингом, и админкой) ===== */
const CFG_KEY = 'canvasdesk_config';
const LANG_KEY = 'cd_lang';

function isPlainObj(v) { return v && typeof v === 'object' && !Array.isArray(v); }

function deepMerge(base, over) {
  for (const k in over) {
    if (isPlainObj(over[k]) && isPlainObj(base[k])) deepMerge(base[k], over[k]);
    else base[k] = over[k];
  }
  return base;
}

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function setPath(obj, path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((o, k) => (o[k] ??= isPlainObj(obj?.[k]) || isNaN(k) ? {} : []), obj);
  target[last] = value;
}

function loadConfig() {
  const cfg = structuredClone(DEFAULT_CONFIG);
  try {
    const s = localStorage.getItem(CFG_KEY);
    if (s) deepMerge(cfg, JSON.parse(s));
  } catch (e) { /* ignore */ }
  return cfg;
}

async function loadConfigAsync() {
  const cfg = structuredClone(DEFAULT_CONFIG);
  // 1) config.json с сервера (продакшен)
  if (location.protocol.startsWith('http')) {
    try {
      const r = await fetch('config.json', { cache: 'no-store' });
      if (r.ok) deepMerge(cfg, await r.json());
    } catch (e) { /* ignore */ }
  }
  // 2) localStorage поверх (превью правок из админки)
  try {
    const s = localStorage.getItem(CFG_KEY);
    if (s) deepMerge(cfg, JSON.parse(s));
  } catch (e) { /* ignore */ }
  return cfg;
}

function saveConfig(cfg) { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); }
function resetConfig()   { localStorage.removeItem(CFG_KEY); }
function t(obj, lang)    { return (obj && (obj[lang] ?? obj.en)) || ''; }
