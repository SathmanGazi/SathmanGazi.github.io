// Lance Wallet — Screens part 1: Splash, Onboarding, Auth

// ──────────────── SPLASH ────────────────
function ScreenSplash() {
  return (
    <div style={{
      height:'100%', background: T.ink, color: T.ivory,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between',
      padding: '120px 32px 48px', position:'relative', overflow:'hidden',
    }}>
      {/* subtle diagonal texture */}
      <div style={{
        position:'absolute', inset: 0,
        background: `repeating-linear-gradient(135deg, transparent 0 40px, rgba(246,242,234,0.015) 40px 41px)`,
        pointerEvents:'none',
      }}/>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 36, zIndex: 1 }}>
        <LanceMark size={56} color={T.ivory} />
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 8 }}>
          <LanceWordmark size={22} color={T.ivory} />
          <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 500,
            letterSpacing: 4, textTransform:'uppercase', color: 'rgba(246,242,234,0.5)' }}>
            Wallet
          </div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 16, zIndex: 1 }}>
        <div style={{ width: 32, height: 1, background: 'rgba(246,242,234,0.25)' }}/>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 15, fontStyle:'italic',
          color: 'rgba(246,242,234,0.55)', letterSpacing: 0.3 }}>
          Clarity for every taka.
        </div>
        <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 500,
          letterSpacing: 2, textTransform:'uppercase', color: 'rgba(246,242,234,0.3)', marginTop: 24 }}>
          Made in Bangladesh · v1.0
        </div>
      </div>
    </div>
  );
}

