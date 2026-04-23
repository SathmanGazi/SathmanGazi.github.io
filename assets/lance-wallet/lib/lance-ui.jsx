// Lance Wallet — shared UI primitives
// Design tokens + atoms used across every screen.

// ──────────────────────────── TOKENS ────────────────────────────
// Ink presets (themeable via Tweaks)
const INK_PRESETS = {
  graphite: { ink:'#0E1411', inkSoft:'#1A211E', label:'Graphite' },
  navy:     { ink:'#13254A', inkSoft:'#1F3568', label:'Deep navy' },
  espresso: { ink:'#2F1C10', inkSoft:'#432A1C', label:'Espresso' },
  plum:     { ink:'#2B1230', inkSoft:'#3D2146', label:'Plum' },
  forest:   { ink:'#11322A', inkSoft:'#1D463B', label:'Forest' },
};
const T = {
  // Surfaces
  ink: '#0E1411',           // near-black graphite (rewritten by setInk())
  inkSoft: '#1A211E',
  ivory: '#F6F2EA',         // warm off-white (paper)
  ivoryDeep: '#ECE6DA',
  paper: '#FBF8F2',
  line: '#E6DFD1',
  lineSoft: '#EFE9DB',
  mute: '#6B6962',
  muteSoft: '#9B968B',

  // Accents — muted, editorial
  jade: '#2E6D5B',          // primary accent (trust, finance)
  jadeDeep: '#1F4E41',
  jadeSoft: '#D9E4DE',
  jadeTint: '#EDF2EE',

  sand: '#C8A26A',          // warm secondary
  sandSoft: '#EFE3CD',

  rose: '#B44A3C',          // warnings / over-budget
  roseSoft: '#F3DCD6',

  sky: '#3B6B86',           // info
  skySoft: '#DCE6EC',

  // Radii
  r: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, pill: 999 },
};

const FONT_DISPLAY = `"Cormorant Garamond", "Times New Roman", serif`;
const FONT_UI = `"Geist", "Inter", system-ui, -apple-system, sans-serif`;
const FONT_MONO = `"Geist Mono", "JetBrains Mono", ui-monospace, monospace`;

// ──────────────────────── LANCE LOGO ────────────────────────────
// Uses the user-supplied logo PNG. For light placements we invert it via CSS filter.
function LanceMark({ size = 40, color = T.ink, style }) {
  const isLight = color !== T.ink && color !== '#000' && color !== '#000000' && color !== '#0E1411';
  return (
    <img
      src="assets/lance-mark.png"
      alt="Lance"
      style={{
        height: size * 1.7, width: 'auto', display: 'block',
        filter: isLight ? 'invert(1) brightness(1.1)' : 'none',
        ...style,
      }}
    />
  );
}

function LanceWordmark({ size = 20, color = T.ink }) {
  return (
    <span style={{
      fontFamily: FONT_DISPLAY, fontWeight: 500,
      fontSize: size, letterSpacing: size * 0.35,
      color, textTransform: 'uppercase',
    }}>LANCE</span>
  );
}

// ──────────────────────── ICONS (line, 24px) ────────────────────────
// Minimal, consistent stroke-based icon set drawn inline so the style stays tight.
const Icon = {
  home: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11 L12 4 L21 11 V20 a1 1 0 0 1-1 1h-4v-6h-4v6H4a1 1 0 0 1-1-1z"/>
    </svg>
  ),
  chart: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M10 20V4M16 20V14M22 20H2"/>
    </svg>
  ),
  plus: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
  ),
  list: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
  ),
  user: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>
  ),
  bell: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>
  ),
  search: (s=20, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
  ),
  arrowUp: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
  ),
  arrowDown: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 7L7 17M15 17H7v-8"/></svg>
  ),
  arrowRight: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  ),
  arrowLeft: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
  ),
  eye: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  eyeOff: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><path d="M3 3l18 18M10.5 6.2A9 9 0 0 1 12 6c6.5 0 10 7 10 7a18 18 0 0 1-3.3 4M6.5 6.9C4 8.5 2 12 2 12s3.5 7 10 7c2 0 3.7-.5 5-1.3"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/></svg>
  ),
  check: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>
  ),
  close: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
  ),
  filter: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>
  ),
  more: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
  ),
  settings: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>
  ),
  wallet: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6"/><circle cx="17" cy="14" r="1.2"/></svg>
  ),
  target: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={c}/></svg>
  ),
  calendar: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
  ),
  lock: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
  ),
  globe: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>
  ),
  logout: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17l5-5-5-5M15 12H3M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/></svg>
  ),
  transfer: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5l-4 4 4 4M3 9h14M17 19l4-4-4-4M21 15H7"/></svg>
  ),
  trend: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>
  ),
  bolt: (s=18, c='currentColor') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
  ),
};

