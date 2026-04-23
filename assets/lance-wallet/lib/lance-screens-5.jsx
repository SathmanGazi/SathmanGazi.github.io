// Lance Wallet — Design System overview screen

function ScreenDesignSystem() {
  return (
    <div style={{ height:'100%', background: T.paper, overflow:'auto', padding: '20px 22px 40px' }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 4 }}>
        <LanceMark size={22}/>
        <LanceWordmark size={14}/>
      </div>
      <H1 style={{ marginTop: 8 }}>Design System</H1>
      <Body muted style={{ marginTop: 6 }}>
        A quiet, editorial foundation for a premium finance product.
      </Body>

      {/* Colors */}
      <div style={{ marginTop: 28 }}>
        <SectionLabel>COLOR</SectionLabel>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 8 }}>
          {[
            { n:'Ink', h: T.ink },
            { n:'Ivory', h: T.ivory },
            { n:'Paper', h: T.paper },
            { n:'Line', h: T.line },
            { n:'Jade', h: T.jade },
            { n:'JadeDeep', h: T.jadeDeep },
            { n:'Sand', h: T.sand },
            { n:'Rose', h: T.rose },
          ].map(c => (
            <div key={c.n}>
              <div style={{ aspectRatio:'1/1', borderRadius: 10, background: c.h, border:`1px solid ${T.line}` }}/>
              <div style={{ fontFamily: FONT_UI, fontSize: 10, fontWeight: 600, marginTop: 4, color: T.ink }}>{c.n}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: T.mute }}>{c.h}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Type */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>TYPOGRAPHY</SectionLabel>
        <Card pad={18}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 500, color: T.ink, letterSpacing: -0.5, lineHeight: 1.05 }}>
            Clarity for every taka.
          </div>
          <div style={{ fontFamily: FONT_UI, fontSize: 10, color: T.mute, marginTop: 4 }}>Cormorant Garamond · Display 36/38</div>
          <div style={{ height: 1, background: T.lineSoft, margin: '14px 0' }}/>
          <div style={{ fontFamily: FONT_UI, fontSize: 16, fontWeight: 600, color: T.ink }}>Track, budget, save.</div>
          <div style={{ fontFamily: FONT_UI, fontSize: 10, color: T.mute, marginTop: 2 }}>Geist · UI 16/600</div>
          <div style={{ fontFamily: FONT_UI, fontSize: 14, color: T.ink, marginTop: 8, lineHeight: 1.5 }}>
            See where your money goes each month — in plain numbers, no jargon.
          </div>
          <div style={{ fontFamily: FONT_UI, fontSize: 10, color: T.mute, marginTop: 2 }}>Body 14/400</div>
          <div style={{ fontFamily: FONT_UI, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform:'uppercase', color: T.mute, marginTop: 8 }}>
            EYEBROW · CAPTION
          </div>
        </Card>
      </div>

      {/* Currency */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>CURRENCY</SectionLabel>
        <Card pad={18}>
          <div style={{ display:'flex', alignItems:'baseline', gap: 24, flexWrap:'wrap' }}>
            <Money value={148230} size={34}/>
            <Money value={4230} size={18} negative/>
            <Money value={85000} size={18} positive/>
          </div>
        </Card>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>BUTTONS</SectionLabel>
        <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
          <Btn variant="primary" size="lg" full>Primary · Sign in</Btn>
          <Btn variant="jade" size="md" full>Jade · Add to savings</Btn>
          <Btn variant="ghost" size="md" full>Ghost · Cancel</Btn>
          <div style={{ display:'flex', gap: 8 }}>
            <Btn variant="primary" size="sm">Small</Btn>
            <Btn variant="ghost" size="sm">Outline</Btn>
            <Btn variant="danger" size="sm">Danger</Btn>
          </div>
        </div>
      </div>

      {/* Chips */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>CHIPS / STATUS</SectionLabel>
        <div style={{ display:'flex', flexWrap:'wrap', gap: 6 }}>
          <Chip>Neutral</Chip>
          <Chip tone="jade">PAID</Chip>
          <Chip tone="sand">DUE SOON</Chip>
          <Chip tone="rose">OVERDUE</Chip>
          <Chip tone="sky">AUTO</Chip>
          <Chip tone="ink">PREMIUM</Chip>
          <Chip tone="ghost">GHOST</Chip>
        </div>
      </div>

      {/* Category marks */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>CATEGORY MARKS</SectionLabel>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 12 }}>
          {Object.keys(CAT).slice(0,10).map(k => (
            <div key={k} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 6 }}>
              <CatDot cat={k} size={40}/>
              <div style={{ fontFamily: FONT_UI, fontSize: 10, color: T.mute, textAlign:'center' }}>{CAT[k].name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>INPUTS</SectionLabel>
        <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
          <Input label="Amount" prefix="৳" placeholder="0"/>
          <Input label="Note" placeholder="Add a note"/>
        </div>
      </div>

      {/* Radii + spacing */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>RADII & SPACING</SectionLabel>
        <Card pad={16}>
          <div style={{ display:'flex', gap: 10, alignItems:'flex-end' }}>
            {[
              { n:'xs', v: T.r.xs, s: 24 },
              { n:'sm', v: T.r.sm, s: 32 },
              { n:'md', v: T.r.md, s: 40 },
              { n:'lg', v: T.r.lg, s: 48 },
              { n:'xl', v: T.r.xl, s: 56 },
            ].map(r => (
              <div key={r.n} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 6 }}>
                <div style={{ width: r.s, height: r.s, borderRadius: r.v, background: T.ink }}/>
                <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: T.mute }}>{r.n} · {r.v}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: T.lineSoft, margin: '16px 0' }}/>
          <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
            {[4,8,12,16,22,32].map(s => (
              <div key={s} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 4 }}>
                <div style={{ width: s, height: s, background: T.jade }}/>
                <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: T.mute }}>{s}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Principles */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel>PRINCIPLES</SectionLabel>
        <Card pad={18}>
          {[
            ['Quiet numbers','Display serif for money. Tabular, never shouty.'],
            ['Warm neutrals','Paper, ivory, graphite. Built to read in sunlight.'],
            ['One accent at a time','Jade for good, sand for warning, rose for stop.'],
            ['No gimmicks','No glass, no neon, no emoji — just craft.'],
          ].map(([t,d],i) => (
            <div key={i} style={{ padding: '10px 0', borderTop: i?`1px solid ${T.lineSoft}`:'none' }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 500, color: T.ink, fontStyle:'italic' }}>{t}</div>
              <div style={{ fontFamily: FONT_UI, fontSize: 12, color: T.mute, marginTop: 2 }}>{d}</div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenDesignSystem });
