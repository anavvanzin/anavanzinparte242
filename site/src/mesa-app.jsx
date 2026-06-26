/* ===== anavanzin · mesa — app ===== */
const { useState, useEffect, useRef, useCallback } = React;
const { IconArt, L, MENUBAR, ZONES, CONTENT } = window.MESA;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useClock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    f(); const id = setInterval(f, 10000); return () => clearInterval(id);
  }, []);
  return t;
}

/* ---------- icon ---------- */
function DeskIcon({ id, lang, selected, onSelect, onOpen, mobile }) {
  const c = CONTENT[id];
  const tileCls = 'tile ' + (c.kind === 'app' ? 'app' : 'page');
  return (
    <button
      className={'icon' + (selected ? ' active' : '')}
      onClick={() => mobile ? onOpen(id) : onSelect(id)}
      onDoubleClick={() => onOpen(id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(id); } }}
      aria-label={L(c.file, lang) + c.ext}
    >
      <span className={tileCls}>
        {c.img ? <img className={c.pix ? 'pix' : ''} src={c.img} alt="" /> : <IconArt art={c.art} />}
      </span>
      <span className="nm">{L(c.file, lang)}<span className="ext">{c.ext}</span></span>
    </button>
  );
}

/* ---------- window content ---------- */
function WinContent({ id, lang, onOpenPath }) {
  const c = CONTENT[id];
  return (
    <div className="w-body">
      {c.kind === 'page' && <div className="w-path">{c.path}</div>}
      <div className="w-kicker">{L(c.kicker, lang)}</div>
      <h2 className="w-title">{L(c.title, lang)}</h2>
      <p className="w-lede">{L(c.lede, lang)}</p>
      {c.viewer && (
        <figure className="w-img" style={{ margin: '16px 0 0' }}>
          <span className="ins"></span>
          <img className={c.pixView ? 'pix' : ''} src={c.viewer} alt={L(c.title, lang)} />
          <figcaption>{L(c.caption, lang)}</figcaption>
        </figure>
      )}
      {c.body && <p>{L(c.body, lang)}</p>}
      {c.list && (
        <ul className="w-list">
          {c.list.map((e, i) => (
            <li key={i}><span className="t">{L(e.t, lang)}</span><span className="y">{e.y}</span></li>
          ))}
        </ul>
      )}
      {c.contact && (
        <div className="w-contact" style={{ marginTop: 18, fontSize: 16, lineHeight: 2.1 }}>
          <div><a href="mailto:ana@anavanzin.com">ana@anavanzin.com</a></div>
          <div>Lattes · ORCID · Florianópolis, BR</div>
        </div>
      )}
      {c.note && <div className="w-note">{L(c.note, lang)}</div>}
      {c.kind === 'page' && (
        <button className="w-open" onClick={() => onOpenPath(c.path)}>
          {lang === 'en' ? 'open' : 'abrir'} {c.path} <span aria-hidden="true">→</span>
        </button>
      )}
    </div>
  );
}

/* ---------- window ---------- */
function Win({ w, lang, mobile, onClose, onMin, onFocus, onDrag, onOpenPath, onIntroEnd }) {
  const c = CONTENT[w.id];
  const barRef = useRef(null);
  const onDown = (e) => {
    if (mobile) return;
    if (e.target.closest('.win-btn')) return;
    onFocus(w.id);
    const sx = e.clientX, sy = e.clientY, ox = w.x, oy = w.y;
    const move = (ev) => onDrag(w.id, ox + (ev.clientX - sx), oy + (ev.clientY - sy));
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
  };
  const style = mobile ? { zIndex: w.z } : { left: w.x, top: w.y, width: c.w, height: c.h, zIndex: w.z };
  return (
    <div className={'win' + (w.intro && !reduceMotion ? ' intro' : '')} style={style}
      onAnimationEnd={() => { if (w.intro) onIntroEnd(w.id); }}
      onPointerDown={() => onFocus(w.id)} role="dialog" aria-label={L(c.title, lang)}>
      <div className="win-bar" ref={barRef} onPointerDown={onDown}>
        <div className="win-btns">
          <button className="win-btn" title={lang === 'en' ? 'close' : 'fechar'} onClick={(e) => { e.stopPropagation(); onClose(w.id); }}></button>
        </div>
        <div className="win-title">
          {c.img ? <img className={'ti' + (c.pix ? ' pix' : '')} src={c.img} alt="" /> : null}
          {L(c.file, lang)}{c.ext}
        </div>
        <div className="win-btns">
          <button className="win-btn" title={lang === 'en' ? 'minimize' : 'minimizar'} onClick={(e) => { e.stopPropagation(); onMin(w.id); }}></button>
        </div>
      </div>
      <WinContent id={w.id} lang={lang} onOpenPath={onOpenPath} />
    </div>
  );
}