// Category emojis swapped out for minimal glyph shapes (monogram letters).
// Gives a calm, editorial feel without emoji.
const CAT = {
  rent:     { bg:'#2E6D5B', fg:'#F6F2EA', label:'R', name:'Rent' },
  grocery:  { bg:'#C8A26A', fg:'#0E1411', label:'G', name:'Grocery' },
  transport:{ bg:'#3B6B86', fg:'#F6F2EA', label:'T', name:'Transport' },
  recharge: { bg:'#8B6B9A', fg:'#F6F2EA', label:'M', name:'Mobile' },
  internet: { bg:'#4A6B7A', fg:'#F6F2EA', label:'W', name:'Internet' },
  dining:   { bg:'#B44A3C', fg:'#F6F2EA', label:'D', name:'Dining' },
  medicine: { bg:'#7A9A6B', fg:'#F6F2EA', label:'+', name:'Medicine' },
  family:   { bg:'#9A7A6B', fg:'#F6F2EA', label:'F', name:'Family' },
  emi:      { bg:'#3A3A42', fg:'#F6F2EA', label:'E', name:'EMI' },
  savings:  { bg:'#1F4E41', fg:'#F6F2EA', label:'S', name:'Savings' },
  salary:   { bg:'#2E6D5B', fg:'#F6F2EA', label:'◆', name:'Salary' },
  freelance:{ bg:'#C8A26A', fg:'#0E1411', label:'◇', name:'Freelance' },
};

// ──────────────────────── ATOMS ────────────────────────────

function Chip({ children, tone='neutral', size='sm' }) {
  const tones = {
    neutral: { bg: T.ivoryDeep, fg: T.ink, br: T.line },
    jade:    { bg: T.jadeSoft, fg: T.jadeDeep, br: '#BFD3CA' },
    sand:    { bg: T.sandSoft, fg: '#6E4E1E', br: '#DFC79B' },
    rose:    { bg: T.roseSoft, fg: '#7A2B1F', br: '#E4B9AF' },
    sky:     { bg: T.skySoft, fg: '#2A4F66', br: '#BACADA' },
    ghost:   { bg: 'transparent', fg: T.mute, br: T.line },
    ink:     { bg: T.ink, fg: T.ivory, br: T.ink },
  };
  const s = tones[tone] || tones.neutral;
  const px = size === 'xs' ? '3px 8px' : '4px 10px';
  const fs = size === 'xs' ? 10 : 11;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:4,
      padding: px, borderRadius: 999,
      background: s.bg, color: s.fg, border: `1px solid ${s.br}`,
      fontFamily: FONT_UI, fontSize: fs, fontWeight: 500,
      letterSpacing: 0.3, textTransform:'uppercase', whiteSpace:'nowrap',
    }}>{children}</span>
  );
}

function Btn({ children, variant='primary', full, icon, onClick, size='md' }) {
  const sizes = {
    sm: { py:8, fs:13, h:36 },
    md: { py:13, fs:14, h:48 },
    lg: { py:16, fs:15, h:56 },
  }[size];
  const variants = {
    primary: { bg: T.ink, fg: T.ivory, br: T.ink },
    jade:    { bg: T.jade, fg: T.ivory, br: T.jade },
    ghost:   { bg: 'transparent', fg: T.ink, br: T.line },
    ivory:   { bg: T.ivory, fg: T.ink, br: T.line },
    danger:  { bg: T.rose, fg: T.ivory, br: T.rose },
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} style={{
      display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8,
      padding: `${sizes.py}px 18px`, width: full?'100%':'auto',
      background: v.bg, color: v.fg, border: `1px solid ${v.br}`,
      borderRadius: T.r.pill, fontFamily: FONT_UI, fontSize: sizes.fs,
      fontWeight: 600, letterSpacing: 0.2, cursor:'pointer',
      height: sizes.h, boxSizing:'border-box',
    }}>
      {icon}{children}
    </button>
  );
}

function Card({ children, style, pad=18, tone='paper' }) {
  const tones = {
    paper: { bg: T.paper, br: T.line },
    ivory: { bg: T.ivory, br: T.line },
    ink:   { bg: T.ink, br: T.inkSoft },
    jade:  { bg: T.jadeTint, br: '#CFDCD5' },
  };
  const t = tones[tone] || tones.paper;
  return (
    <div style={{
      background: t.bg, border: `1px solid ${t.br}`,
      borderRadius: T.r.lg, padding: pad,
      boxShadow: tone==='ink' ? 'none' : '0 1px 0 rgba(14,20,17,0.02)',
      ...style,
    }}>{children}</div>
  );
}

