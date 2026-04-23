// Lance Wallet — Screens part 2: Home, Transactions, Add Transaction

// Sample data
const TX_DATA = [
  { day:'Today · Tue 21 Apr', items:[
    { cat:'dining', t:'Sultan\'s Dine', sub:'Dhanmondi · Bank', v:-1850, time:'1:42 PM' },
    { cat:'transport', t:'Uber', sub:'Gulshan → Office · bKash', v:-280, time:'9:12 AM' },
  ]},
  { day:'Yesterday · Mon 20 Apr', items:[
    { cat:'salary', t:'Salary · April', sub:'BRAC Bank Ltd', v:85000, time:'8:00 AM' },
    { cat:'grocery', t:'Shwapno', sub:'Monthly groceries · Cash', v:-4230, time:'7:20 PM' },
    { cat:'recharge', t:'Grameenphone', sub:'Recharge · bKash', v:-300, time:'3:05 PM' },
  ]},
  { day:'Sun 19 Apr', items:[
    { cat:'family', t:'To Ammu', sub:'Monthly send · bKash', v:-10000, time:'11:00 AM' },
    { cat:'dining', t:'Pizza Hut', sub:'Bashundhara · Bank', v:-920, time:'8:45 PM' },
    { cat:'internet', t:'Link3 Internet', sub:'Monthly · bKash', v:-1200, time:'10:15 AM' },
  ]},
  { day:'Fri 17 Apr', items:[
    { cat:'freelance', t:'Upwork payout', sub:'Bank · USD→BDT', v:32400, time:'2:30 PM' },
    { cat:'medicine', t:'Lazz Pharma', sub:'Cash', v:-680, time:'6:50 PM' },
  ]},
];

