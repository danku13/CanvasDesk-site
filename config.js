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
  discord:        { icon: '💬', label: 'Discord',          kind: 'chat' },
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
    /* ICE #1: zero-friction trust-строка под CTA — паттерн drawio («Free forever · No sign-up · No lock-in») */
    trustLine: { en: 'No sign-up · Free · Open source', ru: 'Без регистрации · Бесплатно · Открытый код' },
    chips: ['Web · WebGPU', 'Windows 10/11', 'Linux · macOS', 'JSON Canvas', 'MCP'],
    mediaTitle: { en: 'Reference model: service capacity on the canvas', ru: 'Эталонная модель: расчёт capacity сервиса на канвасе' },
    mediaHint:  { en: 'Numi-sheets, value-edges with live labels, template nodes', ru: 'Numi-листы, value-связи с живыми подписями, шаблонные ноды' },
    communityLink: { en: 'Pick your platform', ru: 'Выберите свою платформу' }
  },

  /* CJM v5: user story по умолчанию (боль синхронизации → «всё в одном месте»)
     + интерактивный выбор роли: клик по роли раскрывает детали (details).
     ИИ — не роль, а инструмент: история ИИ живёт в dive «AI & MCP», steps и FAQ.
     Роли взяты из критерия «визуальное проектирование → наложение расчётов»
     (docs/market-researches/audiences: SA/EA) и обсуждения с владельцем. */
  personas: {
    kicker: { en: 'Find yourself', ru: 'Найдите себя' },
    title:  { en: 'Why CanvasDesk — for you', ru: 'Зачем вам CanvasDesk' },
    subtitle: { en: 'One canvas — five roles. Pick yours and see exactly what you get.', ru: 'Один канвас — пять ролей. Выберите свою — и увидите, что именно вы получите.' },
    storyTitle: { en: 'The diagram-in-Miro, math-in-Excel treadmill — replaced by one file', ru: 'Схема в одной системе, цифры в другой — вместо этого один файл' },
    story: {
      en: 'Usually the numbers live apart from the diagram: the system in Miro or drawio, the math in Excel, the notes in a doc. One input changes — and you manually sync spreadsheets, diagrams and slides. The more people touch the model, the faster the versions drift, and decisions get made on stale numbers.\n\nCanvasDesk replaces that bundle with one file. Schema, formulas and calculation live together: change an input and the whole chain recalculates. The math is visible — structure and connections instead of columns of numbers — and variability is live: “what if traffic doubles? what if churn drops a point?” Hand the file to a teammate: same numbers, same logic — no “my version says otherwise”.',
      ru: 'Обычно расчёт живёт отдельно от схемы: система — в Miro или drawio, цифры — в Excel, пояснения — в документе. Меняется одно число — синхронизировать приходится всё: таблицы, схемы, презентации. Чем больше людей работает с моделью, тем быстрее версии расходятся, и решения принимаются по устаревшим цифрам.\n\nCanvasDesk заменяет эту связку одним файлом. Схема, формулы и расчёт живут вместе: меняете исходное значение — пересчитывается вся цепочка. Расчёт видно наглядно — со структурой и связями, а не колонками цифр, — и вариативность показывается вживую: «а если трафик вырастет вдвое? а если churn упадёт на пункт?» Модель передаётся коллеге одним файлом: он откроет те же цифры и зависимости — без «у меня в версии посчитано иначе».'
    },
    hint: { en: 'Pick a role — the panel below unfolds what you get', ru: 'Нажмите на роль — ниже раскроется, что именно вы получите' },
    plannedLabel: { en: 'Planned', ru: 'В планах' },
    planned: {
      en: ['Excel export for calculations', 'DuckDB: live data from databases, APIs and files — including S3 and FTP'],
      ru: ['Выгрузка расчётов в Excel', 'DuckDB: живые данные из баз, API и файлов — включая S3 и FTP']
    },
    cta: { en: 'Try in browser', ru: 'Открыть в браузере' },
    items: [
      { icon: '🏗️', id: 'arch', title: { en: 'System architects', ru: 'Архитекторам' },
        goal: { en: 'Capacity and bottlenecks — before deployment', ru: 'Ёмкость и узкие места — до деплоя' },
        details: {
          en: ['Design load is computed along the edges: change input rps — the whole chain recalculates instantly', 'Bottlenecks are visible before load tests: overload (ρ ≥ 1) lights up right on the canvas', 'Erlang-C, M/M/1 and unit conversion are built in — no hand-written queueing formulas to verify', 'Variability is live: what-if at ×2 and ×10 traffic — no experiments on production', 'The diagram never drifts from the numbers: diagram and math are one file, not “a picture plus a spreadsheet”'],
          ru: ['Проектная нагрузка считается по связям: поменяли rps на входе — вся цепочка пересчиталась мгновенно', 'Узкие места видны до нагрузочных тестов: перегрузка (ρ ≥ 1) подсвечивается прямо на канвасе', 'Erlang-C, M/M/1 и конвертация единиц встроены — формулы очередей не нужно писать и проверять вручную', 'Вариативность показывается вживую: what-if по трафику ×2 и ×10 — без экспериментов на проде', 'Схема не расходится с цифрами: диаграмма и расчёт — один файл, а не «рисунок плюс таблица»']
        } },
      { icon: '🔗', id: 'sysanalyst', title: { en: 'Systems analysts', ru: 'Системным аналитикам' },
        goal: { en: 'Integration diagrams — with volume math built in', ru: 'Схема интеграций — сразу с расчётом объёмов' },
        details: {
          en: ['Integrations and data flows as a graph: nodes, edges, contour groups — readable at any zoom', 'Volumes and frequencies live on the edges: rps, message size, period — no attached spreadsheet', 'The diagram never rots: an edit in one node propagates to every dependent one', 'One .canvas file instead of “diagram plus math”: everyone sees one version with the same numbers', 'Approvals get faster: stakeholders open and explore the model instead of flipping through screenshots'],
          ru: ['Интеграции и потоки данных — как граф: ноды, связи, группы контуров; схема читается на любом масштабе', 'Объёмы и частоты живут прямо на связях: rps, размер сообщения, период — без приложенной таблицы', 'Схема не протухает: правка в одном узле автоматически разносится по всем зависимым', 'Один файл .canvas вместо связки «диаграмма + расчёт»: все участники видят одну версию с одинаковыми цифрами', 'Согласование быстрее: модель можно открыть и покрутить, а не листать скриншоты']
        } },
      { icon: '📊', id: 'bisanalyst', title: { en: 'Business analysts', ru: 'Бизнес-аналитикам' },
        goal: { en: 'Business processes and money flows — visual, with real math', ru: 'Бизнес-процессы и денежные потоки — наглядно и с цифрами' },
        details: {
          en: ['Processes and money flows as a diagram: even people who never open spreadsheets follow the structure', 'Every number unfolds into its formula: assumptions are explicit, so debates are about inputs, not arithmetic', 'Variability to defend the solution: “was → became (+Δ)” scenarios — what a tariff, process or volume change yields', 'Data comes in from CSV; Excel export of results is on the roadmap', 'The model is open JSON Canvas: no lock-in, the file stays yours'],
          ru: ['Процессы и денежные потоки — схемой: структуру видит даже тот, кто не открывал таблицу', 'Любое число раскрывается до формулы: допущения прописаны явно, спорят о вводных, а не о пересчётах', 'Вариативность для защиты решения: сценарии «было → стало (+Δ)» — что даст изменение тарифа, процесса или объёма', 'Данные подтягиваются из CSV; выгрузка расчётов в Excel — в планах', 'Модель — в открытом формате JSON Canvas: не привязаны к сервису, файл остаётся вашим']
        } },
      { icon: '🚀', id: 'product', title: { en: 'Product teams', ru: 'Продуктовым командам' },
        goal: { en: 'Funnels, metric trees and unit economics — in a checkable model', ru: 'Воронки, деревья метрик и юнит-экономика — в проверяемой модели' },
        details: {
          en: ['Funnels and metric trees compute themselves: change a step conversion — the whole funnel recalculates', 'LTV, CAC, retention D1/D7/D30, runway — from ready-made templates (18 in the product analytics set)', 'What-if on price, churn and traffic — “was → became” deltas: variability is visible instantly, no manual recalc', 'Show the hypothesis to the team whole: structure, assumptions and numbers in view, not across six tabs', 'The model travels as one file: a teammate opens it and tweaks the inputs — no “my version says otherwise”'],
          ru: ['Воронки и деревья метрик считаются сами: поменяяли конверсию шага — вся воронка пересчиталась', 'LTV, CAC, retention D1/D7/D30, runway — готовыми шаблонами (18 в категории продуктовой аналитики)', 'What-if по цене, churn и трафику — дельтами «было → стало»: вариативность видна сразу, без пересчёта руками', 'Гипотезу показываешь команде целиком: структура, допущения и цифры перед глазами, а не в шести вкладках', 'Модель передаётся одним файлом: коллега откроет и поменяет вводные — никаких «у меня в версии иначе»']
        } },
      { icon: '🧭', id: 'cto', title: { en: 'CTO & CIO', ru: 'CTO и CIO' },
        goal: { en: 'The solution, its cost and risks — before rollout', ru: 'Решение, его стоимость и риски — до внедрения' },
        details: {
          en: ['Infrastructure cost and capacity as one model instead of a multi-sheet spreadsheet', 'Scaling risks are visible on the diagram: bottlenecks highlight before the contract or tender', 'The team’s model can be opened and checked: assumptions are explicit, not hidden in cells', 'For committees and the board: math you present visually — with the diagram and what-if, not an Excel screenshot'],
          ru: ['Стоимость инфраструктуры и ёмкость — одной моделью вместо многостраничной таблицы', 'Риски масштабирования видны на схеме: узкие места подсвечиваются до контракта и тендера', 'Модель команды можно открыть и проверить: допущения прописаны явно, а не спрятаны в ячейках', 'Для комитета и руководства: расчёт, который показывают наглядно — со схемой и вариативностью, а не скриншотом Excel']
        } }
    ]
  },

  stats: [
    { value: '45',     label: { en: 'built-in templates',            ru: 'встроенных шаблонов' } },
    { value: '39',     label: { en: 'MCP tools for AI agents',       ru: 'MCP-инструментов для ИИ' } },
    { value: '<10 ms', label: { en: 'to recalc 1000 nodes',          ru: 'пересчёт 1000 нод' } },
    { value: '5000',   label: { en: 'nodes at 60 FPS',               ru: 'нод при 60 FPS' } },
    { value: '3',      label: { en: 'OS builds in CI + web version', ru: 'ОС в сборках CI + веб-версия' } }
  ],

  /* ICE #6: лицензия — категорийный trust-сигнал (паттерн 15/15 эталонов) */
  license: {
    name: 'AGPL-3.0',
    url:  'https://github.com/danku13/CanvasDesk/blob/main/LICENSE'
  },

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
      en: 'Schema, formulas and results — in one place. Values flow along the edges: change an input, and the whole chain recalculates instantly.',
      ru: 'Схема, формулы и результат — в одном месте. Значения передаются по связям между узлами: меняете исходные данные — вся цепочка пересчитывается мгновенно.'
    },
    items: [
      { icon: '♾️', title: { en: 'Infinite canvas', ru: 'Бесконечный канвас' }, text: { en: 'Zoom to cursor, infinite grid, groups and focus mode — 5000 nodes at 60 FPS.', ru: 'Зум к курсору, бесконечная сетка, группы и фокус — 5000 нод при 60 FPS.' } },
      { icon: '🧮', title: { en: 'Numi sheets', ru: 'Numi-листы' }, text: { en: 'Formulas in plain language: rps = 1000, latency = 50 ms — every line computes as you type.', ru: 'Формулы человеческим языком: rps = 1000, latency = 50 ms — строка считает себя по мере ввода.' } },
      { icon: '🌊', title: { en: 'Value flow', ru: 'Поток значений' }, text: { en: 'Draw an edge — the whole chain recalculates instantly, from inputs to results.', ru: 'Провели связь — вся цепочка пересчиталась мгновенно: от исходных данных до итога.' } },
      { icon: '📚', title: { en: '45 templates', ru: '45 шаблонов' }, text: { en: 'Infrastructure, unit economics, product analytics — ready-made calculation nodes for three worlds.', ru: 'Инфраструктура, юнит-экономика, продуктовая аналитика — готовые расчётные ноды для трёх миров.' } },
      { icon: '📐', title: { en: 'Math in the core', ru: 'Математика в ядре' }, text: { en: 'Erlang-C, NPV, cohort LTV and unit conversion — built in, not hand-written formulas.', ru: 'Erlang-C, NPV, cohort LTV и конвертация единиц — встроены, а не пишутся вручную.' } },
      { icon: '🔎', title: { en: 'Bottlenecks & what-if', ru: 'Узкие места и what-if' }, text: { en: 'Overloads light up on the canvas; scenarios show was → became (+Δ).', ru: 'Перегрузки подсвечиваются на канвасе; сценарии показывают «было → стало (+Δ)».' } },
      { icon: '🤖', title: { en: 'AI agent via MCP', ru: 'ИИ-агент через MCP' }, text: { en: 'Describe the model in words — the agent assembles and verifies it in minutes.', ru: 'Опишите модель словами — агент соберёт и проверит её за минуты.' } },
      { icon: '🗂️', title: { en: 'All in one file', ru: 'Всё в одном файле' }, text: { en: 'Schema, formulas and math live in one .canvas file (JSON Canvas). Opens in Obsidian and back — no lock-in.', ru: 'Схема, формулы и расчёт живут в одном .canvas-файле (JSON Canvas). Открывается в Obsidian и обратно — без привязки к сервису.' } }
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
      text: { en: 'A note becomes a program: lines compute top-down, values flow along edges into neighboring nodes. Change the source — the whole chain below recalculates instantly.', ru: 'Заметка становится программой: строки считаются сверху вниз, значения текут по связям в соседние ноды. Меняете источник — вся цепочка ниже пересчитывается мгновенно.' },
      bullets: {
        en: ['Units with dimensions: 100 req / 2 sec = 50 req/s', '$in, $1..$N and named value ports', 'A value poured from a node overrides the template default', 'Autocomplete: functions, units, variables'],
        ru: ['Единицы с размерностями: 100 req / 2 sec = 50 req/s', '$in, $1..$N и именованные порты значений', 'Значение из ноды заменяет значение по умолчанию', 'Автодополнение: функции, единицы, переменные']
      },
      mediaTitle: { en: 'Numi sheet with autocomplete and a result line', ru: 'Numi-лист с автодополнением и строкой результата' },
      mediaHint:  { en: 'An erroneous line is highlighted — the rest keep computing', ru: 'Ошибочная строка подсвечена — остальные продолжают считать' }
    },
    widgets: {
      kicker: { en: 'Library · 45 templates', ru: 'Библиотека · 45 шаблонов' },
      title: { en: 'Ready-made calculations from three worlds', ru: 'Готовые расчёты из трёх миров' },
      text: { en: 'A template is a calculation role for a node: typed parameters plus a formula. Grab it from the palette and feed values in from neighboring nodes.', ru: 'Шаблон — расчётная роль ноды: типизированные параметры плюс формула. Выберите в палитре — и подайте в него значения из соседних узлов.' },
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
      text: { en: 'CanvasDesk ships an MCP server: Claude or any MCP client gets tools to read the graph, validate it and apply changes atomically. Assembled models match reference calculations within ±1%.', ru: 'CanvasDesk содержит MCP-сервер: Claude или любой MCP-клиент получает инструменты чтения графа, валидации и атомарных изменений. Собранные модели совпадают с эталонным расчётом в пределах ±1%.' },
      bullets: {
        en: ['canvasdesk mcp — the whole stack in one command', 'graph_apply: assemble a model in one call', 'graph_validate: cycles, units, overloads', '39 tools, verified against references ±1%'],
        ru: ['canvasdesk mcp — весь стек одной командой', 'graph_apply: сборка модели одним вызовом', 'graph_validate: циклы, единицы, перегрузки', '39 инструментов, проверка по эталонам ±1%']
      },
      mediaTitle: { en: 'AI agent assembles a reference model via MCP', ru: 'ИИ-агент собирает эталонную модель по MCP' },
      mediaHint:  { en: 'Validate, apply, analyze bottlenecks, what-if — 39 tools', ru: 'Валидация, сборка, анализ узких мест, what-if — 39 инструментов' }
    },
    desktop: {
      kicker: { en: 'Format · storage', ru: 'Формат · хранение' },
      title: { en: '.canvas: open format, real files', ru: '.canvas: открытый формат, настоящие файлы' },
      text: { en: 'The storage format is open JSON Canvas: layouts open in Obsidian and back with nothing lost. Your model is a real file on disk — share it with a teammate, commit it to a repo, or reopen it a year later.', ru: 'Формат хранения — открытый JSON Canvas: раскладки открываются в Obsidian и обратно без потерь. Ваша модель — настоящий файл на диске: передайте его коллеге, положите в репозиторий или откройте через год.' },
      bullets: {
        en: ['Round-trip with Obsidian: layout and data survive', 'Cards are real files — drag-and-drop from Explorer', 'Autosave every 2 s + a .bak of the previous version', 'One file: schema, formulas and results together'],
        ru: ['Round-trip с Obsidian: раскладка и данные не теряются', 'Карточки — реальные файлы: drag-and-drop из проводника', 'Автосейв каждые 2 секунды + резервная копия предыдущей версии', 'Один файл: схема, формулы и результаты вместе']
      },
      mediaTitle: { en: 'Your model is a regular .canvas file', ru: 'Ваша модель — обычный файл .canvas' },
      mediaHint:  { en: 'Autosave every 2 s + .bak of the previous version', ru: 'Автосейв каждые 2 с + .bak предыдущей версии' }
    }
  },

  gallery: {
    kicker: { en: 'Gallery', ru: 'Галерея' },
    title:  { en: 'See the models in action', ru: 'Посмотрите модели в действии' },
    subtitle: { en: 'Key scenarios of the calculation core: from a Numi sheet to an agent-assembled reference model.', ru: 'Ключевые сценарии расчётного ядра: от Numi-листа до эталонной модели, собранной агентом.' },
    items: [
      /* ICE #11: сценарные подписи под персоны — вопрос, который решает модель */
      { scenario: { en: 'Architects: will the service hold 10k rps?', ru: 'Архитекторам: выдержит ли сервис 10k rps?' }, title: { en: 'Canvas overview: capacity model with minimap', ru: 'Обзор канваса: модель capacity с миникартой' }, hint: 'assets/hero-canvas.png', poster: 'assets/hero-canvas.png' },
      { scenario: { en: 'Analysts: a formula that computes itself', ru: 'Аналитикам: формула, которая считает себя' }, title: { en: 'Numi sheet & autocomplete', ru: 'Numi-лист и автодополнение' }, hint: 'assets/shot-numi.png', poster: 'assets/shot-numi.png' },
      { scenario: { en: '45 ready calculations — from Erlang-C to LTV', ru: '45 готовых расчётов — от Erlang-C до LTV' }, title: { en: 'Palette: 45 templates in three categories', ru: 'Палитра: 45 шаблонов в трёх категориях' }, hint: 'assets/shot-templates.png', poster: 'assets/shot-templates.png' },
      { scenario: { en: 'Architects: where is the bottleneck at 2× traffic?', ru: 'Архитекторам: где узкое место при трафике ×2?' }, title: { en: 'Bottlenecks: ρ thresholds and overload', ru: 'Узкие места: пороги ρ и перегрузки' }, hint: 'assets/shot-bottleneck.png', poster: 'assets/shot-bottleneck.png' },
      { scenario: { en: 'PMs: what if churn drops by 1 pp?', ru: 'Продакт-менеджерам: что если churn упадёт на 1 п.п.?' }, title: { en: 'What-if: scenarios and deltas', ru: 'What-if: сценарии и дельты' }, hint: 'assets/shot-whatif.png', poster: 'assets/shot-whatif.png' },
      { scenario: { en: 'For the AI agent: a model from a text description', ru: 'Для ИИ-агента: модель по текстовому описанию' }, title: { en: 'AI agent assembles a model via MCP', ru: 'ИИ-агент собирает модель по MCP' }, hint: 'assets/shot-agent.png', poster: 'assets/shot-agent.png' }
    ]
  },

  compare: {
    kicker: { en: 'Comparison', ru: 'Сравнение' },
    title:  { en: 'How CanvasDesk compares', ru: 'Чем CanvasDesk отличается' },
    subtitle: { en: 'The model is computed and visible at the same time: numbers come from formulas, and the structure stays in view.', ru: 'Модель одновременно считается и видна: цифры берутся из формул, а структура остаётся перед глазами.' },
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
    subtitle: { en: 'Windows — the full set; Linux and macOS — the windowed canvas, the rest is planned. The web version runs in Chrome/Edge.', ru: 'Windows — полный набор; Linux и macOS — оконный канвас, остальное — в планах. Веб-версия работает в Chrome/Edge.' },
    columns: { en: ['Capability', 'Windows', 'Linux', 'macOS'], ru: ['Возможность', 'Windows', 'Linux', 'macOS'] },
    rows: [
      { name: { en: 'Canvas, notes, edges, minimap, search, undo', ru: 'Канвас, заметки, связи, миникарта, поиск, undo' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'Numi engine, value flow, templates', ru: 'Numi-движок, поток значений, шаблоны' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'File thumbnails', ru: 'Миниатюры файлов' }, win: 'yes', linux: 'planned', mac: 'planned' },
      { name: { en: 'Drag-and-drop from file manager', ru: 'Drag-and-drop из файлового менеджера' }, win: 'yes', linux: 'planned', mac: 'planned' },
      { name: { en: 'MCP (AI clients)', ru: 'MCP (ИИ-клиенты)' }, win: 'yes', linux: 'planned', mac: 'planned' }
    ],
    yes: { en: 'Full', ru: 'Полностью' }
  },

  early: {
    kicker: { en: 'Shape the product', ru: 'Влияйте на продукт' },
    title:  { en: 'Become an early user', ru: 'Станьте ранним пользователем' },
    /* ICE #7: честный призыв — причастность и личный доступ к автору, без цифр и обещаний сроков */
    subtitle: { en: 'CanvasDesk is young — early users still shape it: your scenarios go straight into development, and new features reach you first. We are looking for our first users — the author replies to everyone personally.', ru: 'CanvasDesk — молодой проект, и ранние пользователи влияют на него сильнее всего: ваши сценарии попадают прямо в разработку, новинки вы видите первыми. Ищем первых пользователей — автор отвечает каждому лично.' },
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
      { q: { en: 'How is it different from Excel?', ru: 'Чем это отличается от Excel?' }, a: { en: 'Formulas live on the canvas as connected nodes: the model structure is visible, bottlenecks are highlighted, what-if shows was → became deltas. Plus built-in functions — erlang_c, npv, cohort_ltv — and an open file format. Excel export is on the roadmap.', ru: 'Формулы живут на канвасе узлами со связями: структура модели видна, узкие места подсвечиваются, what-if показывает дельты «было → стало». Плюс встроенные функции — erlang_c, npv, cohort_ltv — и открытый формат. Выгрузка в Excel — в планах.' } },
      { q: { en: 'How is it different from Miro or Obsidian Canvas?', ru: 'Чем это отличается от Miro или Obsidian Canvas?' }, a: { en: 'A board keeps a picture of an idea; a CanvasDesk node computes numbers. The format is JSON Canvas: layouts open in Obsidian and back.', ru: 'На доске — картинка идеи, а нода CanvasDesk считает числа. Формат — JSON Canvas: раскладки открываются в Obsidian и обратно.' } },
      { q: { en: 'How do I connect an AI agent?', ru: 'Как подключить ИИ-агента?' }, a: { en: 'One command — canvasdesk mcp — starts an MCP server for Claude Desktop and any MCP client: 39 tools including graph_apply and graph_validate.', ru: 'Одна команда — canvasdesk mcp — поднимает MCP-сервер для Claude Desktop и любых MCP-клиентов: 39 инструментов, включая graph_apply и graph_validate.' } },
      { q: { en: 'How fast is the engine?', ru: 'Что с производительностью?' }, a: { en: 'A 1000-node graph recalculates in under 10 ms; the canvas keeps 5000 nodes at 60 FPS.', ru: 'Граф из 1000 нод пересчитывается быстрее 10 мс; канвас держит 5000 нод при 60 FPS.' } },
      { q: { en: 'How can I support the project?', ru: 'Как поддержать проект?' }, a: { en: 'Star the repository on GitHub, share it with architects, analysts and product teams, or <a href="https://www.donationalerts.com/r/daniilkuzmichev" target="_blank" rel="noopener noreferrer">support the author on DonationAlerts</a> — it funds the development directly.', ru: 'Поставьте звезду репозиторию на GitHub, расскажите о проекте архитекторам, аналитикам и продуктовым командам или <a href="https://www.donationalerts.com/r/daniilkuzmichev" target="_blank" rel="noopener noreferrer">поддержите автора на DonationAlerts</a> — это напрямую финансирует разработку.' } },
      /* ICE #12: юридическая гигиена и страх за данные */
      { q: { en: 'Are model results financial advice?', ru: 'Результаты моделей — это финансовая рекомендация?' }, a: { en: 'No. CanvasDesk is a calculation tool: it computes exactly the model you built — with your inputs and assumptions. Results help you compare scenarios and see how the mechanics work; the decisions remain yours.', ru: 'Нет. CanvasDesk — инструмент расчёта: он честно считает ровно ту модель, которую вы собрали, — с вашими вводными и допущениями. Результаты помогают сравнивать сценарии и видеть механику, но решения остаются за вами.' } },
      { q: { en: 'Where is my data stored?', ru: 'Где хранятся мои данные?' }, a: { en: 'On your side. The web version keeps models in your browser (nothing is sent to a server, no telemetry). The desktop version stores .canvas files on your disk in the open JSON Canvas format, with autosave and a .bak of the previous version. There is no account and no cloud.', ru: 'У вас. Веб-версия хранит модели в вашем браузере (на сервер ничего не отправляется, телеметрии нет). Десктоп-версия хранит файлы .canvas на вашем диске в открытом формате JSON Canvas, с автосейвом и .bak предыдущей версии. Ни аккаунта, ни облака нет.' } }
    ]
  },

  community: {
    kicker: { en: 'Community & support', ru: 'Сообщество и поддержка' },
    title:  { en: 'Pick your platform', ru: 'Выберите свою платформу' },
    /* ICE #3: роли каналов проговорены («спросить автора», «обсудить сценарий») + доказательство жизни чата — доступность автора.
       Честность: обещаем только то, что уже правда (личный ответ автора), без SLA и сроков. */
    subtitle: { en: 'Telegram is the official channel: news and a direct line to the author. Discord is the community chat: scenario walkthroughs and peer support. The author reads everything and replies personally.', ru: 'Telegram — официальный канал: новости и вопросы автору напрямую. Discord — чат сообщества: разбор сценариев и взаимная помощь. Автор читает всё и отвечает лично.' },
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
    /* ICE #13: публичный план разработки — сигнал «проект живой» без обещаний сроков */
    roadmap: { en: 'Development plan (roadmap)', ru: 'План разработки (roadmap)' },
    license: { en: 'License AGPL-3.0', ru: 'Лицензия AGPL-3.0' },
    made: { en: 'Made with ❤️ by the CanvasDesk team', ru: 'Сделано с ❤️ командой CanvasDesk' }
  },

  /* ICE #9: цитаты первых пользователей.
     ВАЖНО: добавляйте только реальные цитаты из чата — с ником автора и источником (паттерн Logseq).
     Пока массив пуст, блок на странице не показывается: честность важнее украшения.
     Формат: { text: { en: '…', ru: '…' }, author: '@username', source: 'https://…', sourceLabel: 'Telegram' } */
  testimonials: [],

  links: {
    github:         'https://github.com/danku13/CanvasDesk',
    webapp:         'https://danku13.github.io/CanvasDesk/app/',
    docs:           'https://danku13.github.io/CanvasDesk/',
    /* ICE #8: публичный username вместо invite-ссылки — канал можно посмотреть до входа */
    telegram:       'https://t.me/CanvasDesk',
    discord:        'https://discord.gg/gXZmF7695',
    roadmap:        'https://github.com/danku13/CanvasDesk/blob/main/docs/TASKS.md',
    habr:           'https://habr.com/ru/users/danku13/',
    linkedin:       '',   // TODO: вставьте ссылку
    medium:         '',   // TODO: вставьте ссылку
    boosty:         '',   // TODO: вставьте ссылку
    donationalerts: 'https://www.donationalerts.com/r/daniilkuzmichev'
  },

  roles: {
    github:         { en: 'Source code, issues, CI artifacts & agent skills', ru: 'Исходный код, issues, артефакты CI и скиллы для агентов' },
    linkedin:       { en: 'Development updates in your feed', ru: 'Новости разработки в вашей ленте' },
    medium:         { en: 'Long-form articles and deep dives', ru: 'Большие статьи и разборы' },
    habr:           { en: 'Articles and devlog in Russian', ru: 'Статьи и devlog проекта' },
    telegram:       { en: 'Official channel: news and questions to the author', ru: 'Официальный канал: новости и вопросы автору' },
    discord:        { en: 'Community chat: scenario walkthroughs and help', ru: 'Чат сообщества: разбор сценариев и помощь' },
    boosty:         { en: 'Monthly support with bonus content', ru: 'Постоянная поддержка и бонусный контент' },
    donationalerts: { en: 'One-time donation to the author', ru: 'Разовое пожертвование автору' }
  },

  priorities: {
    en: ['github', 'telegram', 'discord', 'donationalerts'],
    ru: ['habr', 'telegram', 'discord', 'github', 'boosty', 'donationalerts']
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
