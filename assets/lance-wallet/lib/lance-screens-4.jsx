// Lance Wallet — Screens part 4: Accounts, Goals, Profile, Design System

// ──────────────── ACCOUNTS ────────────────
function ScreenAccounts({ onNav }) {
  const accounts = [
    { type:'bank', name:'BRAC Bank', sub:'Savings · ····3218', v: 98420, change:'+৳85,000 this month', bg: T.ink, fg: T.ivory, letter:'B' },
    { type:'mobile', name:'bKash', sub:'+880 1755·····10', v: 12330, change:'−৳8,420', bg: T.jade, fg: T.ivory, letter:'b' },
    { type:'mobile', name:'Nagad', sub:'+880 1755·····10', v: 4580, change:'−৳1,200', bg: T.inkSoft, fg: T.ivory, letter:'N' },
    { type:'mobile', name:'Rocket', sub:'+880 1755·····10‑2', v: 2100, change:'No activity', bg: '#7A3E5F', fg: T.ivory, letter:'R' },
    { type:'cash', name:'Cash', sub:'Pocket', v: 8200, change:'−৳3,450', bg: T.sand, fg: T.ink, letter:'₹' },
    { type:'bank', name:'City Bank', sub:'Salary · ····7720', v: 22600, change:'+৳32,400', bg: '#2A4F66', fg: T.ivory, letter:'C' },
  ];
  const total = accounts.reduce((s,a)=>s+a.v, 0);

  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      <TopBar title={t('accountsTitle')} onBack={()=>onNav&&onNav('home')}/>

      {/* Total */}
      <div style={{ padding: '0 22px 16px' }}>
        <Card pad={20} tone="ink" style={{ color: T.ivory, position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', bottom: -20, right: -10, opacity: 0.06 }}>
            <LanceMark size={140} color={T.ivory}/>
          </div>
          <Caption style={{ color: 'rgba(246,242,234,0.55)' }}>NET WORTH</Caption>
          <Money value={total} size={36} color={T.ivory} weight={500} style={{ marginTop: 4 }}/>
          <div style={{ display:'flex', gap: 16, marginTop: 16 }}>
            <div>
              <Caption style={{ color: 'rgba(246,242,234,0.45)' }}>BANK</Caption>
              <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 500, color: T.ivory, marginTop: 2, fontVariantNumeric:'tabular-nums' }}>৳121,020</div>
            </div>
            <div>
              <Caption style={{ color: 'rgba(246,242,234,0.45)' }}>MOBILE</Caption>
              <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 500, color: T.ivory, marginTop: 2, fontVariantNumeric:'tabular-nums' }}>৳19,010</div>
            </div>
            <div>
              <Caption style={{ color: 'rgba(246,242,234,0.45)' }}>CASH</Caption>
              <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 500, color: T.ivory, marginTop: 2, fontVariantNumeric:'tabular-nums' }}>৳8,200</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Account cards */}
      <div style={{ padding: '0 22px', display:'flex', flexDirection:'column', gap: 10 }}>
        {accounts.map((a,i) => (
          <div key={i} style={{
            background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.lg,
            padding: 14, display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: a.bg, color: a.fg,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 600, flexShrink: 0,
            }}>{a.letter}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink }}>{a.name}</div>
                <Chip size="xs" tone="ghost">{a.type.toUpperCase()}</Chip>
              </div>
              <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, marginTop: 2 }}>{a.sub}</div>
              <div style={{ fontFamily: FONT_UI, fontSize: 11, color: a.change.startsWith('+')?T.jade:a.change.startsWith('−')?T.rose:T.mute, marginTop: 4, fontWeight: 500 }}>
                {a.change}
              </div>
            </div>
            <Money value={a.v} size={16}/>
          </div>
        ))}
        <button style={{
          background: 'transparent', border: `1.5px dashed ${T.line}`,
          borderRadius: T.r.lg, padding: '18px',
          display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
          fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink, cursor:'pointer',
        }}>
          {Icon.plus(16, T.ink)} Add account or wallet
        </button>
      </div>
    </div>
  );
}