// "BDT ৳" currency with tasteful typographic treatment.
function Money({ value, size=28, negative=false, positive=false, color, weight=500, style }) {
  const c = color || (negative ? T.rose : positive ? T.jade : T.ink);
  const sign = negative ? '−' : positive ? '+' : '';
  let num = typeof value === 'number'
    ? Math.abs(value).toLocaleString('en-IN', { maximumFractionDigits: 0 })
    : value;
  if (LANG === 'bn' && typeof value === 'number') num = toBn(num);
  return (
    <span style={{ fontFamily: FONT_UI, color: c, fontWeight: weight, letterSpacing: -0.5, ...style }}>
      <span style={{ fontSize: size*0.55, marginRight: 4, fontWeight: 400, letterSpacing: 0, verticalAlign: 'baseline' }}>
        {sign}৳
      </span>
      <span style={{ fontSize: size, fontVariantNumeric: 'tabular-nums' }}>{num}</span>
    </span>
  );
}

function CatDot({ cat, size=40 }) {
  const c = CAT[cat] || { bg: T.ink, fg: T.ivory, label: '?' };
  return (
    <div style={{
      width: size, height: size, borderRadius: size*0.32,
      background: c.bg, color: c.fg,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily: FONT_DISPLAY, fontSize: size*0.45, fontWeight: 600,
      flexShrink: 0,
    }}>{c.label}</div>
  );
}

function Divider({ style }) {
  return <div style={{ height: 1, background: T.lineSoft, margin: '0', ...style }} />;
}

function SectionLabel({ children, right }) {
  return (
    <div style={{
      display:'flex', alignItems:'baseline', justifyContent:'space-between',
      fontFamily: FONT_UI, fontSize: 11, fontWeight: 600,
      letterSpacing: 1.5, textTransform:'uppercase',
      color: T.mute, marginBottom: 10,
    }}>
      <span>{children}</span>
      {right && <span style={{ fontWeight: 500, letterSpacing: 0.5 }}>{right}</span>}
    </div>
  );
}

function H1({ children, style }) {
  return <div style={{ fontFamily: FONT_DISPLAY, fontSize: 38, fontWeight: 500, color: T.ink, lineHeight: 1.05, letterSpacing: -0.5, ...style }}>{children}</div>;
}
function H2({ children, style }) {
  return <div style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 500, color: T.ink, lineHeight: 1.1, letterSpacing: -0.3, ...style }}>{children}</div>;
}
function H3({ children, style }) {
  return <div style={{ fontFamily: FONT_UI, fontSize: 16, fontWeight: 600, color: T.ink, letterSpacing: -0.1, ...style }}>{children}</div>;
}
function Body({ children, muted, style }) {
  return <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 400, color: muted?T.mute:T.ink, lineHeight: 1.5, ...style }}>{children}</div>;
}
function Caption({ children, style }) {
  return <div style={{ fontFamily: FONT_UI, fontSize: 12, fontWeight: 500, color: T.mute, letterSpacing: 0.1, ...style }}>{children}</div>;
}