// ──────────────── HOME DASHBOARD ────────────────
function ScreenHome({ onNav }) {
  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ padding: '20px 22px 16px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.jade, color: T.ivory, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 600 }}>A</div>
          <div>
            <Caption>Good afternoon</Caption>
            <div style={{ fontFamily: FONT_UI, fontSize: 15, fontWeight: 600, color: T.ink }}>Ayesha Rahman</div>
          </div>
        </div>
        <div style={{ display:'flex', gap: 8 }}>
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: T.ivory, border: `1px solid ${T.line}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', position:'relative' }}>
            {Icon.bell(18, T.ink)}
            <div style={{ position:'absolute', top: 8, right: 10, width: 6, height: 6, borderRadius:'50%', background: T.rose }}/>
          </button>
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: T.ivory, border: `1px solid ${T.line}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
            {Icon.search(18, T.ink)}
          </button>
        </div>
      </div>

      {/* Hero balance card */}
      <div style={{ padding: '0 22px 0' }}>
        <Card tone="ink" pad={22} style={{ color: T.ivory, position:'relative', overflow:'hidden' }}>
          <div style={{
            position:'absolute', top: -20, right: -20, opacity: 0.08,
          }}>
            <LanceMark size={120} color={T.ivory}/>
          </div>
          <Caption style={{ color: 'rgba(246,242,234,0.55)', letterSpacing: 1.8 }}>TOTAL BALANCE · APRIL</Caption>
          <div style={{ display:'flex', alignItems:'baseline', gap: 10, marginTop: 6 }}>
            <Money value={148230} size={38} color={T.ivory} weight={500}/>
            <button style={{ background:'none', border:'none', padding:4, color: 'rgba(246,242,234,0.55)', cursor:'pointer' }}>
              {Icon.eye(16, 'rgba(246,242,234,0.55)')}
            </button>
          </div>
          <div style={{ display:'flex', gap: 20, marginTop: 20 }}>
            <div>
              <Caption style={{ color: 'rgba(246,242,234,0.5)' }}>INCOME</Caption>
              <div style={{ display:'flex', alignItems:'center', gap: 4, marginTop: 2 }}>
                <div style={{ width: 6, height: 6, borderRadius:'50%', background: T.jade }}/>
                <span style={{ fontFamily: FONT_UI, fontSize: 16, fontWeight: 500, color: T.ivory, fontVariantNumeric:'tabular-nums' }}>৳117,400</span>
              </div>
            </div>
            <div>
              <Caption style={{ color: 'rgba(246,242,234,0.5)' }}>SPENT</Caption>
              <div style={{ display:'flex', alignItems:'center', gap: 4, marginTop: 2 }}>
                <div style={{ width: 6, height: 6, borderRadius:'50%', background: T.sand }}/>
                <span style={{ fontFamily: FONT_UI, fontSize: 16, fontWeight: 500, color: T.ivory, fontVariantNumeric:'tabular-nums' }}>৳42,180</span>
              </div>
            </div>
            <div style={{ flex: 1 }}/>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end' }}>
              <Caption style={{ color: 'rgba(246,242,234,0.5)' }}>SAVED</Caption>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 500, color: T.ivory, fontStyle:'italic' }}>64%</div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ height: 4, background: 'rgba(246,242,234,0.1)', borderRadius: 2, marginTop: 12, overflow:'hidden', display:'flex' }}>
            <div style={{ width: '36%', background: T.sand }}/>
            <div style={{ width: '64%', background: T.jade }}/>
          </div>
        </Card>
      </div>

      {/* Quick actions */}
      <div style={{ padding: '20px 22px 0', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 10 }}>
        {[
          { icon: Icon.arrowUp, label: 'Income', tone: T.jade },
          { icon: Icon.arrowDown, label: 'Expense', tone: T.rose },
          { icon: Icon.transfer, label: 'Transfer', tone: T.sky },
          { icon: Icon.target, label: 'Goals', tone: T.sand },
        ].map((a,i) => (
          <button key={i} onClick={()=>onNav&&onNav(a.label==='Goals'?'goals':'add-tx')} style={{
            display:'flex', flexDirection:'column', alignItems:'center', gap: 8,
            padding: '14px 0', background: T.ivory, border: `1px solid ${T.line}`,
            borderRadius: T.r.md, cursor:'pointer',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.paper, display:'flex', alignItems:'center', justifyContent:'center' }}>
              {a.icon(18, a.tone)}
            </div>
            <span style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, color: T.ink }}>{a.label}</span>
          </button>
        ))}
      </div>

      {/* Accounts carousel */}
      <div style={{ padding: '28px 0 0' }}>
        <div style={{ padding: '0 22px' }}>
          <SectionLabel right={<span style={{ color: T.jade, cursor:'pointer' }} onClick={()=>onNav&&onNav('accounts')}>VIEW ALL</span>}>
            YOUR ACCOUNTS
          </SectionLabel>
        </div>
        <div style={{ display:'flex', gap: 10, overflowX:'auto', padding: '0 22px 4px' }}>
          {[
            { name:'BRAC Bank', sub:'····3218', v:98420, bg: T.ink, fg: T.ivory },
            { name:'bKash', sub:'017·····210', v:12330, bg: T.jade, fg: T.ivory },
            { name:'Cash', sub:'Pocket', v:8200, bg: T.sand, fg: T.ink },
            { name:'Nagad', sub:'017·····210', v:4580, bg: T.inkSoft, fg: T.ivory },
          ].map((a,i) => (
            <div key={i} style={{
              minWidth: 164, background: a.bg, color: a.fg, borderRadius: T.r.lg,
              padding: 16, boxSizing:'border-box',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              height: 110,
            }}>
              <div>
                <div style={{ fontFamily: FONT_UI, fontSize: 10, letterSpacing: 1.5, textTransform:'uppercase', opacity: 0.6 }}>{a.sub}</div>
                <div style={{ fontFamily: FONT_UI, fontSize: 13, fontWeight: 600, marginTop: 2 }}>{a.name}</div>
              </div>
              <Money value={a.v} size={18} color={a.fg} weight={500}/>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming bill + goal split */}
      <div style={{ padding: '24px 22px 0', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
        <button onClick={()=>onNav&&onNav('bills')} style={{ textAlign:'left', background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.md, padding: 14, cursor:'pointer', display:'flex', flexDirection:'column', gap: 8 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <Caption>NEXT BILL</Caption>
            <Chip tone="sand" size="xs">2 DAYS</Chip>
          </div>
          <div style={{ fontFamily: FONT_UI, fontSize: 15, fontWeight: 600, color: T.ink }}>Electricity (DPDC)</div>
          <Money value={1850} size={20}/>
        </button>
        <button onClick={()=>onNav&&onNav('goals')} style={{ textAlign:'left', background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.md, padding: 14, cursor:'pointer', display:'flex', flexDirection:'column', gap: 8 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <Caption>TOP GOAL</Caption>
            <span style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, color: T.jade }}>72%</span>
          </div>
          <div style={{ fontFamily: FONT_UI, fontSize: 15, fontWeight: 600, color: T.ink }}>Eid shopping</div>
          <div style={{ height: 4, background: T.lineSoft, borderRadius: 2 }}>
            <div style={{ width: '72%', height:'100%', background: T.jade, borderRadius: 2 }}/>
          </div>
        </button>
      </div>

      {/* Recent transactions */}
      <div style={{ padding: '28px 22px 0' }}>
        <SectionLabel right={<span style={{ color: T.jade, cursor:'pointer' }} onClick={()=>onNav&&onNav('transactions')}>SEE ALL</span>}>
          RECENT
        </SectionLabel>
        <Card pad={0}>
          {TX_DATA[0].items.concat(TX_DATA[1].items.slice(0,2)).map((t, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ display:'flex', alignItems:'center', gap: 12, padding: '14px 16px' }}>
                <CatDot cat={t.cat} size={38}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink }}>{t.t}</div>
                  <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{t.sub}</div>
                </div>
                <Money value={t.v} size={15} negative={t.v<0} positive={t.v>0}/>
              </div>
              {i<arr.length-1 && <div style={{ height: 1, background: T.lineSoft, margin: '0 16px' }}/>}
            </React.Fragment>
          ))}
        </Card>
      </div>
    </div>
  );
}