// ──────────────── SAVINGS GOALS ────────────────
function ScreenGoals({ onNav }) {
  const goals = [
    { name:'Emergency fund',   sub:'6 months expenses',    saved: 185000, target: 300000, due:'Dec 2026', color: T.jade },
    { name:'Eid shopping',     sub:'Family + gifts',       saved: 14400, target: 20000, due:'10 May',    color: T.sand },
    { name:'Family trip — Cox\'s Bazar', sub:'4 people · 5 days', saved: 42000, target: 75000, due:'Jul 2026', color: T.sky },
    { name:'Laptop — MacBook Pro', sub:'For freelance work', saved: 68000, target: 220000, due:'Aug 2026', color: T.ink },
    { name:'Ammu medical reserve', sub:'Monthly set-aside',  saved: 24000, target: 50000, due:'Ongoing',   color: '#7A3E5F' },
  ];

  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      <TopBar title={t('goals')} onBack={()=>onNav&&onNav('home')} right={
        <button style={{ background:'none', border:'none', fontFamily: FONT_UI, fontSize: 12, fontWeight: 600, color: T.jade, cursor:'pointer' }}>+ New</button>
      }/>

      {/* Aggregate */}
      <div style={{ padding: '0 22px 16px' }}>
        <Card pad={20}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div>
              <Caption>TOTAL SAVED</Caption>
              <Money value={333400} size={32} style={{ marginTop: 4 }}/>
              <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, marginTop: 4 }}>
                of ৳665,000 across 5 goals
              </div>
            </div>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: 500, color: T.jade, fontStyle:'italic', lineHeight: 1 }}>
              50%
            </div>
          </div>
          {/* segmented progress */}
          <div style={{ display:'flex', gap: 3, height: 6, marginTop: 16 }}>
            {goals.map((g,i) => (
              <div key={i} style={{ flex: g.target, background: T.lineSoft, borderRadius: 3, overflow:'hidden' }}>
                <div style={{ width: `${(g.saved/g.target)*100}%`, height:'100%', background: g.color }}/>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Goal cards */}
      <div style={{ padding: '0 22px', display:'flex', flexDirection:'column', gap: 12 }}>
        {goals.map((g,i) => {
          const pct = g.saved/g.target;
          return (
            <Card key={i} pad={18}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 14 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 500, color: T.ink, letterSpacing: -0.3 }}>{g.name}</div>
                  <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, marginTop: 2 }}>{g.sub} · by {g.due}</div>
                </div>
                <Chip size="xs" tone="ghost">{Math.round(pct*100)}%</Chip>
              </div>
              {/* Ring + numbers */}
              <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
                <div style={{ position:'relative', width: 64, height: 64, flexShrink: 0 }}>
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="27" fill="none" stroke={T.lineSoft} strokeWidth="5"/>
                    <circle cx="32" cy="32" r="27" fill="none" stroke={g.color} strokeWidth="5"
                      strokeDasharray={`${2*Math.PI*27*pct} ${2*Math.PI*27}`}
                      strokeLinecap="round" transform="rotate(-90 32 32)"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap: 6 }}>
                    <Money value={g.saved} size={20}/>
                    <span style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute }}>/ ৳{g.target.toLocaleString()}</span>
                  </div>
                  <div style={{ fontFamily: FONT_UI, fontSize: 11, color: T.mute, marginTop: 4 }}>
                    <span style={{ color: T.jade, fontWeight: 600 }}>৳{(g.target-g.saved).toLocaleString()}</span> to go
                  </div>
                </div>
                <button style={{ padding: '8px 14px', borderRadius: T.r.pill, background: T.ink, color: T.ivory, border: 'none', fontFamily: FONT_UI, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  + Add
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ──────────────── PROFILE & SETTINGS ────────────────
function ScreenProfile({ onNav }) {
  const groups = [
    { title:'ACCOUNT', rows:[
      { icon: Icon.user, l:'Personal information', r:'Ayesha Rahman' },
      { icon: Icon.wallet, l:'Connected accounts', r:'6 linked' },
      { icon: Icon.lock, l:'Security & PIN', r:'Face ID · ON' },
    ]},
    { title:'PREFERENCES', rows:[
      { icon: Icon.globe, l:'Language', r:'English · বাংলা soon' },
      { icon: Icon.wallet, l:'Currency', r:'BDT · ৳' },
      { icon: Icon.bell, l:'Notifications', r:'4 on · 2 muted' },
      { icon: Icon.calendar, l:'Month start date', r:'1st' },
    ]},
    { title:'APP', rows:[
      { icon: Icon.trend, l:'Categories & rules', r:'10 active' },
      { icon: Icon.settings, l:'Appearance', r:'Light' },
      { icon: Icon.bolt, l:'Backup & export', r:'CSV · PDF' },
    ]},
    { title:'HELP', rows:[
      { icon: Icon.bell, l:'Help centre' },
      { icon: Icon.user, l:'Contact support' },
      { icon: Icon.globe, l:'About Lance' },
    ]},
  ];

  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ padding: '24px 22px 20px', textAlign:'center' }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: T.jade, color: T.ivory, margin: '0 auto',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 600,
          border: `4px solid ${T.ivoryDeep}`,
        }}>A</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 500, color: T.ink, marginTop: 14 }}>
          Ayesha Rahman
        </div>
        <div style={{ fontFamily: FONT_UI, fontSize: 13, color: T.mute, marginTop: 2 }}>
          +880 1755 034 210 · ayesha@lance.bd
        </div>
        <div style={{ display:'flex', gap: 8, justifyContent:'center', marginTop: 14 }}>
          <Chip tone="jade">VERIFIED</Chip>
          <Chip tone="neutral">LANCE SINCE MAR '26</Chip>
        </div>
      </div>

      {/* Stat strip */}
      <div style={{ padding: '0 22px 16px' }}>
        <Card pad={0} style={{ display:'flex' }}>
          {[
            { l:'SCORE', v:'78', sub:'Good' },
            { l:'STREAK', v:'14d', sub:'Logged' },
            { l:'SAVED', v:'৳64K', sub:'Apr' },
          ].map((s,i,arr) => (
            <div key={i} style={{ flex: 1, padding: 14, borderRight: i<arr.length-1 ? `1px solid ${T.lineSoft}`:'none', textAlign:'center' }}>
              <Caption>{s.l}</Caption>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, color: T.ink, marginTop: 2 }}>{s.v}</div>
              <div style={{ fontFamily: FONT_UI, fontSize: 10, color: T.mute, letterSpacing: 0.5 }}>{s.sub}</div>
            </div>
          ))}
        </Card>
      </div>

      {/* Settings groups */}
      <div style={{ padding: '0 22px', display:'flex', flexDirection:'column', gap: 18 }}>
        {groups.map((g, gi) => (
          <div key={gi}>
            <SectionLabel>{g.title}</SectionLabel>
            <Card pad={0}>
              {g.rows.map((r, i, arr) => (
                <React.Fragment key={i}>
                  <div style={{ display:'flex', alignItems:'center', gap: 14, padding: '14px 16px' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: T.ivoryDeep, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      {r.icon(16, T.ink)}
                    </div>
                    <div style={{ flex: 1, fontFamily: FONT_UI, fontSize: 14, fontWeight: 500, color: T.ink }}>{r.l}</div>
                    {r.r && <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute }}>{r.r}</div>}
                    {Icon.arrowRight(14, T.muteSoft)}
                  </div>
                  {i<arr.length-1 && <div style={{ height: 1, background: T.lineSoft, margin: '0 16px' }}/>}
                </React.Fragment>
              ))}
            </Card>
          </div>
        ))}

        <button onClick={()=>onNav&&onNav('auth-login')} style={{
          background:'transparent', border:`1px solid ${T.line}`,
          borderRadius: T.r.pill, padding: '14px',
          display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
          fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.rose, cursor:'pointer',
        }}>
          {Icon.logout(16, T.rose)} Sign out
        </button>

        <div style={{ textAlign:'center', fontFamily: FONT_UI, fontSize: 11, color: T.muteSoft, padding: '8px 0 0' }}>
          LANCE WALLET · v1.0.0 · Made in Dhaka
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenAccounts, ScreenGoals, ScreenProfile });