// ──────────────── ONBOARDING ────────────────
function OnboardIllustration({ variant }) {
  // Editorial, geometric — never childish.
  if (variant === 'clarity') {
    return (
      <div style={{ position:'relative', width: 240, height: 240 }}>
        <div style={{ position:'absolute', inset: 0, border:`1px solid ${T.line}`, borderRadius: 24 }}/>
        <div style={{ position:'absolute', top: 20, left: 20, right: 20, display:'flex', flexDirection:'column', gap: 10 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
            <Caption>BALANCE</Caption>
            <Money value={84320} size={20}/>
          </div>
          <div style={{ height: 1, background: T.lineSoft }}/>
          {[
            { l:'Grocery', v: 4200, w: 0.7 },
            { l:'Rent', v: 18000, w: 1.0 },
            { l:'Transport', v: 2100, w: 0.35 },
            { l:'Dining', v: 1650, w: 0.28 },
          ].map(r => (
            <div key={r.l}>
              <div style={{ display:'flex', justifyContent:'space-between', fontFamily: FONT_UI, fontSize: 11, marginBottom: 4 }}>
                <span style={{ color: T.mute }}>{r.l}</span>
                <span style={{ color: T.ink, fontWeight:500, fontVariantNumeric:'tabular-nums' }}>৳{r.v.toLocaleString()}</span>
              </div>
              <div style={{ height: 3, background: T.lineSoft, borderRadius: 2 }}>
                <div style={{ width: `${r.w*100}%`, height:'100%', background: T.jade, borderRadius: 2 }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === 'wallets') {
    return (
      <div style={{ position:'relative', width: 240, height: 240 }}>
        {[
          { bg: T.ink, fg: T.ivory, t: 'Bank', a: 42500, rot: -6, top: 20, left: 30 },
          { bg: T.sand, fg: T.ink, t: 'Cash', a: 8200, rot: 2, top: 70, left: 50 },
          { bg: T.jade, fg: T.ivory, t: 'bKash', a: 12300, rot: 8, top: 120, left: 30 },
        ].map((c, i) => (
          <div key={i} style={{
            position:'absolute', top: c.top, left: c.left, width: 180, height: 100,
            background: c.bg, color: c.fg, borderRadius: 14,
            transform: `rotate(${c.rot}deg)`, padding: 16, boxSizing:'border-box',
            boxShadow: '0 8px 20px -8px rgba(14,20,17,0.3)',
            display:'flex', flexDirection:'column', justifyContent:'space-between',
          }}>
            <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, letterSpacing: 2, opacity: 0.7, textTransform:'uppercase' }}>
              {c.t}
            </div>
            <Money value={c.a} size={18} color={c.fg}/>
          </div>
        ))}
      </div>
    );
  }
  // reminders
  return (
    <div style={{ position:'relative', width: 240, height: 240 }}>
      {[
        { t:'Electricity', d:'Due in 3 days', v:1850, tone: T.jade, top: 10 },
        { t:'Internet', d:'Due tomorrow', v:1200, tone: T.sand, top: 90 },
        { t:'Rent', d:'Due in 9 days', v:18000, tone: T.ink, top: 170 },
      ].map((r,i) => (
        <div key={i} style={{
          position:'absolute', top: r.top, left: 10, right: 10,
          background: T.paper, border: `1px solid ${T.line}`, borderRadius: 14,
          padding: '12px 14px', display:'flex', alignItems:'center', gap: 12,
          boxShadow: '0 4px 12px -6px rgba(14,20,17,0.1)',
        }}>
          <div style={{ width: 4, height: 36, background: r.tone, borderRadius: 2 }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_UI, fontSize: 13, fontWeight: 600, color: T.ink }}>{r.t}</div>
            <div style={{ fontFamily: FONT_UI, fontSize: 11, color: T.mute }}>{r.d}</div>
          </div>
          <Money value={r.v} size={14}/>
        </div>
      ))}
    </div>
  );
}

function ScreenOnboarding({ step=0, onNav }) {
  const steps = [
    { variant:'clarity', eyebrow:'CLARITY', title:'Every taka,\naccounted for.',
      body:'See where your money goes each month — in plain numbers, no jargon. Built for how Bangladeshi families actually spend.' },
    { variant:'wallets', eyebrow:'ONE VIEW', title:'Cash, bank,\nmobile — together.',
      body:'Track balances across bKash, Nagad, Rocket, your bank account and pocket cash. Lance brings them all into a single, quiet place.' },
    { variant:'reminders', eyebrow:'PEACE OF MIND', title:'Never miss\na bill again.',
      body:'Gentle reminders for rent, electricity, internet and recharges. Pay on time, stress less.' },
  ];
  const s = steps[step];
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', padding: '20px 24px 32px', background: T.paper }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <LanceMark size={22}/>
        <button onClick={()=>onNav&&onNav('auth-login')} style={{ background:'none', border:'none', fontFamily: FONT_UI, fontSize: 13, color: T.mute, cursor:'pointer', fontWeight:500 }}>
          Skip
        </button>
      </div>
      <div style={{ flex: 1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap: 36, paddingTop: 24 }}>
        <OnboardIllustration variant={s.variant}/>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap: 20 }}>
        <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, color: T.jade }}>
          0{step+1} / 03 · {s.eyebrow}
        </div>
        <H1 style={{ whiteSpace:'pre-line' }}>{s.title}</H1>
        <Body muted style={{ fontSize: 15 }}>{s.body}</Body>
        <div style={{ display:'flex', alignItems:'center', gap: 12, marginTop: 8 }}>
          <div style={{ display:'flex', gap: 6, flex: 1 }}>
            {steps.map((_, i) => (
              <div key={i} style={{
                height: 3, flex: i===step ? 3 : 1,
                background: i<=step ? T.ink : T.line, borderRadius: 2,
                transition: 'all 0.3s',
              }}/>
            ))}
          </div>
          <Btn variant="primary" onClick={()=>onNav && onNav(step<2?`onboarding-${step+1}`:'auth-login')}
            icon={Icon.arrowRight(16, T.ivory)}>
            {step<2 ? 'Continue' : 'Get Started'}
          </Btn>
        </div>
      </div>
    </div>
  );
}

