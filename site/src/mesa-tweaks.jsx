/* ===== anavanzin · mesa — painel de Tweaks (atmosfera) ===== */
(function () {
  const { useEffect } = React;
  const KEY = 'av_mesa_feel';
  const DEF = { edicao: 'papel', acabamento: 'bit16', mesa: 'habitada', parede: 'iluminura' };

  function readFeel() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) return Object.assign({}, DEF, s); } catch (_) {}
    return Object.assign({}, DEF);
  }
  function apply(t) {
    const e = document.documentElement;
    e.dataset.edicao = t.edicao; e.dataset.acabamento = t.acabamento;
    e.dataset.mesa = t.mesa; e.dataset.parede = t.parede;
    try { localStorage.setItem(KEY, JSON.stringify({ edicao: t.edicao, acabamento: t.acabamento, mesa: t.mesa, parede: t.parede })); } catch (_) {}
  }

  function FeelTweaks() {
    const [t, setTweak] = useTweaks(readFeel());
    useEffect(() => { apply(t); }, [t.edicao, t.acabamento, t.mesa, t.parede]);
    return (
      <TweaksPanel title="Tweaks">
        <TweakSection label="Edição">
          <TweakRadio label="Mundo" value={t.edicao}
            options={[{ value: 'papel', label: 'Papel' }, { value: 'noturno', label: 'Noturno' }, { value: 'sanguinea', label: 'Sanguínea' }]}
            onChange={(v) => setTweak('edicao', v)} />
        </TweakSection>
        <TweakSection label="Acabamento">
          <TweakRadio label="Resolução" value={t.acabamento}
            options={[{ value: 'bit16', label: '16-bit' }, { value: 'hibrido', label: 'Híbrido' }, { value: 'litografia', label: 'Litografia' }]}
            onChange={(v) => setTweak('acabamento', v)} />
        </TweakSection>
        <TweakSection label="Mesa">
          <TweakRadio label="Apparatus" value={t.mesa}
            options={[{ value: 'habitada', label: 'Habitada' }, { value: 'sobria', label: 'Sóbria' }, { value: 'nua', label: 'Nua' }]}
            onChange={(v) => setTweak('mesa', v)} />
        </TweakSection>
        <TweakSection label="Papel de parede">
          <TweakSelect label="Imagem" value={t.parede}
            options={[{ value: 'iluminura', label: 'Iluminura' }, { value: 'pixel', label: 'Justitia pixel' }, { value: 'pixelret', label: 'Retrato pixel' }, { value: 'retrato', label: 'Retrato (foto)' }, { value: 'woodcut', label: 'Martírios (xilo)' }, { value: 'nenhum', label: 'Nenhum' }]}
            onChange={(v) => setTweak('parede', v)} />
        </TweakSection>
      </TweaksPanel>
    );
  }

  const mount = document.createElement('div');
  document.body.appendChild(mount);
  ReactDOM.createRoot(mount).render(<FeelTweaks />);
})();
