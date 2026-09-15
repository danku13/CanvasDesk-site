/* ===== CanvasDesk — конфигурация сайта =====
   Дефолтные значения. Админка (admin.html) сохраняет правки в localStorage,
   а для деплоя экспортирует config.json в корень сайта.

   Приоритет источников (от высшего к низшему):
     1. localStorage  — правки из админки (мгновенное превью, только у вас)
     2. config.json   — продакшен-контент (для всех посетителей)
     3. значения ниже — базовые дефолты                                */

const PLATFORMS = {
  github:         { icon: '🐙', label: 'GitHub' },
  donationalerts: { icon: '💜', label: 'DonationAlerts' },
  boosty:         { icon: '🚀', label: 'Boosty' },
  habr:           { icon: '📝', label: 'Habr' },
  linkedin:       { icon: '💼', label: 'LinkedIn' },
  medium:         { icon: '✍️', label: 'Medium' },
  telegram:       { icon: '✈️', label: 'Telegram' }
};

const DEFAULT_CONFIG = {
  brand: { name: 'CanvasDesk', tagline: { en: 'Free collaborative whiteboard', ru: 'Бесплатная совместная доска' } },

  seo: {
    title: {
      en: 'CanvasDesk — Free Online Collaborative Whiteboard & Drawing App',
      ru: 'CanvasDesk — бесплатная онлайн-доска для рисования и совместной работы'
    },
    description: {
      en: 'CanvasDesk is a free, open-source online whiteboard: draw, sketch, collaborate in real time and export your ideas. No sign-up required.',
      ru: 'CanvasDesk — бесплатная open-source онлайн-доска: рисуйте, создавайте схемы, работайте вместе в реальном времени и экспортируйте идеи.'
    },
    keywords: {
      en: 'online whiteboard, drawing app, collaborative canvas, free whiteboard, CanvasDesk',
      ru: 'онлайн доска, рисование, совместная доска, бесплатный вайтборд, CanvasDesk'
    },
    ogImage: 'assets/og-cover.png'
  },

  hero: {
    badge: { en: '🚀 Open Source · Free forever', ru: '🚀 Open Source · Бесплатно навсегда' },
    title: {
      en: 'Your ideas deserve a bigger canvas',
      ru: 'Ваши идеи достойны большего холста'
    },
    subtitle: {
      en: 'CanvasDesk is a lightweight online whiteboard for sketching, diagramming and brainstorming — alone or with your team, right in the browser.',
      ru: 'CanvasDesk — лёгкая онлайн-доска для набросков, схем и мозговых штурмов — одному или с командой, прямо в браузере.'
    },
    ctaPrimary:   { en: '⭐ Star on GitHub',     ru: '⭐ Звезда на GitHub' },
    ctaSecondary: { en: '▶ See it in action',    ru: '▶ Посмотреть в деле' }
  },

  platformsBlock: {
    title:    { en: 'Start here — pick your platform', ru: 'Начните здесь — выберите свою платформу' },
    subtitle: { en: 'We recommend the best channels for your language.', ru: 'Мы подбираем лучшие каналы для вашего языка.' }
  },

  features: {
    title: { en: 'Features', ru: 'Возможности' },
    items: [
      { icon: '🖌️', title: { en: 'Freehand drawing', ru: 'Рисование от руки' },  text: { en: 'Smooth pen, marker and highlighter tools with pressure support.', ru: 'Плавные инструменты: ручка, маркер и выделитель.' } },
      { icon: '🧩', title: { en: 'Shapes & templates', ru: 'Фигуры и шаблоны' },  text: { en: 'Ready-made templates for diagrams, retros and mind maps.', ru: 'Готовые шаблоны для схем, ретро и майнд-карт.' } },
      { icon: '👥', title: { en: 'Real-time collab', ru: 'Совместная работа' },   text: { en: 'Share a link and brainstorm together with live cursors.', ru: 'Поделитесь ссылкой и работайте вместе с живыми курсорами.' } },
      { icon: '📤', title: { en: 'Export anywhere', ru: 'Экспорт куда угодно' },  text: { en: 'Save boards as PNG, SVG or PDF in one click.', ru: 'Сохраняйте доски в PNG, SVG или PDF одним кликом.' } },
      { icon: '⌨️', title: { en: 'Keyboard-first', ru: 'Горячие клавиши' },       text: { en: 'Fast shortcuts for every tool — built for pros.', ru: 'Быстрые шорткаты для каждого инструмента.' } },
      { icon: '🔒', title: { en: 'Local-first', ru: 'Local-first' },              text: { en: 'Works offline, your data stays with you.', ru: 'Работает офлайн, данные остаются у вас.' } }
    ]
  },

  media: {
    hero: { src: '' },
    gif:  { src: '', caption: { en: 'Live demo — drawing on CanvasDesk', ru: 'Живое демо — рисование в CanvasDesk' } },
    video:{ src: '', poster: '', caption: { en: 'Full product walkthrough', ru: 'Полный обзор продукта' } },
    screenshots: [
      { src: '', caption: { en: 'Main canvas view',   ru: 'Главный экран холста' } },
      { src: '', caption: { en: 'Shape library',      ru: 'Библиотека фигур' } },
      { src: '', caption: { en: 'Collaboration mode', ru: 'Режим совместной работы' } }
    ]
  },

  demoBlock:    { title: { en: 'See it in motion', ru: 'Посмотрите в движении' } },
  screensBlock: { title: { en: 'Screenshots',      ru: 'Скриншоты' } },
  videoBlock:   { title: { en: 'Video overview',   ru: 'Видео-обзор' } },

  support: {
    title:    { en: 'Support the project', ru: 'Поддержать проект' },
    subtitle: { en: 'CanvasDesk is free & open source. Donations keep development going.', ru: 'CanvasDesk бесплатный и open-source. Донаты помогают разработке.' },
    boostyLabel:         { en: '🚀 Support on Boosty',          ru: '🚀 Поддержать на Boosty' },
    donationalertsLabel: { en: '💜 Donate via DonationAlerts',  ru: '💜 Задонатить на DonationAlerts' }
  },

  links: {
    github:         'https://github.com/danku13/CanvasDesk',
    donationalerts: '',   // TODO: вставьте ссылку
    boosty:         '',   // TODO: вставьте ссылку
    habr:           '',   // TODO: вставьте ссылку
    linkedin:       '',   // TODO: вставьте ссылку
    medium:         '',   // TODO: вставьте ссылку
    telegram:       ''    // TODO: вставьте ссылку
  },

  priorities: {
    en: ['linkedin', 'medium', 'github', 'donationalerts'],
    ru: ['habr', 'telegram', 'github', 'boosty', 'donationalerts']
  },

  footer: {
    made: { en: 'Made with ❤️ by the CanvasDesk team', ru: 'Сделано с ❤️ командой CanvasDesk' }
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
  // localStorage — правки из админки (мгновенное превью)
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
