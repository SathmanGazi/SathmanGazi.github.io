// Lance Wallet — Screens part 3: Analytics, Budgets, Bills

// ──────────────── ANALYTICS ────────────────
function ScreenAnalytics({ onNav }) {
  const months = ['Nov','Dec','Jan','Feb','Mar','Apr'];
  const spending = [38, 52, 41, 46, 39, 42];
  const income = [85, 92, 88, 110, 95, 117];
  const maxV = 120;

  const categories = [
    { cat:'rent', v: 18000, pct: 42 },
    { cat:'grocery', v: 6820, pct: 16 },
    { cat:'family', v: 5000, pct: 12 },
    { cat:'dining', v: 3470, pct: 8 },
    { cat:'transport', v: 2890, pct: 7 },
    { cat:'internet', v: 2400, pct: 6 },
    { cat:'medicine', v: 1680, pct: 4 },
    { cat:'recharge', v: 1920, pct: 5 },
  ];

  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      <TopBar title="Analytics" onBack={()=>onNav&&onNav('home')}/>

      {/* Month switcher */}
      <div style={{ padding: '0 22px 16px', display:'flex', alignItems:'center', gap: 10 }}>
        <button style={{ width: 32, height: 32, borderRadius: 10, background: T.ivory, border:`1px solid ${T.line}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
          {Icon.arrowLeft(14, T.ink)}
        </button>
        <div style={{ flex:1, textAlign:'center', fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 500, color: T.ink, fontStyle:'italic' }}>
          April 2026
        </div>
        <button style={{ width: 32, height: 32, borderRadius: 10, background: T.ivory, border:`1px solid ${T.line}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
          {Icon.arrowRight(14, T.ink)}
        </button>
      </div>

      {/* Trend card */}
      <div style={{ padding: '0 22px' }}>
        <Card pad={18}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 16 }}>
            <div>
              <Caption>NET THIS MONTH</Caption>
              <div style={{ display:'flex', alignItems:'baseline', gap: 10, marginTop: 4 }}>
                <Money value={75220} size={30} positive weight={500}/>
                <Chip tone="jade" size="xs">↑ 18% vs MAR</Chip>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 6 }}>
              <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.jade }}/>
                <Caption>Income</Caption>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.sand }}/>
                <Caption>Spent</Caption>
              </div>
            </div>
          </div>

          {/* Dual bar chart */}
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap: 8, height: 140, padding: '0 2px' }}>
            {months.map((m, i) => (
              <div key={m} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap: 8 }}>
                <div style={{ flex: 1, width: '100%', display:'flex', alignItems:'flex-end', justifyContent:'center', gap: 3 }}>
                  <div style={{ width: 10, height: `${(income[i]/maxV)*100}%`, background: T.jade, borderRadius: '2px 2px 0 0' }}/>
                  <div style={{ width: 10, height: `${(spending[i]/maxV)*100}%`, background: T.sand, borderRadius: '2px 2px 0 0', opacity: i===5?1:0.5 }}/>
                </div>
                <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, color: i===5 ? T.ink : T.mute, letterSpacing: 0.5 }}>{m}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Insight cards */}
      <div style={{ padding: '16px 22px 0', display:'flex', gap: 10 }}>
        <Card pad={14} tone="jade" style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: T.jadeDeep, textTransform:'uppercase' }}>INSIGHT</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 500, color: T.jadeDeep, marginTop: 6, lineHeight: 1.2, fontStyle:'italic' }}>
            Dining is down 32%.
          </div>
          <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.jadeDeep, opacity: 0.75, marginTop: 4 }}>
            You saved ৳1,630 vs March.
          </div>
        </Card>
        <Card pad={14} style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: T.mute, textTransform:'uppercase' }}>WATCH</div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 500, color: T.ink, marginTop: 6, lineHeight: 1.2, fontStyle:'italic' }}>
            Transport is up 18%.
          </div>
          <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, marginTop: 4 }}>
            Mostly ride-share this week.
          </div>
        </Card>
      </div>

      {/* Category breakdown */}
      <div style={{ padding: '24px 22px 0' }}>
        <SectionLabel right="৳42,180 TOTAL">BY CATEGORY</SectionLabel>
        <Card pad={18}>
          {/* Stacked bar */}
          <div style={{ display:'flex', height: 10, borderRadius: 5, overflow:'hidden', marginBottom: 18 }}>
            {categories.map((c,i) => (
              <div key={i} style={{ width: `${c.pct}%`, background: CAT[c.cat].bg }}/>
            ))}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
            {categories.map((c,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: CAT[c.cat].bg }}/>
                <div style={{ flex: 1, fontFamily: FONT_UI, fontSize: 13, color: T.ink, fontWeight: 500 }}>{CAT[c.cat].name}</div>
                <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 500, color: T.mute, width: 32, textAlign:'right' }}>{c.pct}%</div>
                <Money value={c.v} size={13}/>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Weekday pattern */}
      <div style={{ padding: '24px 22px 0' }}>
        <SectionLabel>SPENDING PATTERN</SectionLabel>
        <Card pad={18}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', height: 80, gap: 8 }}>
            {[
              { d:'Sat', v: 0.4 }, { d:'Sun', v: 0.5 }, { d:'Mon', v: 0.75 },
              { d:'Tue', v: 0.35 }, { d:'Wed', v: 0.6 }, { d:'Thu', v: 0.55 }, { d:'Fri', v: 0.9 },
            ].map((x,i) => (
              <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap: 6 }}>
                <div style={{ flex:1, width:'100%', display:'flex', alignItems:'flex-end' }}>
                  <div style={{ width:'100%', height: `${x.v*100}%`, background: i===6 ? T.ink : T.jade, opacity: i===6 ? 1 : 0.25, borderRadius: '4px 4px 0 0' }}/>
                </div>
                <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, color: T.mute }}>{x.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, paddingTop: 14, borderTop:`1px solid ${T.lineSoft}`, fontFamily: FONT_UI, fontSize: 12, color: T.mute, lineHeight: 1.5 }}>
            <span style={{ color: T.ink, fontWeight: 600 }}>Fridays</span> are your biggest spend day — mostly dining and grocery runs.
          </div>
        </Card>
      </div>
    </div>
  );
}