// ──────────────── AUTH ────────────────
function ScreenLogin({ onNav }) {
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', padding: '24px 24px 28px', background: T.paper }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap: 8, marginBottom: 36 }}>
        <LanceMark size={28}/>
      </div>
      <H1 style={{ marginBottom: 10 }}>Welcome back.</H1>
      <Body muted style={{ marginBottom: 28 }}>Sign in to continue managing your money with Lance.</Body>

      <div style={{ display:'flex', flexDirection:'column', gap: 18 }}>
        <Input label="Phone number" prefix="🇧🇩 +880" placeholder="1X XXXX XXXX" value="1755 034 210"/>
        <Input label="Password" type="password" value="••••••••••" suffix={Icon.eye(18, T.mute)}/>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <label style={{ display:'flex', alignItems:'center', gap: 8, fontFamily: FONT_UI, fontSize: 13, color: T.ink, cursor:'pointer' }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: T.ink, display:'flex', alignItems:'center', justifyContent:'center' }}>
              {Icon.check(12, T.ivory)}
            </div>
            Remember me
          </label>
          <button onClick={()=>onNav&&onNav('auth-forgot')} style={{ background:'none', border:'none', fontFamily: FONT_UI, fontSize: 13, fontWeight: 600, color: T.jade, cursor:'pointer' }}>
            Forgot password?
          </button>
        </div>
      </div>

      <div style={{ flex: 1 }}/>

      <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
        <Btn full size="lg" variant="primary" onClick={()=>onNav&&onNav('home')}>Sign in</Btn>
        <div style={{ display:'flex', alignItems:'center', gap: 10, margin: '4px 0' }}>
          <div style={{ flex:1, height: 1, background: T.line }}/>
          <Caption>or</Caption>
          <div style={{ flex:1, height: 1, background: T.line }}/>
        </div>
        <Btn full size="lg" variant="ghost" icon={
          <div style={{ width: 18, height: 18, borderRadius: 4, background: T.ink, color: T.ivory, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: FONT_DISPLAY, fontSize: 12, fontWeight:600 }}>G</div>
        }>Continue with Google</Btn>
        <div style={{ textAlign:'center', fontFamily: FONT_UI, fontSize: 13, color: T.mute, marginTop: 6 }}>
          New to Lance?{' '}
          <button onClick={()=>onNav&&onNav('auth-signup')} style={{ background:'none', border:'none', fontWeight: 600, color: T.ink, cursor:'pointer', fontFamily:FONT_UI, fontSize: 13 }}>
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}

function ScreenSignup({ onNav }) {
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', padding: '20px 24px 28px', background: T.paper }}>
      <button onClick={()=>onNav&&onNav('auth-login')} style={{ background:'none', border:'none', padding: 0, display:'flex', alignItems:'center', gap: 8, fontFamily: FONT_UI, fontSize: 13, color: T.mute, cursor:'pointer', marginBottom: 24 }}>
        {Icon.arrowLeft(16, T.mute)} Back
      </button>
      <H1 style={{ marginBottom: 10 }}>Create account.</H1>
      <Body muted style={{ marginBottom: 24 }}>One step. We'll verify your phone next.</Body>

      <div style={{ display:'flex', flexDirection:'column', gap: 16 }}>
        <Input label="Full name" placeholder="As on your NID" value="Ayesha Rahman"/>
        <Input label="Phone number" prefix="🇧🇩 +880" placeholder="1X XXXX XXXX"/>
        <Input label="Create password" type="password" placeholder="At least 8 characters" suffix={Icon.eyeOff(18, T.mute)}/>
      </div>

      <div style={{ background: T.jadeTint, border:`1px solid #CFDCD5`, borderRadius: T.r.md, padding: 14, marginTop: 18, display:'flex', gap: 10 }}>
        {Icon.lock(16, T.jadeDeep)}
        <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.jadeDeep, lineHeight: 1.5 }}>
          Your data stays private. Lance never shares your transactions with third parties.
        </div>
      </div>

      <div style={{ flex: 1 }}/>

      <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, lineHeight: 1.5, marginBottom: 14, textAlign:'center' }}>
        By continuing you accept our <span style={{ color: T.ink, fontWeight: 500 }}>Terms</span> and <span style={{ color: T.ink, fontWeight: 500 }}>Privacy Policy</span>.
      </div>
      <Btn full size="lg" variant="primary" onClick={()=>onNav&&onNav('auth-otp')}>Send verification code</Btn>
    </div>
  );
}