// ──────────────────────── PHONE FRAME ────────────────────────────
// A custom, tighter Android frame that matches Lance's premium feel.
function Phone({ children, label, dark=false, scroll=true, platform='android' }) {
  const bg = dark ? T.ink : T.paper;
  const fg = dark ? T.ivory : T.ink;
  const isIOS = platform === 'ios';
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 12 }}>
      <div style={{
        width: 380, height: 780,
        borderRadius: isIOS ? 54 : 44, padding: 8,
        background: '#1a1a1a',
        boxShadow: '0 40px 100px -30px rgba(14,20,17,0.35), 0 2px 4px rgba(14,20,17,0.1), inset 0 0 0 1px rgba(255,255,255,0.04)',
        position: 'relative',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: isIOS ? 48 : 38, overflow: 'hidden',
          background: bg, position: 'relative', display: 'flex', flexDirection: 'column',
        }} data-screen-label={label}>
          {/* Status bar */}
          <div style={{
            height: isIOS ? 44 : 36, flexShrink: 0,
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding: isIOS ? '0 26px 0 30px' : '0 22px 0 28px',
            fontFamily: FONT_UI, fontSize: isIOS ? 14 : 13, fontWeight: 600,
            color: fg, position: 'relative', zIndex: 2,
          }}>
            <span>9:41</span>
            {/* iOS notch / Android punch-hole */}
            {isIOS ? (
              <div style={{
                position:'absolute', left:'50%', top: 10, transform:'translateX(-50%)',
                width: 100, height: 28, borderRadius: 18, background: '#000',
              }} />
            ) : (
              <div style={{
                position:'absolute', left:'50%', top: 10, transform:'translateX(-50%)',
                width: 10, height: 10, borderRadius: '50%', background: '#000',
              }} />
            )}
            <div style={{ display:'flex', alignItems:'center', gap: 5 }}>
              {/* signal */}
              <svg width="14" height="10" viewBox="0 0 14 10" fill={fg}><rect x="0" y="7" width="2" height="3" rx="0.5"/><rect x="3" y="5" width="2" height="5" rx="0.5"/><rect x="6" y="3" width="2" height="7" rx="0.5"/><rect x="9" y="0" width="2" height="10" rx="0.5"/></svg>
              {/* wifi */}
              <svg width="14" height="10" viewBox="0 0 14 10" fill={fg}><path d="M7 10l2-2a2.5 2.5 0 0 0-4 0l2 2z"/><path d="M7 6l4-4a6 6 0 0 0-8 0l4 4z" opacity="0.4"/></svg>
              {/* battery */}
              <div style={{ display:'flex', alignItems:'center', gap: 1 }}>
                <div style={{ width: 20, height: 10, border: `1px solid ${fg}`, borderRadius: 3, padding: 1, boxSizing:'border-box' }}>
                  <div style={{ width: '70%', height: '100%', background: fg, borderRadius: 1 }} />
                </div>
                <div style={{ width: 1.5, height: 4, background: fg, borderRadius: 1, opacity: 0.6 }} />
              </div>
            </div>
          </div>
          {/* Content */}
          <div style={{
            flex: 1, overflow: scroll?'auto':'hidden', minHeight: 0,
            position: 'relative',
          }}>
            {children}
          </div>
          {/* Home indicator */}
          <div style={{ height: 20, flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center', zIndex: 2 }}>
            <div style={{ width: 120, height: 4, borderRadius: 2, background: dark?T.ivory:T.ink, opacity: 0.6 }} />
          </div>
        </div>
      </div>
      {label && (
        <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, letterSpacing: 1.5,
          textTransform:'uppercase', color: T.mute, marginTop: 4 }}>
          {label}
        </div>
      )}
    </div>
  );
}

// ──────────────────────── BOTTOM NAV ────────────────────────────
function BottomNav({ active='home', onNav }) {
  const items = [
    { id:'home', label:'Home', icon: Icon.home },
    { id:'tx', label:'Activity', icon: Icon.list },
    { id:'add', label:'', icon: null, fab: true },
    { id:'analytics', label:'Insights', icon: Icon.chart },
    { id:'profile', label:'Profile', icon: Icon.user },
  ];
  return (
    <div style={{
      position:'absolute', bottom: 0, left: 0, right: 0,
      background: T.paper, borderTop: `1px solid ${T.line}`,
      padding: '10px 14px 12px', display:'flex', alignItems:'flex-end',
      justifyContent:'space-around', gap: 4,
    }}>
      {items.map(it => it.fab ? (
        <button key={it.id} onClick={()=>onNav&&onNav('add')} style={{
          width: 54, height: 54, borderRadius: '50%',
          background: T.ink, color: T.ivory, border: 'none',
          display:'flex', alignItems:'center', justifyContent:'center',
          marginTop: -22, boxShadow: '0 6px 16px -4px rgba(14,20,17,0.3)',
          cursor: 'pointer',
        }}>
          {Icon.plus(22, T.ivory)}
        </button>
      ) : (
        <button key={it.id} onClick={()=>onNav&&onNav(it.id)} style={{
          flex: 1, display:'flex', flexDirection:'column', alignItems:'center', gap: 3,
          background:'none', border:'none', padding: '6px 4px',
          color: active===it.id ? T.ink : T.muteSoft, cursor:'pointer',
        }}>
          {it.icon(22, active===it.id ? T.ink : T.muteSoft)}
          <span style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, letterSpacing: 0.3 }}>
            {it.label}
          </span>
        </button>
      ))}
    </div>
  );
}