// ──────────────── BUDGETS ────────────────
function ScreenBudgets({ onNav }) {
  const budgets = [
    { cat:'rent',      spent: 18000, cap: 18000, days: 0 },
    { cat:'grocery',   spent: 6820,  cap: 8000,  days: 9 },
    { cat:'transport', spent: 2890,  cap: 3000,  days: 9 },
    { cat:'dining',    spent: 3470,  cap: 3000,  days: 9 },
    { cat:'family',    spent: 5000,  cap: 10000, days: 9 },
    { cat:'medicine',  spent: 1680,  cap: 2500,  days: 9 },
    { cat:'internet',  spent: 2400,  cap: 2400,  days: 0 },
  ];
  const totalSpent = budgets.reduce((s,b)=>s+b.spent,0);
  const totalCap = budgets.reduce((s,b)=>s+b.cap,0);

  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      <TopBar title={t('budgets')} onBack={()=>onNav&&onNav('home')} right={
        <button style={{ background:'none', border:'none', fontFamily: FONT_UI, fontSize: 12, fontWeight: 600, color: T.jade, cursor:'pointer' }}>+ New</button>
      }/>

      {/* Total card */}
      <div style={{ padding: '0 22px' }}>
        <Card pad={20}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
            <Caption>TOTAL SPENT</Caption>
            <Caption>{Math.round(totalSpent/totalCap*100)}% USED</Caption>
          </div>
          <div style={{ display:'flex', alignItems:'baseline', gap: 8, marginTop: 4 }}>
            <Money value={totalSpent} size={32}/>
            <span style={{ fontFamily: FONT_UI, fontSize: 14, color: T.mute }}>of ৳{totalCap.toLocaleString()}</span>
          </div>
          <div style={{ height: 8, background: T.lineSoft, borderRadius: 4, marginTop: 16, overflow:'hidden' }}>
            <div style={{ width: `${(totalSpent/totalCap)*100}%`, height:'100%', background: T.ink, borderRadius: 4 }}/>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop: 10, fontFamily: FONT_UI, fontSize: 11, color: T.mute }}>
            <span>৳{(totalCap-totalSpent).toLocaleString()} remaining</span>
            <span>≈ ৳{Math.round((totalCap-totalSpent)/9).toLocaleString()} / day</span>
          </div>
        </Card>
      </div>

      {/* Filter */}
      <div style={{ padding: '16px 22px 12px', display:'flex', gap: 8 }}>
        {['All','On track','Warning','Over'].map((f,i) => (
          <div key={f} style={{
            padding: '6px 12px', borderRadius: T.r.pill,
            background: i===0 ? T.ink : 'transparent',
            color: i===0 ? T.ivory : T.ink,
            border: `1px solid ${i===0 ? T.ink : T.line}`,
            fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, cursor:'pointer',
          }}>{f}</div>
        ))}
      </div>

      {/* Budget list */}
      <div style={{ padding: '0 22px', display:'flex', flexDirection:'column', gap: 10 }}>
        {budgets.map((b,i) => {
          const pct = b.spent/b.cap;
          const over = pct > 1;
          const warn = pct > 0.85 && !over;
          const tone = over ? T.rose : warn ? T.sand : T.jade;
          return (
            <Card key={i} pad={16}>
              <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
                <CatDot cat={b.cat} size={40}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                    <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink }}>{CAT[b.cat].name}</div>
                    <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, fontVariantNumeric:'tabular-nums' }}>
                      <span style={{ color: T.ink, fontWeight: 600 }}>৳{b.spent.toLocaleString()}</span> / ৳{b.cap.toLocaleString()}
                    </div>
                  </div>
                  <div style={{ height: 6, background: T.lineSoft, borderRadius: 3, marginTop: 8, overflow:'hidden', position:'relative' }}>
                    <div style={{ width: `${Math.min(pct,1)*100}%`, height:'100%', background: tone, borderRadius: 3 }}/>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', marginTop: 6, fontFamily: FONT_UI, fontSize: 11 }}>
                    {over ? (
                      <span style={{ color: T.rose, fontWeight: 600 }}>Over by ৳{(b.spent-b.cap).toLocaleString()}</span>
                    ) : warn ? (
                      <span style={{ color: '#8A6A20', fontWeight: 600 }}>৳{(b.cap-b.spent).toLocaleString()} left · tight</span>
                    ) : (
                      <span style={{ color: T.mute }}>৳{(b.cap-b.spent).toLocaleString()} left</span>
                    )}
                    <span style={{ color: T.mute }}>{Math.round(pct*100)}%</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Note */}
      <div style={{ padding: '16px 22px 0', fontFamily: FONT_UI, fontSize: 12, color: T.mute, lineHeight: 1.5, textAlign:'center' }}>
        Budgets reset on the 1st of each month. Adjust any time.
      </div>
    </div>
  );
}