function ScreenOTP({ onNav }) {
  const digits = ['4','2','8','1',' ',' '];
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', padding: '20px 24px 28px', background: T.paper }}>
      <button onClick={()=>onNav&&onNav('auth-signup')} style={{ background:'none', border:'none', padding: 0, display:'flex', alignItems:'center', gap: 8, fontFamily: FONT_UI, fontSize: 13, color: T.mute, cursor:'pointer', marginBottom: 24 }}>
        {Icon.arrowLeft(16, T.mute)} Back
      </button>
      <H1 style={{ marginBottom: 10 }}>Enter the code.</H1>
      <Body muted>We sent a 6-digit code to <span style={{ color: T.ink, fontWeight: 500 }}>+880 1755 034 210</span>.</Body>

      <div style={{ display:'flex', gap: 10, marginTop: 36, justifyContent:'center' }}>
        {digits.map((d, i) => (
          <div key={i} style={{
            width: 44, height: 56, borderRadius: 12,
            background: d.trim() ? T.ivory : T.paper,
            border: `1.5px solid ${i===4 ? T.ink : T.line}`,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 500, color: T.ink,
          }}>
            {d.trim() || (i===4 ? <div style={{ width: 2, height: 24, background: T.ink, animation:'blink 1s infinite' }}/> : '')}
          </div>
        ))}
      </div>
      <div style={{ textAlign:'center', marginTop: 24, fontFamily: FONT_UI, fontSize: 13, color: T.mute }}>
        Didn't get it? <span style={{ color: T.jade, fontWeight: 600 }}>Resend in 0:24</span>
      </div>

      <div style={{ flex: 1 }}/>

      {/* Fake number pad */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 8, marginBottom: 12 }}>
        {['1','2','3','4','5','6','7','8','9','','0','⌫'].map((k,i) => (
          <button key={i} style={{
            height: 48, borderRadius: 12, background: k===''?'transparent':T.ivory,
            border: k===''?'none': `1px solid ${T.line}`,
            fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 500, color: T.ink, cursor:'pointer',
          }}>{k}</button>
        ))}
      </div>
      <Btn full size="lg" variant="primary" onClick={()=>onNav&&onNav('home')}>Verify & continue</Btn>
    </div>
  );
}

function ScreenForgot({ onNav }) {
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', padding: '20px 24px 28px', background: T.paper }}>
      <button onClick={()=>onNav&&onNav('auth-login')} style={{ background:'none', border:'none', padding: 0, display:'flex', alignItems:'center', gap: 8, fontFamily: FONT_UI, fontSize: 13, color: T.mute, cursor:'pointer', marginBottom: 24 }}>
        {Icon.arrowLeft(16, T.mute)} Back
      </button>
      <H1 style={{ marginBottom: 10 }}>Reset password.</H1>
      <Body muted style={{ marginBottom: 28 }}>Enter the phone number linked to your Lance account. We'll send a code to reset.</Body>

      <Input label="Phone number" prefix="🇧🇩 +880" placeholder="1X XXXX XXXX"/>

      <div style={{ marginTop: 24, padding: 16, background: T.ivory, border:`1px solid ${T.line}`, borderRadius: T.r.md }}>
        <div style={{ fontFamily: FONT_UI, fontSize: 13, fontWeight: 600, color: T.ink, marginBottom: 6 }}>
          Can't access your phone?
        </div>
        <div style={{ fontFamily: FONT_UI, fontSize: 13, color: T.mute, lineHeight: 1.5 }}>
          Email <span style={{ color: T.jade, fontWeight: 600 }}>help@lancewallet.bd</span> from your registered address.
        </div>
      </div>

      <div style={{ flex: 1 }}/>
      <Btn full size="lg" variant="primary" onClick={()=>onNav&&onNav('auth-otp')}>Send reset code</Btn>
    </div>
  );
}

Object.assign(window, {
  ScreenSplash, ScreenOnboarding, ScreenLogin, ScreenSignup, ScreenOTP, ScreenForgot,
});