// ──────────────────────── INPUT ────────────────────────────
function Input({ label, value, placeholder, prefix, suffix, type='text', hint }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
      {label && (
        <label style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600,
          letterSpacing: 1.3, textTransform:'uppercase', color: T.mute }}>
          {label}
        </label>
      )}
      <div style={{
        display:'flex', alignItems:'center', gap: 10,
        background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.md,
        padding: '14px 16px',
      }}>
        {prefix && <span style={{ fontFamily: FONT_UI, color: T.mute, fontSize: 14 }}>{prefix}</span>}
        <input defaultValue={value} placeholder={placeholder} type={type} style={{
          flex: 1, background:'none', border:'none', outline:'none',
          fontFamily: FONT_UI, fontSize: 15, color: T.ink, width: '100%',
        }}/>
        {suffix}
      </div>
      {hint && <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute }}>{hint}</div>}
    </div>
  );
}

// ──────────────────────── TOP BAR ────────────────────────────
function TopBar({ title, onBack, right }) {
  return (
    <div style={{
      padding: '10px 14px 6px', display:'flex', alignItems:'center', gap: 8,
      background: T.paper, position:'sticky', top: 0, zIndex: 5,
    }}>
      {onBack ? (
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: '50%',
          background: T.ivory, border: `1px solid ${T.line}`,
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
        }}>{Icon.arrowLeft(16, T.ink)}</button>
      ) : <div style={{ width: 40 }}/>}
      <div style={{ flex: 1, textAlign:'center', fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink }}>
        {title}
      </div>
      <div style={{ width: 40, display:'flex', justifyContent:'flex-end' }}>{right}</div>
    </div>
  );
}

// ──────────────────────── i18n ────────────────────────────
const STRINGS = {
  en: {
    welcome:'Welcome back.', signIn:'Sign in', signUp:'Sign up', createAccount:'Create account.',
    skip:'Skip', continue:'Continue', getStarted:'Get Started', back:'Back',
    goodAfternoon:'Good afternoon', totalBalance:'TOTAL BALANCE · APRIL',
    income:'INCOME', spent:'SPENT', saved:'SAVED',
    yourAccounts:'YOUR ACCOUNTS', viewAll:'VIEW ALL', recent:'RECENT', seeAll:'SEE ALL',
    activity:'Activity', insights:'Your month in money.', budgets:'Budgets', bills:'Bills',
    accountsTitle:'Accounts & wallets', goals:'Your goals', profile:'Profile',
    newTx:'New Transaction', expense:'Expense', transfer:'Transfer',
    amount:'AMOUNT', category:'Category', account:'Account', date:'Date', note:'Note',
    nextBill:'NEXT BILL', topGoal:'TOP GOAL',
    signOut:'Sign out', language:'Language',
  },
  bn: {
    welcome:'আবার স্বাগতম।', signIn:'সাইন ইন', signUp:'সাইন আপ', createAccount:'অ্যাকাউন্ট তৈরি করুন।',
    skip:'এড়িয়ে যান', continue:'পরবর্তী', getStarted:'শুরু করুন', back:'ফিরে যান',
    goodAfternoon:'শুভ অপরাহ্ন', totalBalance:'মোট ব্যালেন্স · এপ্রিল',
    income:'আয়', spent:'খরচ', saved:'সঞ্চয়',
    yourAccounts:'আপনার অ্যাকাউন্ট', viewAll:'সব দেখুন', recent:'সাম্প্রতিক', seeAll:'সব দেখুন',
    activity:'কার্যকলাপ', insights:'আপনার মাসের হিসাব।', budgets:'বাজেট', bills:'বিল',
    accountsTitle:'অ্যাকাউন্ট ও ওয়ালেট', goals:'আপনার লক্ষ্য', profile:'প্রোফাইল',
    newTx:'নতুন লেনদেন', expense:'খরচ', transfer:'ট্রান্সফার',
    amount:'পরিমাণ', category:'ক্যাটাগরি', account:'অ্যাকাউন্ট', date:'তারিখ', note:'নোট',
    nextBill:'পরবর্তী বিল', topGoal:'প্রধান লক্ষ্য',
    signOut:'সাইন আউট', language:'ভাষা',
  },
};
let LANG = 'en';
function setLang(l) { LANG = l; }
function t(k) { return (STRINGS[LANG] && STRINGS[LANG][k]) || STRINGS.en[k] || k; }
// Bangla numeral converter for money
const BN_DIGITS = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
function toBn(s) { return String(s).replace(/\d/g, d => BN_DIGITS[+d]); }

Object.assign(window, {
  T, INK_PRESETS, FONT_DISPLAY, FONT_UI, FONT_MONO,
  LanceMark, LanceWordmark, Icon, CAT,
  Chip, Btn, Card, Money, CatDot, Divider, SectionLabel,
  H1, H2, H3, Body, Caption, Phone, BottomNav, Input, TopBar,
  STRINGS, setLang, t, toBn,
});