// ──────────────── BILLS & REMINDERS ────────────────
function ScreenBills({ onNav }) {
  const bills = [
    { t:'Link3 Internet',    sub:'Monthly · 1,200 Mbps',  v:1200,  due:'Tomorrow',    status:'due',     auto:true,  cat:'internet' },
    { t:'DPDC Electricity', sub:'Meter 0431‑2298',        v:1850,  due:'In 2 days',   status:'upcoming',auto:false, cat:'internet' },
    { t:'Grameenphone',      sub:'Recharge reminder',     v:300,   due:'In 5 days',   status:'upcoming',auto:false, cat:'recharge' },
    { t:'Rent — Apt 4B',     sub:'Paid to Karim Uncle',   v:18000, due:'In 9 days',   status:'upcoming',auto:false, cat:'rent' },
    { t:'Netflix',           sub:'Premium · shared',      v:650,   due:'In 12 days',  status:'upcoming',auto:true,  cat:'recharge' },
    { t:'WASA Water',        sub:'Quarterly',             v:780,   due:'Paid 12 Apr', status:'paid',    auto:false, cat:'internet' },
  ];

  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      <TopBar title={t('bills')} onBack={()=>onNav&&onNav('home')} right={
        <button style={{ background:'none', border:'none', fontFamily: FONT_UI, fontSize: 12, fontWeight: 600, color: T.jade, cursor:'pointer' }}>+ Add</button>
      }/>

      {/* Summary row */}
      <div style={{ padding: '0 22px 16px', display:'flex', gap: 10 }}>
        <Card pad={14} style={{ flex:1 }}>
          <Caption>DUE THIS WEEK</Caption>
          <div style={{ display:'flex', alignItems:'baseline', gap: 6, marginTop: 4 }}>
            <Money value={3350} size={20}/>
            <span style={{ fontFamily: FONT_UI, fontSize: 11, color: T.mute }}>· 3 bills</span>
          </div>
        </Card>
        <Card pad={14} style={{ flex:1 }}>
          <Caption>NEXT 30 DAYS</Caption>
          <div style={{ display:'flex', alignItems:'baseline', gap: 6, marginTop: 4 }}>
            <Money value={22000} size={20}/>
            <span style={{ fontFamily: FONT_UI, fontSize: 11, color: T.mute }}>· 5 bills</span>
          </div>
        </Card>
      </div>

      {/* Urgent banner */}
      <div style={{ padding: '0 22px 16px' }}>
        <Card pad={16} style={{ borderColor: '#E4B9AF', background: T.roseSoft }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: T.rose, color: T.ivory, display:'flex', alignItems:'center', justifyContent:'center' }}>
              {Icon.bell(20, T.ivory)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_UI, fontSize: 13, fontWeight: 600, color: '#7A2B1F' }}>Link3 Internet is due tomorrow</div>
              <div style={{ fontFamily: FONT_UI, fontSize: 11, color: '#7A2B1F', opacity: 0.75 }}>Auto-pay is on via bKash. Balance OK.</div>
            </div>
            <button style={{ padding: '6px 12px', borderRadius: T.r.pill, background: T.ink, color: T.ivory, border: 'none', fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
              Pay now
            </button>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 22px 12px', display:'flex', gap: 6 }}>
        {['Upcoming','Paid','All'].map((t,i) => (
          <div key={t} style={{
            flex: 1, textAlign:'center', padding: '8px 0',
            fontFamily: FONT_UI, fontSize: 12, fontWeight: 600,
            color: i===0 ? T.ink : T.mute,
            borderBottom: `2px solid ${i===0 ? T.ink : 'transparent'}`,
            cursor:'pointer',
          }}>{t}</div>
        ))}
      </div>

      {/* Bills list */}
      <div style={{ padding: '0 22px', display:'flex', flexDirection:'column', gap: 10 }}>
        {bills.map((b,i) => (
          <Card key={i} pad={14}>
            <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{ width: 4, height: 40, borderRadius: 2, background: b.status==='due'?T.rose : b.status==='paid'?T.mute : T.jade }}/>
              <CatDot cat={b.cat} size={38}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                  <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink }}>{b.t}</div>
                  {b.auto && <Chip tone="jade" size="xs">AUTO</Chip>}
                </div>
                <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, marginTop: 2 }}>
                  {b.sub} · <span style={{ color: b.status==='due'?T.rose : b.status==='paid'?T.mute : T.ink, fontWeight: b.status==='paid'?400:600 }}>{b.due}</span>
                </div>
              </div>
              <div style={{ textAlign:'right' }}>
                <Money value={b.v} size={14}/>
                {b.status==='paid' && <Caption style={{ color: T.jade, marginTop: 2 }}>PAID</Caption>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ScreenAnalytics, ScreenBudgets, ScreenBills });