/* ---------- boot ---------- */
function Boot({ lang, onDone }) {
  const [out, setOut] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOut(true), 1700);
    const t2 = setTimeout(onDone, 2200);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);
  return (
    <div className={'boot' + (out ? ' out' : '')} onClick={() => { setOut(true); setTimeout(onDone, 350); }}>
      <img className="emblem" src={RZ('assets/martirios.png')} alt="" />
      <div className="bsub">{lang === 'en' ? 'iconocracy · desk' : 'iconocracia · mesa'}</div>
      <div className="bbar"><i></i></div>
      <button className="benter" onClick={() => { setOut(true); setTimeout(onDone, 350); }}>{lang === 'en' ? 'enter' : 'entrar'}</button>
    </div>
  );
}

/* ---------- app ---------- */
function App() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('av_mesa_lang') || 'pt'; } catch (_) { return 'pt'; } });
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width:767px)').matches);
  const [booted, setBooted] = useState(() => {
    try { if (sessionStorage.getItem('av_mesa_booted')) return true; } catch (_) {}
    return reduceMotion;
  });
  const [sel, setSel] = useState(null);
  const [wins, setWins] = useState([]);
  const zc = useRef(20);
  const clock = useClock();

  useEffect(() => { try { localStorage.setItem('av_mesa_lang', lang); } catch (_) {} }, [lang]);
  useEffect(() => {
    const mq = window.matchMedia('(max-width:767px)');
    const h = () => setMobile(mq.matches);
    mq.addEventListener('change', h); return () => mq.removeEventListener('change', h);
  }, []);
  const finishBoot = useCallback(() => { setBooted(true); try { sessionStorage.setItem('av_mesa_booted', '1'); } catch (_) {} }, []);

  const focus = useCallback((id) => {
    zc.current += 1; const z = zc.current;
    setWins((ws) => ws.map((w) => w.id === id ? { ...w, z, min: false } : w));
  }, []);

  const open = useCallback((id) => {
    setSel(id);
    setWins((ws) => {
      const ex = ws.find((w) => w.id === id);
      zc.current += 1;
      if (ex) return ws.map((w) => w.id === id ? { ...w, z: zc.current, min: false } : w);
      const n = ws.length;
      const c = CONTENT[id];
      const baseX = Math.max(40, (window.innerWidth - (c.w || 480)) / 2 - 120);
      const baseY = 70;
      return [...ws, { id, x: baseX + n * 30, y: baseY + n * 26, z: zc.current, min: false, intro: true }];
    });
  }, []);

  const close = useCallback((id) => setWins((ws) => ws.filter((w) => w.id !== id)), []);
  const minimize = useCallback((id) => setWins((ws) => ws.map((w) => w.id === id ? { ...w, min: true } : w)), []);
  const drag = useCallback((id, x, y) => setWins((ws) => ws.map((w) => w.id === id ? { ...w, x, y } : w)), []);
  const clearIntro = useCallback((id) => setWins((ws) => ws.map((w) => w.id === id ? { ...w, intro: false } : w)), []);
  const openPath = useCallback((p) => { /* prototype: destinos reais no deploy */ }, []);

  const visibleWins = wins.filter((w) => !w.min);

  return (
    <div className="desk-root">
      {!booted && <Boot lang={lang} onDone={finishBoot} />}

      <div className="menubar">
        <div className="logo"><img src={RZ('assets/sun-seal.svg')} alt="" /><b>ana vanzin</b></div>
        {MENUBAR.map((m) => (
          <button key={m.id} className="mitem" onClick={() => open(m.id)}>{L(m, lang)}</button>
        ))}
        <span className="spacer"></span>
        <div className="lang" role="group" aria-label="idioma">
          <button className={lang === 'pt' ? 'on' : ''} onClick={() => setLang('pt')}>PT</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <span className="clock">{clock}</span>
      </div>

      <div className="desk-surface">
        <div className="zones">
          {ZONES.map((zone) => (
            <section className={'zone ' + zone.cls} key={zone.id} aria-label={L(zone.label, lang)}>
              <h2 className="zone-label">{L(zone.label, lang)}</h2>
              <div className="icon-grid">
                {zone.items.map((id) => (
                  <DeskIcon key={id} id={id} lang={lang} selected={sel === id} mobile={mobile}
                    onSelect={setSel} onOpen={open} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {visibleWins.map((w) => (
          <Win key={w.id} w={w} lang={lang} mobile={mobile}
            onClose={close} onMin={minimize} onFocus={focus} onDrag={drag} onOpenPath={openPath} onIntroEnd={clearIntro} />
        ))}
      </div>

      <div className="dock">
        {wins.length === 0 && <span className="empty">{lang === 'en' ? 'double-click an icon to open a window' : 'duplo-clique num ícone para abrir uma janela'}</span>}
        {wins.map((w) => {
          const c = CONTENT[w.id];
          const top = wins.reduce((a, b) => b.z > a.z ? b : a, wins[0]);
          const focused = !w.min && top.id === w.id;
          return (
            <button key={w.id} className={'dock-item' + (w.min ? ' min' : '') + (focused ? ' focused' : '')}
              onClick={() => w.min ? focus(w.id) : (focused ? minimize(w.id) : focus(w.id))}>
              <span className="di">{c.img ? <img className={c.pix ? 'pix' : ''} src={c.img} alt="" /> : <IconArt art={c.art} />}</span>
              <span>{L(c.file, lang)}{c.ext}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