// ──────────────── TRANSACTIONS LIST ────────────────
function ScreenTransactions({ onNav }) {
  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', paddingBottom: 100 }}>
      <div style={{ padding: '20px 22px 16px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <Caption style={{ letterSpacing: 2 }}>APRIL 2026</Caption>
          <H2 style={{ marginTop: 2 }}>Activity</H2>
        </div>
        <div style={{ display:'flex', gap: 8 }}>
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: T.ivory, border: `1px solid ${T.line}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
            {Icon.search(18, T.ink)}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ padding: '0 22px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10, background: T.ivory, border:`1px solid ${T.line}`, borderRadius: T.r.pill, padding: '10px 16px' }}>
          {Icon.search(16, T.mute)}
          <input placeholder="Search by merchant, category, amount…" style={{ flex:1, background:'none', border:'none', outline:'none', fontFamily: FONT_UI, fontSize: 13, color: T.ink }}/>
        </div>
      </div>

      {/* Filter chips */}
      <div style={{ display:'flex', gap: 8, overflowX:'auto', padding: '14px 22px 4px' }}>
        {[
          { l:'All', active: true },
          { l:'Income', active: false },
          { l:'Expense', active: false },
          { l:'Grocery', active: false },
          { l:'Transport', active: false },
          { l:'bKash', active: false },
        ].map((c,i) => (
          <div key={i} style={{
            padding: '7px 14px', borderRadius: T.r.pill,
            background: c.active ? T.ink : 'transparent',
            color: c.active ? T.ivory : T.ink,
            border: `1px solid ${c.active ? T.ink : T.line}`,
            fontFamily: FONT_UI, fontSize: 12, fontWeight: 600,
            whiteSpace:'nowrap', cursor:'pointer',
          }}>{c.l}</div>
        ))}
      </div>

      {/* Summary strip */}
      <div style={{ padding: '16px 22px 4px', display:'flex', gap: 10 }}>
        <div style={{ flex: 1, background: T.jadeTint, border: `1px solid #CFDCD5`, borderRadius: T.r.md, padding: '10px 12px' }}>
          <Caption style={{ color: T.jadeDeep }}>INCOME</Caption>
          <Money value={117400} size={16} color={T.jadeDeep}/>
        </div>
        <div style={{ flex: 1, background: T.roseSoft, border: `1px solid #E4B9AF`, borderRadius: T.r.md, padding: '10px 12px' }}>
          <Caption style={{ color: '#7A2B1F' }}>EXPENSE</Caption>
          <Money value={42180} size={16} color="#7A2B1F"/>
        </div>
        <div style={{ flex: 1, background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.md, padding: '10px 12px' }}>
          <Caption>NET</Caption>
          <Money value={75220} size={16} positive/>
        </div>
      </div>

      {/* Grouped list */}
      <div style={{ padding: '16px 22px 0' }}>
        {TX_DATA.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 18 }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', padding: '0 4px 8px' }}>
              <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, letterSpacing: 1.2, textTransform:'uppercase', color: T.mute }}>
                {group.day}
              </div>
              <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 500, color: T.mute, fontVariantNumeric:'tabular-nums' }}>
                {(() => {
                  const total = group.items.reduce((s, x) => s + x.v, 0);
                  return <span style={{ color: total >= 0 ? T.jade : T.ink }}>{total>=0?'+':''}৳{Math.abs(total).toLocaleString()}</span>;
                })()}
              </div>
            </div>
            <Card pad={0}>
              {group.items.map((t, i, arr) => (
                <React.Fragment key={i}>
                  <div style={{ display:'flex', alignItems:'center', gap: 12, padding: '14px 16px' }}>
                    <CatDot cat={t.cat} size={38}/>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 600, color: T.ink }}>{t.t}</div>
                      <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute }}>{t.sub} · {t.time}</div>
                    </div>
                    <Money value={t.v} size={15} negative={t.v<0} positive={t.v>0}/>
                  </div>
                  {i<arr.length-1 && <div style={{ height: 1, background: T.lineSoft, margin: '0 16px' }}/>}
                </React.Fragment>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────── ADD TRANSACTION ────────────────
