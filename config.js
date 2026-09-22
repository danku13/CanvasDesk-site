/* ===== CanvasDesk — конфигурация сайта (v4: копирайт по аудиториям + CJM-аудит) =====
   Дефолтные значения. Админка (admin.html) сохраняет правки в localStorage,
   а для деплоя экспортирует config.json в корень сайта.

   Приоритет источников (от высшего к низшему):
     1. localStorage  — правки из админки (мгновенное превью, только у вас)
     2. config.json   — продакшен-контент (для всех посетителей)
     3. значения ниже — базовые дефолты

   Позиционирующий контракт — ADR-0007 (репозиторий CanvasDesk):
   «CanvasDesk — визуальная система математического моделирования».

   CJM-принцип страницы (v4): каждый тип пользователя за 5 секунд
   (заголовок + подзаголовок + CTA) и один скролл (секция personas)
   получает ответ «зачем мне этот сервис». Копирайт упрощён:
   без FR-кодов и внутренней терминологии на первых экранах. */

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
    text: { en: 'New: the same engine runs in your browser — CanvasDesk Web', ru: 'Новое: тот же движок работает в браузере — CanvasDesk Web' },
    cta:  { en: 'Open the app', ru: 'Открыть приложение' }
  },

  hero: {
    badge: { en: 'Free & open source · Rust · WebGPU', ru: 'Бесплатно · открытый код · Rust · WebGPU' },
    titleA: { en: 'The canvas that', ru: 'Канвас, который' },
    titleAccent: { en: 'does the math', ru: 'считает сам' },
    subtitle: {
      en: 'Build models that compute themselves: service capacity, unit economics, startup runway — the math lives right on the canvas.',
      ru: 'Собирайте модели, которые считают себя сами: capacity сервиса, юнит-экономика, runway стартапа — математика живёт прямо на канвасе.'
    },
    ctaPrimary:   { en: 'Try in the browser', ru: 'Открыть веб-версию' },
    ctaSecondary: { en: 'Star on GitHub',     ru: 'Звезда на GitHub' },
    ctaTertiary:  { en: 'Documentation',      ru: 'Документация' },
    chips: ['Web · WebGPU', 'Windows 10/11', 'Linux · macOS', 'JSON Canvas', 'MCP'],
    mediaTitle: { en: 'Reference model: service capacity on the canvas', ru: 'Эталонная модель: расчёт capacity сервиса на канвасе' },
    mediaHint:  { en: 'Numi-sheets, value-edges with live labels, template nodes', ru: 'Numi-листы, value-связи с живыми подписями, шаблонные ноды' },
    communityLink: { en: 'Pick your platform', ru: 'Выберите свою платформу' }
  },

  /* CJM: один скролл от hero — и каждый находит себя.
     Карточка = кто вы (title) → зачем вам сервис (goal, ≤ 8 слов)
     → доказательство (proof) → кнопка «попробовать». */
  personas: {
    kicker: { en: 'Find yourself', ru: 'Найдите себя' },
    title:  { en: 'Why CanvasDesk — for you', ru: 'Зачем вам CanvasDesk' },
    subtitle: { en: 'One canvas — four kinds of problems. Pick yours and build a working model in minutes.', ru: 'Один канвас — четыре класса задач. Выберите свой и соберите рабочую модель за минуты.' },
    cta: { en: 'Try in browser', ru: 'Открыть в браузере' },
    items: [
      { icon: '🏗️', id: 'arch', title: { en: 'System architects', ru: 'Архитекторам' },
        goal: { en: 'Capacity and bottlenecks — before deployment', ru: 'Capacity и узкие места — до деплоя' },
        proof: { en: 'Erlang-C and M/M/1 built in, overload ρ ≥ 1 lights up on the canvas, what-if without touching prod', ru: 'Erlang-C и M/M/1 из коробки, перегрузка ρ ≥ 1 подсвечивается на канвасе, what-if без продакшена' } },
      { icon: '📈', id: 'analyst', title: { en: 'Product analysts', ru: 'Продуктовым аналитикам' },
        goal: { en: 'Unit economics and growth on one plane', ru: 'Юнит-экономика и рост на одном экране' },
        proof: { en: 'LTV, CAC, retention D1/D7/D30, funnels — 30 ready templates instead of a jungle of tabs', ru: 'LTV, CAC, retention D1/D7/D30, воронки — 30 готовых шаблонов вместо джунглей табличек' } },
      { icon: '🧭', id: 'pm', title: { en: 'Product managers', ru: 'Продакт-менеджерам' },
        goal: { en: 'Product bets — into checkable models', ru: 'Продуктовые гипотезы — в проверяемые модели' },
        proof: { en: 'What-if scenarios was → became (+Δ), pricing and runway business cases — a model you can show, not a screenshot', ru: 'What-if сценарии «было → стало (+Δ)», бизнес-кейсы по прайсингу и runway — модель, которую можно показать, а не скриншот' } },
      { icon: '🤖', id: 'ai', title: { en: 'Working with AI', ru: 'Работающим с ИИ' },
        goal: { en: 'Describe the model in words — the agent builds it', ru: 'Опишите модель словами — агент соберёт' },
        proof: { en: '39 MCP tools for Claude and others: assembly in minutes, verified against a reference within ±1%', ru: '39 MCP-инструментов для Claude и других: сборка за минуты, проверка по эталону ±1%' } }
    ]
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
    title:  { en: 'A model that computes itself', ru: 'Модель, которая считает себя сама' },
    subtitle: {
      en: 'Not a picture, not a spreadsheet — the math lives on the canvas and recalculates as you watch.',
      ru: 'Не картинка и не табличка — математика живёт на канвасе и пересчитывается у вас на глазах.'
    },
    items: [
      { icon: '♾️', title: { en: 'Infinite canvas', ru: 'Бесконечный канвас' }, text: { en: 'Zoom to cursor, infinite grid, groups and focus mode — 5000 nodes at 60 FPS.', ru: 'Зум к курсору, бесконечная сетка, группы и фокус — 5000 нод при 60 FPS.' } },
      { icon: '🧮', title: { en: 'Numi sheets', ru: 'Numi-листы' }, text: { en: 'Formulas in plain language: rps = 1000, latency = 50 ms — every line computes as you type.', ru: 'Формулы человеческим языком: rps = 1000, latency = 50 ms — строка считает себя по мере ввода.' } },
      { icon: '🌊', title: { en: 'Value flow', ru: 'Поток значений' }, text: { en: 'Draw an edge — the value recalculates the whole chain instantly.', ru: 'Проведите связь — значение пересчитает всю цепочку мгновенно.' } },
      { icon: '📚', title: { en: '45 templates', ru: '45 шаблонов' }, text: { en: 'Infrastructure, unit economics, product analytics — ready-made calculation nodes for three worlds.', ru: 'Инфраструктура, юнит-экономика, продуктовая аналитика — готовые расчётные ноды для трёх миров.' } },
      { icon: '📐', title: { en: 'Math in the core', ru: 'Математика в ядре' }, text: { en: 'Erlang-C, NPV, cohort LTV and unit conversion — built in, not hand-written formulas.', ru: 'Erlang-C, NPV, cohort LTV и конвертация единиц — встроены, а не пишутся вручную.' } },
      { icon: '🔎', title: { en: 'Bottlenecks & what-if', ru: 'Узкие места и what-if' }, text: { en: 'Overloads light up on the canvas; scenarios show was → became (+Δ).', ru: 'Перегрузки подсвечиваются на канвасе; сценарии показывают «было → стало (+Δ)».' } },
      { icon: '🤖', title: { en: 'AI agent via MCP', ru: 'ИИ-агент через MCP' }, text: { en: 'Describe the model in words — the agent assembles and verifies it in minutes.', ru: 'Опишите модель словами — агент соберёт и проверит её за минуты.' } },
      { icon: '🗂️', title: { en: 'Open format', ru: 'Открытый формат' }, text: { en: 'JSON Canvas files: open in Obsidian and back, no lock-in.', ru: 'JSON Canvas-файлы: открываются в Obsidian и обратно, без lock-in.' } }
    ]
  },

  steps: {
    kicker: { en: 'Get started', ru: 'Начало работы' },
    title:  { en: 'First model in three steps', ru: 'Первая модель — три шага' },
    subtitle: {
      en: 'No install needed: the same engine runs in the browser and natively.',
      ru: 'Без установки: тот же движок работает в браузере и нативно.'
    },
    items: [
      { icon: '🌐', title: { en: 'Open the web version', ru: 'Откройте веб-версию' }, text: { en: 'CanvasDesk Web runs in Chrome/Edge. Prefer desktop? Builds for Windows, Linux and macOS.', ru: 'CanvasDesk Web работает в Chrome/Edge. Нужен десктоп? Сборки для Windows, Linux и macOS.' } },
      { icon: '🧮', title: { en: 'Build the model', ru: 'Соберите модель' }, text: { en: 'Write Numi formulas or drop templates from the palette (Ctrl+P). Connect nodes — numbers recalculate on the fly.', ru: 'Пишите формулы Numi или берите шаблоны из палитры (Ctrl+P). Соедините ноды — числа пересчитываются на лету.' } },
      { icon: '🤖', title: { en: 'Bring in the AI agent', ru: 'Подключите ИИ-агента' }, text: { en: 'canvasdesk mcp — and Claude assembles the reference model for you. You get the parameters and the deltas.', ru: 'canvasdesk mcp — и Claude соберёт эталонную модель за вас. Вам останутся параметры и дельты.' } }
    ],
    installTitle: { en: 'Connect the agent (MCP)', ru: 'Подключение ИИ-агента (MCP)' },
    installHint: { en: 'Add this to Claude Desktop or any MCP client — the whole stack in one command.', ru: 'Добавьте блок в Claude Desktop или любой MCP-клиент — весь стек одной командой.' },
    installCommands: '{\n  "mcpServers": {\n    "canvasdesk": {\n      "command": "canvasdesk.exe",\n      "args": ["mcp"]\n    }\n  }\n}',
    copy:   { en: 'Copy',     ru: 'Копировать' },
    copied: { en: 'Copied!',  ru: 'Скопировано!' }
  },

  dives: {
    files: {
      kicker: { en: 'Calculation core', ru: 'Расчётное ядро' },
      title: { en: 'Numi sheets: formulas that flow across the canvas', ru: 'Numi-листы: формулы, которые текут по канвасу' },
      text: { en: 'A note becomes a program: lines compute top-down, values flow along edges into neighboring nodes. Change the source — the downstream recalculates within the frame.', ru: 'Заметка становится программой: строки считаются сверху вниз, значения текут по связям в соседние ноды. Поменяли источник — downstream пересчитался в пределах кадра.' },
      bullets: {
        en: ['Units with dimensions: 100 req / 2 sec = 50 req/s', '$in, $1..$N and named value ports', 'A value poured from a node overrides the template default', 'Autocomplete: functions, units, variables'],
        ru: ['Единицы с размерностями: 100 req / 2 sec = 50 req/s', '$in, $1..$N и именованные порты значений', 'Значение из ноды перекрывает дефолт шаблона', 'Автодополнение: функции, единицы, переменные']
      },
      mediaTitle: { en: 'Numi sheet with autocomplete and a result line', ru: 'Numi-лист с автодополнением и строкой результата' },
      mediaHint:  { en: 'An erroneous line is highlighted — the rest keep computing', ru: 'Ошибочная строка подсвечена — остальные продолжают считать' }
    },
    widgets: {
      kicker: { en: 'Library · 45 templates', ru: 'Библиотека · 45 шаблонов' },
      title: { en: 'Ready-made calculations from three worlds', ru: 'Готовые расчёты из трёх миров' },
      text: { en: 'A template is a calculation role for a node: typed parameters plus a formula. Grab it from the palette and pour values in from neighboring nodes.', ru: 'Шаблон — расчётная роль ноды: типизированные параметры плюс формула. Возьмите из палитры — и пролейте в него значения из соседних нод.' },
      bullets: {
        en: ['Infrastructure · 15: LB, gateway, cache, DB, Kafka, CDN', 'Unit economics · 18: CAC, LTV, MRR, ARPU, runway', 'Product analytics · 12: retention, funnel, NPS, stickiness', 'Custom templates and composites — planned'],
        ru: ['Инфраструктура · 15: балансировщик, шлюз, кэш, БД, Kafka, CDN', 'Юнит-экономика · 18: CAC, LTV, MRR, ARPU, runway', 'Продуктовая аналитика · 12: retention, воронка, NPS, stickiness', 'Свои шаблоны и композиты — в планах']
      },
      mediaTitle: { en: 'Template palette: search across 45 calculation nodes', ru: 'Палитра шаблонов: поиск по 45 расчётным нодам' },
      mediaHint:  { en: 'Categories: infrastructure, unit economics, product analytics', ru: 'Категории: инфраструктура, юнит-экономика, продуктовая аналитика' }
    },
    ai: {
      kicker: { en: 'AI · MCP', ru: 'ИИ · MCP' },
      title: { en: 'The agent assembles — the human explores', ru: 'Агент собирает — человек исследует' },
      text: { en: 'CanvasDesk ships an MCP server: Claude or any MCP client gets tools to read the graph, validate it and apply changes atomically. Reference models converge with oracle numbers within ±1%.', ru: 'CanvasDesk содержит MCP-сервер: Claude или любой MCP-клиент получает инструменты чтения графа, валидации и атомарных изменений. Эталонные модели сходятся с оракулом в пределах ±1%.' },
      bullets: {
        en: ['canvasdesk mcp — the whole stack in one command', 'graph_apply: assemble a model in one call', 'graph_validate: cycles, units, overloads', '39 tools, verified against references ±1%'],
        ru: ['canvasdesk mcp — весь стек одной командой', 'graph_apply: сборка модели одним вызовом', 'graph_validate: циклы, единицы, перегрузки', '39 инструментов, проверка по эталонам ±1%']
      },
      mediaTitle: { en: 'AI agent assembles a reference model via MCP', ru: 'ИИ-агент собирает эталонную модель по MCP' },
      mediaHint:  { en: 'Validate, apply, analyze bottlenecks, what-if — 39 tools', ru: 'Валидация, сборка, анализ узких мест, what-if — 39 инструментов' }
    },
    desktop: {
      kicker: { en: 'Format · carrier', ru: 'Формат · носитель' },
      title: { en: '.canvas: open format, real files', ru: '.canvas: открытый формат, настоящие файлы' },
      text: { en: 'The storage format is JSON Canvas: layouts open in Obsidian and back, fields survive the round-trip. Cards are real files; widgets and desktop mode are the carrier for your models.', ru: 'Формат хранения — JSON Canvas: раскладки открываются в Obsidian и обратно, поля не теряются. Карточки — настоящие файлы, а виджеты и режим «вместо стола» — носитель ваших моделей.' },
      bullets: {
        en: ['Round-trip with Obsidian: layout and data survive', 'Cards are real files — drag-and-drop from Explorer', 'Widget SDK: sdk/canvasdesk.ts', 'Desktop mode on Windows'],
        ru: ['Round-trip с Obsidian: раскладка и данные не теряются', 'Карточки — реальные файлы, drag-and-drop из проводника', 'SDK виджетов: sdk/canvasdesk.ts', 'Режим «вместо рабочего стола» на Windows']
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
    subtitle: { en: 'Windows — the full set; Linux and macOS — the windowed canvas with more to come. The web version runs in Chrome/Edge.', ru: 'Windows — полный набор; Linux и macOS — оконный канвас, дальше — больше. Веб-версия работает в Chrome/Edge.' },
    columns: { en: ['Capability', 'Windows', 'Linux', 'macOS'], ru: ['Возможность', 'Windows', 'Linux', 'macOS'] },
    rows: [
      { name: { en: 'Canvas, notes, edges, minimap, search, undo', ru: 'Канвас, заметки, связи, миникарта, поиск, undo' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'Numi engine, value flow, templates', ru: 'Numi-движок, поток значений, шаблоны' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'File thumbnails', ru: 'Тамбнейлы файлов' }, win: 'yes', linux: 'planned', mac: 'planned' },
      { name: { en: 'Drag-and-drop from file manager', ru: 'Drag-and-drop из файлового менеджера' }, win: 'yes', linux: 'planned', mac: 'planned' },
      { name: { en: 'MCP (AI clients)', ru: 'MCP (ИИ-клиенты)' }, win: 'yes', linux: 'planned', mac: 'planned' },
      { name: { en: 'Live widgets / desktop mode', ru: 'Живые виджеты / режим «вместо стола»' }, win: 'yes', linux: '—', mac: '—' }
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

  early: {
    kicker: { en: 'Shape the product', ru: 'Влияйте на продукт' },
    title:  { en: 'Become an early user', ru: 'Станьте ранним пользователем' },
    subtitle: { en: 'CanvasDesk is young — early users still shape it: your scenarios go straight into development, and new features reach you first.', ru: 'CanvasDesk ещё молодой — ранние пользователи влияют на него напрямую: ваши сценарии попадают в разработку, а новое вы видите первым.' },
    items: [
      { icon: '🧪', title: { en: 'Try it first', ru: 'Пробуйте первым' },
        text: { en: 'Open the web version — no install. Desktop builds for Windows, Linux and macOS.', ru: 'Откройте веб-версию — без установки. Есть сборки для Windows, Linux и macOS.' } },
      { icon: '💬', title: { en: 'Say what’s missing', ru: 'Скажите, чего не хватает' },
        text: { en: 'Drop your use case in GitHub Discussions — it can become the next template. The author reads everything.', ru: 'Опишите сценарий в GitHub Discussions — он может стать следующим шаблоном. Автор читает всё.' } },
      { icon: '🚀', title: { en: 'Get new features first', ru: 'Получайте новое первым' },
        text: { en: 'Watch releases and the devlog — early users see features before they land in the docs.', ru: 'Следите за релизами и devlog — ранние пользователи видят фичи раньше, чем они попадут в документацию.' } }
    ],
    ctaPrimary:   { en: 'Open in browser',     ru: 'Открыть в браузере' },
    ctaSecondary: { en: 'Join Discussions',    ru: 'Написать в Discussions' }
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
      { q: { en: 'What is CanvasDesk?', ru: 'Что такое CanvasDesk?' }, a: { en: 'A visual mathematical modeling system: on an infinite canvas you assemble models from Numi sheets and templates, values flow along edges and recalculate instantly. An AI agent can assemble and verify the model for you.', ru: 'Визуальная система математического моделирования: на бесконечном канвасе вы собираете модели из Numi-листов и шаблонов, значения текут по связям и пересчитываются мгновенно. ИИ-агент может собрать и проверить модель за вас.' } },
      { q: { en: 'Can I try it without installing?', ru: 'Можно ли попробовать без установки?' }, a: { en: 'Yes — CanvasDesk Web runs in Chrome/Edge right in the browser. For desktop there are builds for Windows 10/11, Linux and macOS.', ru: 'Да — CanvasDesk Web работает в Chrome/Edge прямо в браузере. Для десктопа есть сборки для Windows 10/11, Linux и macOS.' } },
      { q: { en: 'What is a Numi sheet?', ru: 'Что такое Numi-лист?' }, a: { en: 'A note whose lines compute: “rps = 1000”, “latency = 50 ms”. Units convert automatically (1 sec + 500 ms = 1.5 sec), variables flow top-down.', ru: 'Заметка, чьи строки считаются: «rps = 1000», «latency = 50 ms». Единицы конвертируются автоматически (1 sec + 500 ms = 1.5 sec), переменные текут сверху вниз.' } },
      { q: { en: 'How is it different from Excel?', ru: 'Чем это отличается от Excel?' }, a: { en: 'Formulas live on the canvas as connected nodes: the model structure is visible, bottlenecks are highlighted, what-if shows was → became deltas. Plus domain functions — erlang_c, npv, cohort_ltv — and an open file format.', ru: 'Формулы живут на канвасе нодами со связями: структура модели видна, узкие места подсвечиваются, what-if показывает дельты «было → стало». Плюс доменные функции — erlang_c, npv, cohort_ltv — и открытый формат.' } },
      { q: { en: 'How is it different from Miro or Obsidian Canvas?', ru: 'Чем это отличается от Miro или Obsidian Canvas?' }, a: { en: 'Boards store pictures of thoughts; CanvasDesk nodes compute numbers. The format is JSON Canvas: layouts open in Obsidian and back.', ru: 'Доски хранят картинки мыслей; ноды CanvasDesk считают числа. Формат — JSON Canvas: раскладки открываются в Obsidian и обратно.' } },
      { q: { en: 'How do I connect an AI agent?', ru: 'Как подключить ИИ-агента?' }, a: { en: 'One command — canvasdesk mcp — starts an MCP server for Claude Desktop and any MCP client: 39 tools including graph_apply and graph_validate.', ru: 'Одна команда — canvasdesk mcp — поднимает MCP-сервер для Claude Desktop и любых MCP-клиентов: 39 инструментов, включая graph_apply и graph_validate.' } },
      { q: { en: 'How fast is the engine?', ru: 'Что с производительностью?' }, a: { en: 'A 1000-node graph recalculates in under 10 ms; the canvas keeps 5000 nodes at 60 FPS.', ru: 'Граф из 1000 нод пересчитывается быстрее 10 мс; канвас держит 5000 нод при 60 FPS.' } },
      { q: { en: 'How can I support the project?', ru: 'Как поддержать проект?' }, a: { en: 'Star the repository on GitHub, share it with architects, analysts and product managers, or use the donation links below — they fund the development directly.', ru: 'Поставьте звезду репозиторию на GitHub, поделитесь им с архитекторами, аналитиками и продакт-менеджерами или воспользуйтесь ссылками на поддержку ниже — они идут напрямую в разработку.' } }
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
    text:     { en: 'Try the web version or wire up the agent — and build your first model today.', ru: 'Попробуйте веб-версию или подключите агента — и соберите первую модель уже сегодня.' },
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
