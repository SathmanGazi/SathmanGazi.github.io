# Handoff: Lance Wallet — Android MVP

A personal finance + wallet app for Bangladesh. Premium editorial feel, jade/forest accent, Cormorant Garamond display + Geist UI. Built as a 17-screen hi-fi interactive prototype in HTML/React.

---

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look, flow, and interaction. They are **not production code** to copy line-for-line.

Your task is to **recreate these designs in a real mobile codebase**, using the framework chosen below (or the team's preferred one). Lift exact values (colors, typography, spacing, radii) from the HTML — but implement components using real mobile primitives.

**Fidelity: High (hi-fi).** Treat pixel values, hex colors, and typographic scale as final.

---

## Recommended stack (100% free hosting)

The user wants everything free except Play Store/App Store developer fees. Here's a realistic stack:

| Layer | Choice | Why free |
|---|---|---|
| **Mobile app** | **React Native + Expo** | Ships to Android + iOS from one codebase. Expo's EAS free tier covers builds. |
| **Auth** | **Supabase Auth** (free tier: 50k MAU) | Phone OTP (+880), email, social |
| **DB + API** | **Supabase Postgres** (free tier: 500MB + unlimited API requests) | Auto-generates REST + Realtime |
| **File storage** | **Supabase Storage** (free: 1GB) | Avatars, receipts |
| **Push notifications** | **Expo Push** (free, unlimited) | Bill reminders |
| **Analytics** | **PostHog** (free: 1M events/mo) or Supabase built-in | |
| **Error tracking** | **Sentry** (free: 5k events/mo) | |
| **CI / OTA updates** | **Expo EAS Update** (free tier) | Ship fixes without store review |

**Only paid items:**
- Google Play developer account — **$25 one-time**
- Apple developer account — **$99/year** (skip until iOS is in scope)

When you outgrow free tiers you'll be making money. Scale then.

---

## Project structure (suggested)

```
lance-wallet/
├── app/                          # Expo Router screens
│   ├── (auth)/
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   ├── otp.tsx
│   │   └── forgot.tsx
│   ├── (onboarding)/
│   │   ├── index.tsx             # splash
│   │   ├── step-1.tsx            # clarity
│   │   ├── step-2.tsx            # wallets
│   │   └── step-3.tsx            # reminders
│   ├── (tabs)/
│   │   ├── index.tsx             # home
│   │   ├── transactions.tsx
│   │   ├── add.tsx               # FAB target (modal)
│   │   ├── analytics.tsx
│   │   └── profile.tsx
│   ├── budgets.tsx
│   ├── bills.tsx
│   ├── accounts.tsx
│   └── goals.tsx
├── components/
│   ├── ui/                       # Btn, Card, Chip, Input, TopBar, BottomNav
│   ├── finance/                  # Money, CatDot, CAT icons
│   └── brand/                    # LanceMark, LanceWordmark
├── theme/
│   ├── tokens.ts                 # colors, fonts, spacing, radii
│   └── ink-presets.ts            # forest, midnight, graphite, espresso, indigo
├── lib/
│   ├── supabase.ts
│   ├── format.ts                 # BDT formatting, taka symbol
│   └── i18n.ts                   # en + bn dictionaries
└── assets/
    ├── fonts/                    # Cormorant Garamond, Geist, Geist Mono
    └── logo/                     # lance-mark.png
```

---

## Design tokens

### Colors (theme/tokens.ts)

```ts
export const T = {
  // Paper (background)
  paper:     '#F1ECDE',   // warm ivory, app background
  paperSoft: '#E8E2D3',   // outer gutter
  ivory:     '#F6F2EA',   // card base, dark-on-light surfaces

  // Ink (foreground) — default: Forest
  ink:       '#1C3329',   // forest primary (user's pick)
  inkSoft:   '#2C4A3D',   // forest secondary

  // Neutral scale
  line:      'rgba(14,20,17,0.12)',
  lineSoft:  'rgba(14,20,17,0.06)',
  mute:      'rgba(14,20,17,0.55)',
  muteSoft:  'rgba(14,20,17,0.35)',

  // Accents
  jade:      '#5C7C68',   // primary accent (positive / CTA)
  danger:    '#A84A3D',   // over-budget, alerts
  warn:      '#B88A3F',   // near limit

  // Category tints (cat dots, use at 0.12 opacity for chip bg, full for icon)
  rent:      '#8B6F47',
  grocery:   '#5C7C68',
  transport: '#4A6B85',
  dining:    '#A84A3D',
  family:    '#7D5B8E',
  medicine:  '#6B8C9E',
  internet:  '#5C6E8B',
  recharge:  '#B88A3F',
  emi:       '#3F5F4E',
  savings:   '#2E5540',
  income:    '#4A7758',

  // Radii
  r: { sm: 8, md: 14, lg: 22, pill: 999 },

  // Spacing (4pt grid)
  s: { 1: 4, 2: 8, 3: 12, 4: 16, 5: 22, 6: 28, 7: 36, 8: 48 },
};
```

### Ink presets (switchable theme)
```ts
export const INK_PRESETS = {
  forest:    { ink: '#1C3329', inkSoft: '#2C4A3D', label: 'Forest' },    // DEFAULT
  graphite:  { ink: '#0E1411', inkSoft: '#2A3330', label: 'Graphite' },
  midnight:  { ink: '#0F1B2D', inkSoft: '#1E2D44', label: 'Midnight' },
  espresso:  { ink: '#2B1810', inkSoft: '#3D2418', label: 'Espresso' },
  indigo:    { ink: '#1E1B3A', inkSoft: '#2E2A50', label: 'Indigo' },
};
```

### Typography

| Role | Font | Size | Weight | Letter-spacing |
|---|---|---|---|---|
| Display (headlines, money) | Cormorant Garamond | 28–48 | 500 | 0 |
| H1 | Cormorant Garamond | 32 | 500 | 0 |
| H2 | Cormorant Garamond | 24 | 500 | 0 |
| H3 | Geist | 16 | 600 | 0 |
| Body | Geist | 14 | 400 | 0 |
| UI / button | Geist | 13 | 600 | 0.2 |
| Caption (labels) | Geist | 11 | 600 | 1.5, uppercase |
| Money (numerals) | Geist Mono | variable | 500 | 0 |

All three fonts are on Google Fonts — free. In RN use `@expo-google-fonts/cormorant-garamond`, `@expo-google-fonts/geist`, `@expo-google-fonts/geist-mono`.

### Spacing: 4pt grid. Screen padding: 22px. Card padding: 18–22px.

### Radius
- Chips / pills: `999`
- Buttons / inputs: `14`
- Cards: `22`
- Tiny surfaces: `8`

### Shadow (cards, elevated)
```
0 4px 14px -6px rgba(14,20,17,0.08),
0 1px 2px rgba(14,20,17,0.04)
```

---

## Screens

All 17 screens are in `lib/lance-screens-*.jsx`. Spec summary:

### 00 — Design system (reference only, not a shipped screen)
`lib/lance-screens-5.jsx` → `ScreenDesignSystem`. Shows tokens + components in one page. Use it as the visual source of truth.

### 01 Splash
- Full ink (forest) background with subtle diagonal paper texture (1.5% ivory lines at 135°)
- Centered: **LanceMark** (56px) → 36px gap → **LANCE** wordmark (22px) + "Wallet" caption (11px, letter-spaced 4)
- Bottom: 32×1 divider, italic tagline "Clarity for every taka." (Cormorant italic 15), "Made in Bangladesh · v1.0" caption
- Auto-advance to onboarding after ~1.5s in real app

### 02–04 Onboarding (3 steps)
- Editorial geometric illustrations (not childish cartoons)
- Each step: illustration (240×240 framed) → display headline → body copy → dot progress + "Skip" / "Continue"
- Content:
  1. **Clarity** — "See every taka. Without the spreadsheet." (miniature balance card with category bars)
  2. **Wallets** — "All your money, in one view." (stacked cards: Cash, bKash, Nagad, Bank)
  3. **Reminders** — "Never miss a bill again." (bill list with due-date chips)

### 05 Sign in
- LanceMark top (size 32) → "Welcome back" H1 → subtitle
- Phone input with **+880** prefix (non-editable), then 10-digit field
- Password input with show/hide eye
- Primary button "Sign in" (full width, ink bg, ivory text)
- "Forgot password?" ghost link → `auth-forgot`
- Footer: "New to Lance? Create account" → `auth-signup`

### 06 Sign up
- Name, phone (+880), password, confirm password
- Checkbox: "I agree to Terms & Privacy"
- Primary "Create account" → `auth-otp`

### 07 OTP verify
- "Verify your number" H1 → "Enter the 6-digit code we sent to +880 1XXX XXX XXX"
- 6 separate input boxes (auto-advance on keypress)
- Resend timer (60s countdown), then tap-to-resend
- Primary "Verify" → `home`

### 08 Forgot password
- Phone input, primary "Send reset code"

### 09 Home dashboard (most complex)
- **Top bar:** good-morning greeting + avatar
- **Hero card (ink bg):** "Total balance" caption → big money (Cormorant 44, Geist Mono numerals) → small "April spending" / "April income" split
- **Quick actions row:** 4 icon buttons (Add, Transfer, Bills, Scan) — 64px squares, ivory bg
- **Upcoming bills** section: header + "See all" → 2 bill rows (electricity, internet) with due date chip
- **Savings goal progress:** horizontal card, mini progress bar, amount contributed / target
- **Recent transactions:** 4 rows, grouped by "Today" / "Yesterday"
- **Bottom nav (5 slots):** Home · Activity · [FAB +] · Insights · Profile

### 10 Transactions
- Search bar + filter chip row (All, Income, Expense, Transfer)
- Grouped list by day header ("Today", "Yesterday", "Wed, Apr 16", …)
- Each row: `[CatDot] Category label → Note` on left, `-৳amount` + `account` on right

### 11 Add transaction
- Segmented control: Expense / Income / Transfer
- Huge amount display (Cormorant 56) with blinking caret
- **Custom numeric keypad** (1-9, 0, •, ⌫) — do NOT use system keyboard; this is the premium detail
- Below keypad: Category picker (chip row, horizontal scroll), Account picker, Date (today by default), Note field
- Primary "Save" at bottom

### 12 Analytics
- Month selector pill
- Income vs expense bar chart (6 months)
- Category breakdown list with % bars (rent 42%, grocery 16%, family 12%, dining 8%, …)
- Insight card: "You spent 18% less on dining this month."

### 13 Budgets
- Month header + "9 days left"
- Total bar: 42,160 spent / 46,900 budgeted (90%)
- List of 7 category budgets, each: category → spent/cap → progress bar (jade / warn / danger based on %)
- Tap row → budget detail sheet (not yet designed)

### 14 Bills & reminders
- "Due this week" section (electricity, internet)
- "Upcoming" section (rent, rocket recharge)
- "Paid" section (archive chip style)
- Each bill row: icon + merchant + amount + due date chip + status

### 15 Accounts / wallets
- "Total balance" hero (sum of all accounts)
- List of 5 account cards: **Cash**, **Bank**, **bKash**, **Nagad**, **Rocket**
- Each: logo/mark on left, account name + last4, balance on right
- "+ Add account" bottom row

### 16 Savings goals
- 5 goals: Emergency fund, Eid shopping, Travel, Tuition, Family support
- Each: name, target amount, progress ring + current/target, "Add money" CTA

### 17 Profile & settings
- Avatar + name + phone
- Sections: Account, Notifications, Security (biometric toggle), Language (English / বাংলা — Bangla flagged "soon"), Currency, App preferences, Help, Log out

---

## Interactions

- **Bottom nav:** active item gets `T.ink` color + label; others `T.muteSoft`. FAB is raised `-22px` with circular ink button.
- **FAB** on home/tx/analytics/profile opens `add-tx` as full-screen modal (slide up)
- **Back arrow** in TopBar navigates to previous screen (use native back on Android)
- **Pull-to-refresh** on home, tx, bills
- **Animations:** 350ms fadeIn + 6px translateY on screen mount. Use React Native Reanimated `FadeIn` / `SlideInDown`.
- **Haptics:** light impact on FAB tap, medium on successful save, error on validation fail

---

## State management

Suggested: **Zustand** (tiny, free) or **React Query** for server state + Zustand for UI state.

Core slices:
- `auth` — session, user
- `accounts` — list of wallets, balances
- `transactions` — paginated, cached by month
- `budgets` — current month budgets, spent amounts (computed from txs)
- `bills` — upcoming, paid
- `goals` — savings goals with progress

---

## Localization (i18n)

Dictionary keys already used in the prototype: `home`, `activity`, `insights`, `profile`, `budgets`, `bills`, `accounts`, `goals`, `addTx`, `save`, `cancel`, `balance`, `income`, `expense`, etc.

Bangla translations are stubbed in the prototype's `lib/lance-ui.jsx` under `setLang('bn')`. Extract them to `lib/i18n.ts`.

Currency format: `৳` prefix, Indian/Bangladeshi lakh/crore grouping (e.g., `৳1,23,456`). Use `Intl.NumberFormat('bn-BD')`.

---

## Bangladesh-specific

- Phone: always `+880` prefix, 10 digits
- Default accounts seed: **Cash**, **bKash**, **Nagad**, **Rocket**, **Bank** — in that order
- Default categories: Rent, Grocery, Transport, Mobile Recharge, Internet, Dining, Medicine, Family, EMI, Savings
- Bill templates to preload: Electricity (DPDC/DESCO), Gas (Titas), Water (WASA), Internet, Mobile recharge, Rent

---

## Assets

- `assets/lance-mark.png` — cropped logo mark (114×327, transparent PNG). Use this everywhere.
- Original full logo (`lance-logo.png` with "LANCE" wordmark) was not kept in handoff — recreate wordmark in Cormorant Garamond 500, uppercase, letterspacing = size × 0.35.

Icons: all 24px stroke-based SVGs, stroke-width 1.6, round linecaps, inline in `lib/lance-ui.jsx` → `Icon.*`. Port to `react-native-svg`.

---

## Files in this bundle

```
Lance Wallet.html         — entry point, mount all screens in a navigator shell
lib/lance-ui.jsx          — tokens, Phone frame, BottomNav, Btn, Card, Chip, Input, TopBar, Money, Icon, CAT, i18n strings
lib/lance-screens-1.jsx   — Splash, Onboarding, Auth (login, signup, otp, forgot)
lib/lance-screens-2.jsx   — Home, Transactions, Add Transaction
lib/lance-screens-3.jsx   — Analytics, Budgets, Bills
lib/lance-screens-4.jsx   — Accounts, Goals
lib/lance-screens-5.jsx   — Profile, Design System reference page
assets/lance-mark.png     — the cropped Lance spear mark
```

To preview: serve the folder (`npx serve`, Python `http.server`, or VS Code Live Server) and open `Lance Wallet.html`. The Tweaks panel (bottom-right gear) lets you switch ink color, platform frame, and language.

---

## Implementation priority (MVP path)

1. **Scaffold** — Expo + Supabase + theme tokens + fonts + navigator
2. **Auth flow** — signup, OTP (Supabase phone auth), sign in
3. **Home dashboard + accounts list** — read-only first, hard-coded seed data
4. **Add transaction** (the crown jewel — custom keypad)
5. **Transactions list**
6. **Budgets + Bills**
7. **Analytics**
8. **Savings goals**
9. **Profile + settings + language toggle**
10. **Push notifications** for bill reminders
11. **Dark mode** (tokens already support it — just invert `paper` ↔ `ink`)

Ship 1–5 for first Play Store beta. Rest can follow in weekly updates via Expo OTA (no re-review).