function ScreenAddTx({ onNav }) {
  const [type, setType] = React.useState('expense');
  const [amount, setAmount] = React.useState('1850');
  const [cat, setCat] = React.useState('dining');
  const [acct, setAcct] = React.useState('bank');

  const tone = type==='income' ? T.jade : type==='expense' ? T.ink : T.sky;
  const categories = ['dining','grocery','transport','rent','recharge','internet','medicine','family','emi','savings'];

  return (
    <div style={{ height:'100%', background: T.paper, display:'flex', flexDirection:'column' }}>
      <div style={{ padding: '16px 22px 8px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <button onClick={()=>onNav&&onNav('home')} style={{ width: 36, height: 36, borderRadius:'50%', background: T.ivory, border: `1px solid ${T.line}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
          {Icon.close(16, T.ink)}
        </button>
        <H3>New Transaction</H3>
        <button style={{ width: 36, height: 36, borderRadius:'50%', background:'transparent', border:'none', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
          {Icon.more(18, T.ink)}
        </button>
      </div>

      {/* Type segmented */}
      <div style={{ padding: '8px 22px 16px' }}>
        <div style={{ display:'flex', background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.pill, padding: 4 }}>
          {[
            { id:'expense', l:'Expense' },
            { id:'income', l:'Income' },
            { id:'transfer', l:'Transfer' },
          ].map(o => (
            <button key={o.id} onClick={()=>setType(o.id)} style={{
              flex: 1, padding: '8px 0', border:'none',
              background: type===o.id ? tone : 'transparent',
              color: type===o.id ? T.ivory : T.mute,
              borderRadius: T.r.pill, fontFamily: FONT_UI, fontSize: 13, fontWeight: 600,
              cursor:'pointer', transition: 'all 0.15s',
            }}>{o.l}</button>
          ))}
        </div>
      </div>

      {/* Amount display */}
      <div style={{ padding: '24px 22px 20px', textAlign:'center' }}>
        <Caption style={{ marginBottom: 4 }}>AMOUNT</Caption>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'center', gap: 6 }}>
          <span style={{ fontFamily: FONT_UI, fontSize: 26, fontWeight: 400, color: T.mute }}>৳</span>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 56, fontWeight: 500, color: T.ink, letterSpacing: -1, lineHeight: 1, fontVariantNumeric:'tabular-nums' }}>
            {Number(amount||0).toLocaleString('en-IN')}
          </span>
        </div>
        <div style={{ marginTop: 8, fontFamily: FONT_UI, fontSize: 12, color: T.mute }}>
          {type==='expense' ? 'Spending from' : type==='income' ? 'Receiving in' : 'Transferring from'} <span style={{ color: T.ink, fontWeight: 600 }}>{acct==='bank'?'BRAC Bank':acct==='bkash'?'bKash':acct==='cash'?'Cash':'Nagad'}</span>
        </div>
      </div>

      {/* Details list */}
      <div style={{ padding: '0 22px', display:'flex', flexDirection:'column', gap: 8 }}>
        <div style={{ background: T.ivory, border: `1px solid ${T.line}`, borderRadius: T.r.md, padding: 4 }}>
          {[
            { lbl:'Category', val: CAT[cat]?.name || '—', icon: <CatDot cat={cat} size={28}/> },
            { lbl:'Account', val: acct==='bank'?'BRAC Bank ··3218':'bKash 017·210', icon: <div style={{ width: 28, height: 28, borderRadius: 6, background: T.ink, color: T.ivory, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_DISPLAY, fontSize: 13, fontWeight: 600 }}>{acct==='bank'?'B':'b'}</div> },
            { lbl:'Date', val: 'Tue, 21 Apr · 1:42 PM', icon: <div style={{ width: 28, height: 28, borderRadius: 6, background: T.ivoryDeep, color: T.ink, display:'flex', alignItems:'center', justifyContent:'center' }}>{Icon.calendar(14, T.ink)}</div> },
            { lbl:'Note', val: 'Lunch with Sadia', icon: <div style={{ width: 28, height: 28, borderRadius: 6, background: T.ivoryDeep, color: T.ink, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_DISPLAY, fontSize: 14, fontWeight: 600 }}>✎</div> },
          ].map((r,i,arr) => (
            <React.Fragment key={i}>
              <div style={{ display:'flex', alignItems:'center', gap: 12, padding: '10px 12px' }}>
                {r.icon}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, letterSpacing: 1.2, textTransform:'uppercase', color: T.mute }}>{r.lbl}</div>
                  <div style={{ fontFamily: FONT_UI, fontSize: 14, fontWeight: 500, color: T.ink }}>{r.val}</div>
                </div>
                {Icon.arrowRight(16, T.muteSoft)}
              </div>
              {i<arr.length-1 && <div style={{ height: 1, background: T.lineSoft, margin: '0 12px' }}/>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Quick categories */}
      <div style={{ padding: '16px 22px 10px' }}>
        <Caption style={{ marginBottom: 10 }}>QUICK CATEGORIES</Caption>
        <div style={{ display:'flex', gap: 8, overflowX:'auto', margin: '0 -22px', padding: '0 22px' }}>
          {categories.slice(0,7).map(c => (
            <button key={c} onClick={()=>setCat(c)} style={{
              display:'flex', flexDirection:'column', alignItems:'center', gap: 4,
              padding: '8px 4px', minWidth: 62,
              background:'transparent', border:'none', cursor:'pointer',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: CAT[c].bg, color: CAT[c].fg,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 600,
                border: cat===c ? `2px solid ${T.ink}` : '2px solid transparent',
                boxShadow: cat===c ? `0 0 0 2px ${T.paper}, 0 0 0 3px ${T.ink}` : 'none',
              }}>{CAT[c].label}</div>
              <span style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, color: T.ink }}>{CAT[c].name}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}/>

      {/* Keypad */}
      <div style={{ padding: '8px 16px 16px', background: T.ivoryDeep }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 8 }}>
          {['1','2','3','+','4','5','6','−','7','8','9','=','.','0','⌫','✓'].map((k,i) => {
            const isOp = ['+','−','=','✓'].includes(k);
            const isCheck = k==='✓';
            return (
              <button key={i} onClick={()=>{
                if (isCheck) onNav && onNav('home');
                else if (k==='⌫') setAmount(a=>a.slice(0,-1));
                else if (!isOp) setAmount(a=> (a+k).slice(0,9));
              }} style={{
                height: 48, borderRadius: 12,
                background: isCheck ? T.ink : isOp ? 'transparent' : T.paper,
                color: isCheck ? T.ivory : T.ink,
                border: isOp && !isCheck ? 'none' : `1px solid ${isCheck ? T.ink : T.line}`,
                fontFamily: isCheck ? FONT_UI : FONT_DISPLAY,
                fontSize: isCheck ? 18 : 22, fontWeight: isCheck ? 600 : 500,
                cursor: 'pointer',
              }}>{k}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenHome, ScreenTransactions, ScreenAddTx, TX_DATA });
