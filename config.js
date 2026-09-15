/* ===== CanvasDesk — конфигурация сайта (v2) =====
   Дефолтные значения. Админка (admin.html) сохраняет правки в localStorage,
   а для деплоя экспортирует config.json в корень сайта.

   Приоритет источников (от высшего к низшему):
     1. localStorage  — правки из админки (мгновенное превью, только у вас)
     2. config.json   — продакшен-контент (для всех посетителей)
     3. значения ниже — базовые дефолты                                */

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
    tagline: { en: 'Infinite canvas desktop. Open source, written in Rust.', ru: 'Бесконечный канвас на рабочем столе. Открытый код, написан на Rust.' }
  },

  seo: {
    title: {
      en: 'CanvasDesk — Infinite Canvas Desktop. Your real files as zoomable cards',
      ru: 'CanvasDesk — бесконечный канвас на рабочем столе. Ваши файлы как зумируемые карточки'
    },
    description: {
      en: 'CanvasDesk turns your desktop into an infinite zoomable canvas: real file cards, notes, connections, sandboxed JS/HTML widgets and AI via MCP. Open source, written in Rust — 5000 nodes at 60 FPS. JSON Canvas compatible.',
      ru: 'CanvasDesk превращает рабочий стол в бесконечный зумируемый канвас: файловые карточки, заметки, связи, JS/HTML-виджеты и ИИ через MCP. Открытый код, написан на Rust — 5000 нод при 60 FPS. Совместим с JSON Canvas.'
    },
    keywords: {
      en: 'CanvasDesk, infinite canvas, desktop organizer, zoomable desktop, JSON Canvas, Obsidian Canvas alternative, Miro alternative, file cards, Rust app, wgpu, MCP, AI desktop, desktop widgets, open source, Windows, Linux, macOS',
      ru: 'CanvasDesk, бесконечный канвас, органайзер рабочего стола, зумируемый рабочий стол, JSON Canvas, аналог Obsidian Canvas, аналог Miro, файловые карточки, Rust приложение, wgpu, MCP, ИИ на рабочем столе, виджеты рабочего стола, открытый код, Windows, Linux, macOS'
    },
    ogImage: 'assets/og-cover.png'
  },

  nav: {
    features: { en: 'Features',    ru: 'Возможности' },
    demo:     { en: 'Demo',        ru: 'Демо' },
    steps:    { en: 'Get started', ru: 'Начало работы' },
    widgets:  { en: 'Widgets',     ru: 'Виджеты' },
    ai:       { en: 'AI & MCP',    ru: 'ИИ и MCP' },
    faq:      { en: 'FAQ',         ru: 'Вопросы' },
    community:{ en: 'Community',   ru: 'Сообщество' },
    star:     { en: 'Star on GitHub', ru: 'Звезда на GitHub' },
    menu:     { en: 'Menu',        ru: 'Меню' }
  },

  announcement: {
    text: { en: 'New in M5: live JS/HTML widgets on the canvas', ru: 'Новое в M5: живые JS/HTML-виджеты на канвасе' },
    cta:  { en: 'Read the deep dive on Medium', ru: 'Разбор на Хабре' }
  },

  hero: {
    badge: { en: 'Open source · Rust + wgpu · Active development', ru: 'Открытый код · Rust + wgpu · Активная разработка' },
    titleA: { en: 'Your desktop is an', ru: 'Ваш рабочий стол —' },
    titleAccent: { en: 'infinite canvas', ru: 'бесконечный канвас' },
    subtitle: {
      en: 'CanvasDesk places your real files, notes and live widgets on an endless zoomable canvas. Cards are actual files on your disk — not cloud copies. Built in Rust, it renders 5000 nodes at a smooth 60 FPS.',
      ru: 'CanvasDesk раскладывает ваши настоящие файлы, заметки и живые виджеты на бесконечном зумируемом канвасе. Карточки — это реальные файлы на диске, а не облачные копии. Написан на Rust и рендерит 5000 нод при 60 FPS.'
    },
    ctaPrimary:   { en: 'Download free',     ru: 'Скачать бесплатно' },
    ctaSecondary: { en: 'Star on GitHub',    ru: 'Звезда на GitHub' },
    ctaTertiary:  { en: 'Read the docs',     ru: 'Читать документацию' },
    chips: ['Windows 10/11', 'Linux', 'macOS', 'JSON Canvas', 'MCP'],
    mediaTitle: { en: 'CanvasDesk demo — canvas, file cards, connections', ru: 'Демо CanvasDesk — канвас, файловые карточки, связи' },
    mediaHint:  { en: 'Drop a demo file into assets/ and set its path in the admin panel', ru: 'Положите демо-файл в assets/ и укажите путь в админке' },
    communityLink: { en: 'Pick your platform', ru: 'Выберите свою платформу' }
  },

  stats: [
    { value: '5000',    label: { en: 'nodes at 60 FPS',       ru: 'нод при 60 FPS' } },
    { value: '0.05–4×', label: { en: 'zoom range',            ru: 'диапазон зума' } },
    { value: 'FTS5',    label: { en: 'instant search',        ru: 'мгновенный поиск FTS5' } },
    { value: '50',      label: { en: 'undo steps',            ru: 'шагов отмены' } },
    { value: '1',       label: { en: 'exe — the whole stack', ru: 'exe — весь стек' } }
  ],

  trust: {
    stars:  { en: 'GitHub stars', ru: 'звёзд на GitHub' },
    forks:  { en: 'forks',        ru: 'форков' },
    commit: { en: 'last commit',  ru: 'последний коммит' },
    today:  { en: 'today',        ru: 'сегодня' },
    badges: {
      en: ['Open source', 'No telemetry', 'Offline-first', 'JSON Canvas format'],
      ru: ['Открытый код', 'Без телеметрии', 'Офлайн-first', 'Формат JSON Canvas']
    }
  },

  features: {
    kicker: { en: 'Features', ru: 'Возможности' },
    title:  { en: 'Everything on one endless plane', ru: 'Всё на одной бесконечной плоскости' },
    subtitle: {
      en: 'A spatial desktop for real work with files: not a picture of folders, but the files themselves.',
      ru: 'Пространственный рабочий стол для настоящей работы с файлами: не картинка папок, а сами файлы.'
    },
    items: [
      { icon: '♾️', title: { en: 'Infinite zoomable canvas', ru: 'Бесконечный зумируемый канвас' }, text: { en: 'Pan with the middle button, Space + drag or touchpad. Zoom 0.05×–4× straight to the cursor, pinch on trackpads, endless dot grid.', ru: 'Панорамирование средней кнопкой, Space + ЛКМ или тачпадом. Зум 0.05×–4× точно к курсору, pinch, бесконечная точечная сетка.' } },
      { icon: '📂', title: { en: 'Cards are your real files', ru: 'Карточки — ваши реальные файлы' }, text: { en: 'Drag files and folders from Explorer onto the canvas — they become cards with system thumbnails cached in SQLite. The file watcher keeps everything in sync.', ru: 'Перетащите файлы и папки из Проводника на канвас — они станут карточками с системными тамбнейлами в кэше SQLite. Файловый вотчер держит всё в актуальном состоянии.' } },
      { icon: '📝', title: { en: 'Notes & markdown formatting', ru: 'Заметки и markdown-форматирование' }, text: { en: 'Double-click an empty spot to create a note. Inline editing, **bold**, *italic*, ==highlight== with Ctrl+B / Ctrl+I / Ctrl+H — Obsidian-compatible.', ru: 'Двойной клик по пустому месту — новая заметка. Инлайн-редактирование, **жирный**, *курсив*, ==подсветка== по Ctrl+B / Ctrl+I / Ctrl+H — совместимо с Obsidian.' } },
      { icon: '🔗', title: { en: 'Connections between nodes', ru: 'Связи между нодами' }, text: { en: 'Link any cards and notes with edges to build mind maps and project graphs. 50-step undo/redo, copy, paste and duplicate.', ru: 'Соединяйте карточки и заметки рёбрами, собирая майндмэпы и графы проектов. Undo/redo на 50 шагов, копирование, вставка и дублирование.' } },
      { icon: '🧩', title: { en: 'Live JS/HTML widgets', ru: 'Живые JS/HTML-виджеты' }, text: { en: 'Any static front-end becomes a canvas node: clock, calendar, todo panel or your own micro-frontend built with the SDK. Sandboxed, installed by drag-and-drop.', ru: 'Любой статический фронтенд становится нодой канваса: часы, календарь, todo-панель или ваш собственный микрофронтенд на SDK. Сандбокс, установка перетаскиванием.' } },
      { icon: '🤖', title: { en: 'AI via MCP', ru: 'ИИ через MCP' }, text: { en: 'Built-in MCP bridge lets AI clients read and edit your canvas with typed tools. Your keys, your machine — BYOK, fully offline.', ru: 'Встроенный MCP-мост даёт ИИ-клиентам типизированные инструменты для чтения и правки канваса. Ваши ключи, ваша машина — BYOK, полностью офлайн.' } },
      { icon: '🔍', title: { en: 'Minimap & instant search', ru: 'Миникарта и мгновенный поиск' }, text: { en: 'Navigate huge boards with the minimap and find any node in milliseconds thanks to SQLite FTS5 full-text search.', ru: 'Ориентируйтесь на огромных досках с миникартой и находите любую ноду за миллисекунды благодаря полнотекстовому поиску SQLite FTS5.' } },
      { icon: '🖥️', title: { en: 'Desktop mode', ru: 'Режим рабочего стола' }, text: { en: 'Run the canvas instead of the wallpaper (--desktop): icons live on the canvas, the system stays intact. One exe — the whole stack.', ru: 'Запустите канвас вместо обоев (--desktop): карточки и заметки живут за системными иконками, система остаётся целой. Один exe — весь стек.' } }
    ]
  },

  steps: {
    kicker: { en: 'Get started', ru: 'Начало работы' },
    title:  { en: 'Running in three steps', ru: 'Три шага до запуска' },
    subtitle: {
      en: 'No installer, no cloud, no account. One executable — and your desktop becomes a canvas.',
      ru: 'Без установщика, облака и аккаунта. Один исполняемый файл — и рабочий стол становится канвасом.'
    },
    items: [
      { icon: '⬇️', title: { en: 'Grab the build', ru: 'Заберите сборку' }, text: { en: 'Download a ready binary from GitHub Releases or CI artifacts (build-<os>). One exe — the whole stack, nothing to install.', ru: 'Скачайте готовый бинарь из GitHub Releases или артефактов CI (build-<os>). Один exe — весь стек, ничего устанавливать не нужно.' } },
      { icon: '🖱️', title: { en: 'Drop your files on the canvas', ru: 'Бросьте файлы на канвас' }, text: { en: 'Drag folders from Explorer — they become cards with live thumbnails. Double-click empty space to add a note, connect nodes with edges.', ru: 'Перетащите папки из Проводника — они станут карточками с живыми превью. Двойной клик по пустому месту — новая заметка, рёбра соединяют ноды в граф.' } },
      { icon: '🔌', title: { en: 'Plug in AI and widgets', ru: 'Подключите ИИ и виджеты' }, text: { en: 'Optional: run canvasdesk.exe mcp to give AI clients typed tools over your canvas, and drag-and-drop JS/HTML widgets onto the board.', ru: 'Опционально: canvasdesk.exe mcp даёт ИИ-клиентам типизированные инструменты над канвасом, а JS/HTML-виджеты ставятся drag-ом прямо на доску.' } }
    ],
    installTitle: { en: 'Or build from source', ru: 'Или соберите из исходников' },
    installHint: { en: 'Requires the Rust toolchain (rustup). Windows 10/11 x64 today, Linux & macOS land with M7.', ru: 'Нужен Rust-тулчейн (rustup). Windows 10/11 x64 уже сегодня, Linux и macOS — по плану M7.' },
    installCommands: 'git clone https://github.com/danku13/CanvasDesk.git\ncd CanvasDesk\ncargo build --workspace --release\ncargo run -p canvas-app --release',
    copy:   { en: 'Copy',     ru: 'Копировать' },
    copied: { en: 'Copied!',  ru: 'Скопировано!' }
  },

  dives: {
    files: {
      kicker: { en: 'Real files', ru: 'Реальные файлы' },
      title: { en: 'Not a whiteboard — your actual file system', ru: 'Не доска — ваша настоящая файловая система' },
      text: { en: 'Drop a folder from Explorer and its files land as cards with thumbnails. Rename or move a file outside the app — the canvas updates itself via the file watcher. Nothing is copied to a cloud: cards are links to real files on disk.', ru: 'Перетащите папку из Проводника — её файлы лягут карточками с тамбнейлами. Переименуйте или переместите файл вне приложения — канвас обновится сам через файловый вотчер. Ничего не копируется в облако: карточки — ссылки на реальные файлы на диске.' },
      bullets: {
        en: ['System thumbnails via an async thread pool', 'SQLite cache in ~/.canvasdesk', 'Drag-and-drop from Explorer', 'Autosave every 2 s + .bak of the previous version'],
        ru: ['Системные тамбнейлы через асинхронный пул потоков', 'Кэш SQLite в ~/.canvasdesk', 'Drag-and-drop из Проводника', 'Автосохранение каждые 2 с + .bak предыдущей версии']
      },
      mediaTitle: { en: 'File cards with live thumbnails on the canvas', ru: 'Файловые карточки с живыми превью на канвасе' },
      mediaHint:  { en: 'Place a screenshot into assets/ and set it in admin', ru: 'Положите скриншот в assets/ и укажите его в админке' }
    },
    widgets: {
      kicker: { en: 'Widgets · M5', ru: 'Виджеты · M5' },
      title: { en: 'Any web front-end becomes a canvas node', ru: 'Любой веб-фронтенд становится нодой канваса' },
      text: { en: 'A widget is a self-sufficient micro-frontend: a folder with static HTML/JS/CSS and a widget.json manifest. The host sandboxes it in an isolated virtual origin and connects it through a typed bridge. Ship the built-in clock, calendar or todo panel — or build your own in ~30 minutes with the Vite template.', ru: 'Виджет — самодостаточный микрофронтенд: папка со статикой HTML/JS/CSS и манифест widget.json. Хост изолирует его в виртуальном origin и связывает через типизированный мост. Используйте встроенные часы, календарь и todo-панель — или соберите свой за ~30 минут по Vite-шаблону.' },
      bullets: {
        en: ['SDK sdk/canvasdesk.ts — zero dependencies', 'Typed bridge with permissions (network, …)', 'Install by drag-and-drop, offline-first', 'Examples: todo-panel, dashboard'],
        ru: ['SDK sdk/canvasdesk.ts — без зависимостей', 'Типизированный мост с правами (network, …)', 'Установка drag-ом, офлайн-first', 'Примеры: todo-panel, dashboard']
      },
      mediaTitle: { en: 'Animated widgets: clock, calendar, todo, dashboard', ru: 'Анимированные виджеты: часы, календарь, todo, дашборд' },
      mediaHint:  { en: 'Drop an animation into assets/', ru: 'Положите анимацию в assets/' }
    },
    ai: {
      kicker: { en: 'AI · MCP', ru: 'ИИ · MCP' },
      title: { en: 'An AI assistant that sees your canvas', ru: 'ИИ-ассистент, который видит ваш канвас' },
      text: { en: 'CanvasDesk ships an MCP server: Claude Desktop and any MCP-compatible client get typed tools to read and edit the canvas — create notes, arrange cards, build connections. The proxy starts with a single command, keys stay with you (BYOK).', ru: 'CanvasDesk содержит MCP-сервер: Claude Desktop и любой MCP-совместимый клиент получают типизированные инструменты для чтения и правки канваса — создавать заметки, раскладывать карточки, строить связи. Посредник стартует одной командой, ключи остаются у вас (BYOK).' },
      bullets: {
        en: ['canvasdesk.exe mcp — the whole stack in one command', 'Typed tools, no cloud dependency', 'Auto-starts the GUI service when needed', 'Works fully offline'],
        ru: ['canvasdesk.exe mcp — весь стек одной командой', 'Типизированные инструменты, без облака', 'Сам поднимает GUI-сервис при необходимости', 'Полностью офлайн']
      },
      mediaTitle: { en: 'MCP panel editing the canvas on request', ru: 'MCP-панель правит канвас по запросу' },
      mediaHint:  { en: 'Place a screenshot into assets/', ru: 'Положите скриншот в assets/' }
    },
    desktop: {
      kicker: { en: 'Desktop mode', ru: 'Режим рабочего стола' },
      title: { en: 'The canvas instead of the wallpaper', ru: 'Канвас вместо обоев' },
      text: { en: 'Start CanvasDesk with --desktop and the canvas becomes your desktop: cards and notes live behind the system icons, the taskbar and tray stay intact. A flying ⚙ button and Ctrl+, open settings anywhere.', ru: 'Запустите CanvasDesk с ключом --desktop, и канвас станет вашим рабочим столом: карточки и заметки живут за системными иконками, панель задач и трей остаются на месте. Летающая кнопка ⚙ и Ctrl+, открывают настройки из любого места.' },
      bullets: {
        en: ['WorkerW integration on Windows', 'Context menu and hotkeys keep working', 'Crash-safe: the shell survives any exit', 'Config in ~/.canvasdesk/config.toml'],
        ru: ['Интеграция WorkerW на Windows', 'Контекстное меню и хоткеи продолжают работать', 'Crash-safe: оболочка переживёт любой выход', 'Конфиг в ~/.canvasdesk/config.toml']
      },
      mediaTitle: { en: 'CanvasDesk running as the desktop shell', ru: 'CanvasDesk в роли оболочки рабочего стола' },
      mediaHint:  { en: 'Drop a screencast into assets/', ru: 'Положите скринкаст в assets/' }
    }
  },

  gallery: {
    kicker: { en: 'Gallery', ru: 'Галерея' },
    title:  { en: 'See it in action', ru: 'Посмотрите в действии' },
    subtitle: { en: 'Screenshots and captures from real sessions. Each slot is ready for your GIF, video or PNG.', ru: 'Скриншоты и записи реальных сессий. Каждое место готово для вашего GIF, видео или PNG.' },
    items: [
      { title: { en: 'Canvas overview with minimap', ru: 'Обзор канваса с миникартой' }, hint: 'assets/shot-overview.png', poster: 'assets/shot-search.png' },
      { title: { en: 'Instant FTS5 search', ru: 'Мгновенный поиск FTS5' }, hint: 'assets/shot-search.png', poster: 'assets/shot-search.png' },
      { title: { en: 'Zoomed-in file cards', ru: 'Файловые карточки вблизи' }, hint: 'assets/shot-files.png', poster: 'assets/shot-files.png' },
      { title: { en: 'Widget dashboard on canvas', ru: 'Виджет-дашборд на канвасе' }, hint: 'assets/shot-dashboard.png', poster: 'assets/shot-widgets.png' },
      { title: { en: 'Connections & mind map', ru: 'Связи и майндмэп' }, hint: 'assets/shot-edges.png', poster: 'assets/shot-ai.png' },
      { title: { en: 'Settings panel & HUD', ru: 'Панель настроек и HUD' }, hint: 'assets/shot-settings.png', poster: 'assets/shot-desktop.png' }
    ]
  },

  useCases: {
    kicker: { en: 'Who it is for', ru: 'Кому подходит' },
    title:  { en: 'One canvas, four workflows', ru: 'Один канвас — четыре сценария' },
    subtitle: { en: 'A spatial desktop adapts to how you already work — no new silo, your files stay where they are.', ru: 'Пространственный рабочий стол подстраивается под ваш стиль работы — без нового силоса, файлы остаются на месте.' },
    items: [
      { icon: '👨‍💻', title: { en: 'Developers', ru: 'Разработчики' }, text: { en: 'Project folders, specs, dashboards and a todo widget on one infinite plane — next to the terminal, not inside an IDE.', ru: 'Папки проекта, спеки, дашборды и todo-виджет на одной бесконечной плоскости — рядом с терминалом, а не внутри IDE.' } },
      { icon: '🎓', title: { en: 'Researchers & students', ru: 'Исследователи и студенты' }, text: { en: 'PDFs, lecture notes and markdown highlights on one zoomable board. Mind maps made of real files, not copies.', ru: 'PDF, конспекты и markdown-подсветка на одном зумируемом борде. Майндмэпы из реальных файлов, а не копий.' } },
      { icon: '✍️', title: { en: 'Writers & analysts', ru: 'Пишущие и аналитики' }, text: { en: 'Outline chapters as cards, zoom out for structure, zoom in for text. FTS5 search finds any note in milliseconds.', ru: 'Главы — карточками: зум наружу — структура, зум внутрь — текст. FTS5 находит любую заметку за миллисекунды.' } },
      { icon: '⚡', title: { en: 'Desktop power users', ru: 'Опытные пользователи' }, text: { en: 'Desktop mode turns the canvas into your wallpaper layer: live widgets and file cards instead of static icons.', ru: 'Режим рабочего стола превращает канвас в слой обоев: живые виджеты и файловые карточки вместо статичных иконок.' } }
    ]
  },

  compare: {
    kicker: { en: 'Comparison', ru: 'Сравнение' },
    title:  { en: 'How CanvasDesk compares', ru: 'Чем CanvasDesk отличается' },
    subtitle: { en: 'CanvasDesk is not a cloud whiteboard and not a note vault: it works on top of your real file system.', ru: 'CanvasDesk — не облачная доска и не хранилище заметок: он работает поверх вашей реальной файловой системы.' },
    columns: ['CanvasDesk', 'Obsidian Canvas', 'Miro', 'Desktop'],
    columnsFull: { en: ['CanvasDesk', 'Obsidian Canvas', 'Miro', 'Classic desktop'], ru: ['CanvasDesk', 'Obsidian Canvas', 'Miro', 'Классический рабочий стол'] },
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
      { name: { en: 'Works with real files on disk', ru: 'Работает с реальными файлами на диске' }, cells: ['yes', 'partial', 'no', 'yes'] },
      { name: { en: 'Infinite zoomable canvas', ru: 'Бесконечный зумируемый канвас' }, cells: ['yes', 'yes', 'yes', 'no'] },
      { name: { en: 'Canvas instead of wallpaper', ru: 'Канвас вместо обоев' }, cells: ['yes', 'no', 'no', 'no'] },
      { name: { en: 'Live JS/HTML widgets', ru: 'Живые JS/HTML-виджеты' }, cells: ['yes', 'plugins', 'apps', 'no'] },
      { name: { en: 'AI via MCP (BYOK, offline)', ru: 'ИИ через MCP (BYOK, офлайн)' }, cells: ['yes', 'plugins', 'no', 'no'] },
      { name: { en: 'Fully offline', ru: 'Полностью офлайн' }, cells: ['yes', 'yes', 'partial', 'yes'] },
      { name: { en: 'Open format (JSON Canvas)', ru: 'Открытый формат (JSON Canvas)' }, cells: ['yes', 'yes', 'no', 'no'] },
      { name: { en: 'Price', ru: 'Цена' }, cells: ['free', 'personal', 'freemium', 'no'] }
    ]
  },

  matrix: {
    kicker: { en: 'Cross-platform', ru: 'Кроссплатформенность' },
    title:  { en: 'Platform support matrix', ru: 'Матрица поддержки платформ' },
    subtitle: { en: 'Windows 10/11 x64 ships the full feature set today. Linux and macOS already run the windowed canvas — platform-specific features land by the M7 plan. CI builds artifacts for all three systems on every push to main.', ru: 'Windows 10/11 x64 уже сегодня поддерживает весь набор функций. Linux и macOS запускают оконный канвас — платформенные фичи закрываются по плану M7. CI собирает артефакты для всех трёх систем на каждый push в main.' },
    columns: { en: ['Capability', 'Windows', 'Linux', 'macOS'], ru: ['Возможность', 'Windows', 'Linux', 'macOS'] },
    rows: [
      { name: { en: 'Canvas, notes, edges, minimap, search, undo', ru: 'Канвас, заметки, связи, миникарта, поиск, undo' }, win: 'yes', linux: 'yes', mac: 'yes' },
      { name: { en: 'File watcher', ru: 'Файловый вотчер' }, win: 'RDCW', linux: 'inotify', mac: 'FSEvents' },
      { name: { en: 'File thumbnails', ru: 'Тамбнейлы файлов' }, win: 'yes', linux: 'M7 · T27', mac: 'M7 · T27' },
      { name: { en: 'Drag-and-drop from file manager', ru: 'Drag-and-drop из файлового менеджера' }, win: 'yes', linux: 'M7 · T28', mac: 'M7 · T28' },
      { name: { en: 'MCP (AI clients)', ru: 'MCP (ИИ-клиенты)' }, win: 'Named pipe', linux: 'M7 · UDS', mac: 'M7 · UDS' },
      { name: { en: 'Desktop mode (--desktop)', ru: 'Режим «вместо рабочего стола»' }, win: 'yes', linux: '—', mac: '—' },
      { name: { en: 'Live widgets (M5)', ru: 'Живые виджеты (M5)' }, win: 'WebView2', linux: 'Snapshot', mac: 'Snapshot' }
    ],
    yes: { en: 'Full', ru: 'Полностью' },
    hotkeysTitle: { en: 'Hotkeys', ru: 'Горячие клавиши' },
    hotkeys: [
      { keys: 'MMB / Space+drag',  action: { en: 'Pan', ru: 'Панорамирование' } },
      { keys: 'Ctrl + wheel',      action: { en: 'Zoom to cursor', ru: 'Зум к курсору' } },
      { keys: 'Double click',      action: { en: 'New note', ru: 'Новая заметка' } },
      { keys: 'Ctrl+B / I / H',    action: { en: 'Bold · italic · highlight', ru: 'Жирный · курсив · подсветка' } },
      { keys: 'F3',                action: { en: 'HUD (fps, p95)', ru: 'HUD (fps, p95)' } },
      { keys: 'Ctrl+,',            action: { en: 'Settings', ru: 'Настройки' } },
      { keys: 'Ctrl+Z / Y',        action: { en: 'Undo · redo', ru: 'Отмена · возврат' } },
      { keys: 'Ctrl+C / V / D',    action: { en: 'Copy · paste · duplicate', ru: 'Копировать · вставить · дублировать' } }
    ]
  },

  roadmap: {
    kicker: { en: 'Roadmap', ru: 'Дорожная карта' },
    title:  { en: 'Ships in the open', ru: 'Разработка идёт открыто' },
    subtitle: { en: 'Milestones are planned and closed in the public repository — this page never oversells the current state.', ru: 'Майлстоуны планируются и закрываются в публичном репозитории — эта страница не приукрашивает текущее состояние.' },
    changelog: { en: 'Follow the changelog', ru: 'Следить за changelog' },
    items: [
      { id: 'M1', title: { en: 'Core canvas: pan, zoom, nodes', ru: 'Ядро канваса: пан, зум, ноды' }, status: 'done' },
      { id: 'M2', title: { en: 'Real file cards & thumbnails', ru: 'Файловые карточки и тамбнейлы' }, status: 'done' },
      { id: 'M3', title: { en: 'Notes & markdown formatting', ru: 'Заметки и markdown-форматирование' }, status: 'done' },
      { id: 'M4', title: { en: 'FTS5 search, undo, autosave', ru: 'Поиск FTS5, undo, автосохранение' }, status: 'done' },
      { id: 'M5', title: { en: 'Live JS/HTML widgets + SDK', ru: 'Живые JS/HTML-виджеты и SDK' }, status: 'done' },
      { id: 'M6', title: { en: 'MCP bridge for AI clients', ru: 'MCP-мост для ИИ-клиентов' }, status: 'done' },
      { id: 'M7', title: { en: 'Cross-platform: Linux & macOS', ru: 'Кроссплатформенность: Linux и macOS' }, status: 'progress' }
    ]
  },

  quotes: {
    kicker: { en: 'Wall of love', ru: 'Отзывы' },
    title:  { en: 'What early users say', ru: 'Что говорят ранние пользователи' },
    subtitle: { en: 'Hand-moderated quotes from GitHub Discussions and the community — never auto-pulled.', ru: 'Отобранные вручную цитаты из GitHub Discussions и сообщества — только модерированные, без автоподтяжки.' },
    slotHint: { en: 'Quote slot — add a real user quote from GitHub Discussions in the admin panel', ru: 'Место для цитаты — добавьте реальный отзыв из GitHub Discussions в админке' },
    emptyAuthor: { en: 'Awaiting a real quote', ru: 'Ждём настоящий отзыв' },
    items: []
  },

  ctaBand: {
    title:    { en: 'Ready to turn your desktop into a canvas?', ru: 'Готовы превратить рабочий стол в канвас?' },
    text:     { en: 'Free and open source. One exe — no installer, no account, no cloud.', ru: 'Бесплатно и с открытым кодом. Один exe — без установщика, аккаунта и облака.' },
    download: { en: 'Download free',  ru: 'Скачать бесплатно' },
    star:     { en: 'Star on GitHub', ru: 'Звезда на GitHub' }
  },

  faq: {
    kicker: { en: 'FAQ', ru: 'FAQ' },
    title:  { en: 'Frequently asked questions', ru: 'Частые вопросы' },
    items: [
      { q: { en: 'What is CanvasDesk?', ru: 'Что такое CanvasDesk?' }, a: { en: 'CanvasDesk is a free open-source desktop app that turns your desktop into an infinite zoomable canvas. File cards, notes and connections live on one endless plane; cards are links to your real files, not copies. It is written in Rust with wgpu and stays fast with 5000 nodes at 60 FPS.', ru: 'CanvasDesk — бесплатное приложение с открытым кодом, которое превращает рабочий стол в бесконечный зумируемый канвас. Файловые карточки, заметки и связи живут на одной плоскости; карточки — ссылки на ваши реальные файлы, а не копии. Написан на Rust с wgpu и держит 5000 нод при 60 FPS.' } },
      { q: { en: 'Which operating systems are supported?', ru: 'Какие операционные системы поддерживаются?' }, a: { en: 'Windows 10/11 x64 has the full feature set, including desktop mode and live widgets. Linux and macOS run the windowed canvas today; watcher, thumbnails, drag-and-drop and MCP are being added by the M7 cross-platform plan. CI publishes build artifacts for all three systems.', ru: 'Windows 10/11 x64 — полный набор функций, включая режим рабочего стола и живые виджеты. Linux и macOS сегодня запускают оконный канвас; вотчер, тамбнейлы, drag-and-drop и MCP добавляются по плану M7. CI публикует сборки для всех трёх систем.' } },
      { q: { en: 'Is CanvasDesk compatible with Obsidian Canvas?', ru: 'Совместим ли CanvasDesk с Obsidian Canvas?' }, a: { en: 'Yes. CanvasDesk stores boards in the open JSON Canvas format (.canvas). A layout saved by CanvasDesk opens in Obsidian and vice versa, and unknown fields survive a round-trip in both directions.', ru: 'Да. CanvasDesk хранит доски в открытом формате JSON Canvas (.canvas). Раскладка, сохранённая в CanvasDesk, открывается в Obsidian и наоборот, неизвестные поля переживают round-trip в обе стороны.' } },
      { q: { en: 'How is it different from Miro or Obsidian Canvas?', ru: 'Чем это отличается от Miro или Obsidian Canvas?' }, a: { en: 'Miro is a cloud whiteboard with its own objects; CanvasDesk works on top of your real file system. Compared to Obsidian Canvas it adds a desktop mode, sandboxed JS/HTML widgets, an MCP bridge for AI clients and a single Rust executable that runs without installing anything.', ru: 'Miro — облачная доска со своими объектами; CanvasDesk работает поверх вашей реальной файловой системы. В отличие от Obsidian Canvas, здесь есть режим рабочего стола, изолированные JS/HTML-виджеты, MCP-мост для ИИ-клиентов и один исполняемый файл на Rust, который работает без установки.' } },
      { q: { en: 'How do I install or build it?', ru: 'Как установить или собрать?' }, a: { en: 'Grab ready binaries from GitHub Actions artifacts (build-<os>) or build from source: cargo build --workspace --release, then cargo run -p canvas-app --release. One exe contains the whole stack; canvasdesk.exe mcp starts the AI bridge.', ru: 'Забирайте готовые бинари из артефактов GitHub Actions (build-<os>) или собирайте из исходников: cargo build --workspace --release, затем cargo run -p canvas-app --release. Один exe содержит весь стек; canvasdesk.exe mcp запускает ИИ-мост.' } },
      { q: { en: 'How can I support the project?', ru: 'Как поддержать проект?' }, a: { en: 'Star the repository on GitHub, contribute code or documentation, write about CanvasDesk, or support the author financially via Boosty or DonationAlerts. Every signal helps the project grow.', ru: 'Поставьте звезду репозиторию на GitHub, внесите код или документацию, напишите о CanvasDesk или поддержите автора деньгами через Boosty или DonationAlerts. Каждый сигнал помогает проекту расти.' } },
      { q: { en: 'Is CanvasDesk free?', ru: 'CanvasDesk бесплатный?' }, a: { en: 'Yes. The project is open source and free to use — no subscriptions, no feature paywalls. You can support the development voluntarily via Boosty or DonationAlerts.', ru: 'Да. Проект с открытым кодом и бесплатен — без подписок и платных функций. Поддержать разработку можно добровольно через Boosty или DonationAlerts.' } },
      { q: { en: 'Does CanvasDesk collect my data?', ru: 'Собирает ли CanvasDesk мои данные?' }, a: { en: 'No telemetry. The app is offline-first: files, notes and the thumbnail cache stay on your disk (~/.canvasdesk). The AI integration is BYOK — your API keys never leave your machine.', ru: 'Телеметрии нет. Приложение работает офлайн-first: файлы, заметки и кэш превью остаются на вашем диске (~/.canvasdesk). ИИ-интеграция — BYOK: ключи не покидают вашу машину.' } }
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
    title:    { en: 'Your desktop is an infinite canvas', ru: 'Ваш рабочий стол — бесконечный канвас' },
    text:     { en: 'Join the early users: grab a build, star the repository or support the development — every signal counts.', ru: 'Присоединяйтесь к ранним пользователям: заберите сборку, поставьте звезду или поддержите разработку — каждый сигнал важен.' },
    download: { en: 'Download free',  ru: 'Скачать бесплатно' },
    star:     { en: 'Star on GitHub', ru: 'Звезда на GitHub' },
    support:  { en: 'or support the author via', ru: 'или поддержите автора через' }
  },

  stickyCta: {
    download: { en: 'Download', ru: 'Скачать' },
    star:     { en: 'Star',     ru: 'Звезда' }
  },

  media: {
    heroDemo:     { src: '', poster: 'assets/hero-canvas.png' },
    filesShot:    { src: '', poster: 'assets/shot-files.png' },
    widgetsGif:   { src: '', poster: 'assets/shot-widgets.png' },
    aiShot:       { src: '', poster: 'assets/shot-ai.png' },
    desktopVideo: { src: '', poster: 'assets/shot-desktop.png' },
    searchShot:   { src: '', poster: 'assets/shot-search.png' }
  },

  footer: {
    tagline: { en: 'Infinite canvas desktop. Open source, written in Rust.', ru: 'Бесконечный канвас на рабочем столе. Открытый код, написан на Rust.' },
    sectionsProduct: { en: 'Product', ru: 'Продукт' },
    sectionsContent: { en: 'Content', ru: 'Контент' },
    sectionsAbout:   { en: 'About',   ru: 'О проекте' },
    disclaimer: { en: 'CanvasDesk is an independent open-source project and is not affiliated with Obsidian or Miro. JSON Canvas is an open format by Obsidian.', ru: 'CanvasDesk — независимый open-source проект, не связан с Obsidian или Miro. JSON Canvas — открытый формат от Obsidian.' },
    builtWith: { en: 'Built with Rust · wgpu · JSON Canvas', ru: 'Сделано на Rust · wgpu · JSON Canvas' },
    made: { en: 'Made with ❤️ by the CanvasDesk team', ru: 'Сделано с ❤️ командой CanvasDesk' }
  },

  links: {
    github:         'https://github.com/danku13/CanvasDesk',
    telegram:       '',   // TODO: вставьте ссылку на канал
    habr:           'https://habr.com/ru/users/danku13/',
    linkedin:       '',   // TODO: вставьте ссылку
    medium:         '',   // TODO: вставьте ссылку
    boosty:         '',   // TODO: вставьте ссылку
    donationalerts: ''    // TODO: вставьте ссылку
  },

  roles: {
    github:         { en: 'Source code, issues, releases & CI artifacts', ru: 'Исходный код, issues, релизы и артефакты CI' },
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
