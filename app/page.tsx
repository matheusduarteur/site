const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/SEU_LINK_AQUI"; // TROQUE AQUI

export default function Page() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Glow background (sempre atrás) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-emerald-500/18 blur-3xl" />
        <div className="absolute top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative mx-auto max-w-6xl px-4 pt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold tracking-wide text-white/80">
            Universidade da Resina
          </p>

          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-xl bg-emerald-500 px-4 py-2 text-sm font-extrabold text-neutral-950 hover:brightness-110 transition"
          >
            Entrar no grupo
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative mx-auto max-w-6xl px-4 pb-24 pt-10">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 ring-1 ring-white/10">
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
              Evento ao vivo e gratuito
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-[1.06]">
              Aprenda a criar peças{" "}
              <span className="text-emerald-400">incríveis</span> em madeira com
              resina e transforme isso em{" "}
              <span className="text-yellow-300">hobby + renda</span>
            </h1>

            <p className="mt-4 text-lg text-white/70">
              Entre no grupo silencioso do WhatsApp para receber o link da aula,
              materiais e avisos. Sem spam.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-base font-extrabold text-neutral-950 shadow-lg shadow-emerald-500/10 hover:brightness-110 transition"
              >
                ✅ Quero entrar no grupo do WhatsApp
              </a>

              <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 text-sm text-white/70">
                Acesso gratuito • Saída a qualquer momento
              </div>
            </div>

            {/* Credenciais */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                <p className="text-2xl font-black">+2000</p>
                <p className="text-xs text-white/60">alunos</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                <p className="text-2xl font-black">Do zero</p>
                <p className="text-xs text-white/60">sem travar</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                <p className="text-2xl font-black">Prático</p>
                <p className="text-xs text-white/60">mão na massa</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* brilho atrás */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-emerald-500/25 to-yellow-400/10 blur-2xl -z-10" />

              {/* “card” da imagem */}
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-black/20 shadow-2xl">
                {/* altura boa pra aparecer na primeira dobra */}
                <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                  <img
                    src="/matheus-hero.jpg"
                    alt="Matheus com peças de madeira e resina"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* faixa com micro-copy (opcional, mas fica premium) */}
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-black/30 px-4 py-3 text-xs text-white/70">
                  <p>
                    🎥 Aula ao vivo + material de apoio no grupo
                  </p>
                  <p className="text-white/60">Sem spam</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vitrine de peças (logo após a primeira dobra) */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-black">Algumas peças que você vai conseguir fazer</h2>
              <p className="mt-1 text-sm text-white/65">
                Madeira + resina com acabamento bonito e vendável.
              </p>
            </div>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex rounded-xl bg-white/5 px-4 py-2 text-sm font-bold text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition"
            >
              Ver no grupo →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Peça 1 */}
            <div className="group rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="relative h-[220px]">
                <img
                  src="/peca1.jpg"
                  alt="Peça em madeira com resina"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition"
                />
              </div>
              <div className="p-4">
                <p className="font-extrabold">Peça com resina cristal</p>
                <p className="mt-1 text-sm text-white/65">
                  Ideal pra treinar acabamento e “efeito premium”.
                </p>
              </div>
            </div>

            {/* Peça 2 */}
            <div className="group rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="relative h-[220px]">
                <img
                  src="/peca2.jpg"
                  alt="Peça redonda em madeira com resina"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition"
                />
              </div>
              <div className="p-4">
                <p className="font-extrabold">Tábua/peça orgânica</p>
                <p className="mt-1 text-sm text-white/65">
                  Aprenda a evitar bolhas e manchas no “rio”.
                </p>
              </div>
            </div>

            {/* Card CTA no lugar da 3ª imagem (pra não ficar “solto”) */}
            <div className="rounded-3xl bg-gradient-to-b from-emerald-500/15 to-yellow-400/10 ring-1 ring-white/10 p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-white/80">
                  ✅ Você vai sair com um caminho claro:
                </p>
                <p className="mt-2 text-2xl font-black leading-tight">
                  do <span className="text-emerald-400">zero</span> até a primeira peça vendável
                </p>
                <p className="mt-3 text-sm text-white/70">
                  Entra no grupo e recebe o link + materiais.
                </p>
              </div>

              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-base font-extrabold text-neutral-950 hover:brightness-110 transition"
              >
                🚀 Entrar no grupo gratuito
              </a>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="mt-12 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h2 className="text-2xl font-black">O que você vai aprender na aula</h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 text-white/85">
            <li>✅ Tipos de resina e pigmentos (sem gastar à toa)</li>
            <li>✅ Ferramentas certas pra começar (o essencial)</li>
            <li>✅ Onde comprar material com melhor custo-benefício</li>
            <li>✅ Lixas e acabamentos (pra ficar vendável)</li>
            <li>✅ Erros que fazem a resina dar ruim (e como evitar)</li>
            <li>✅ Oportunidades pra ganhar dinheiro com as peças</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-base font-extrabold text-neutral-950 hover:brightness-110 transition"
            >
              ✅ Garantir minha vaga no grupo
            </a>

            <p className="text-sm text-white/60">
              Grupo silencioso • Só avisos e materiais
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Universidade da Resina</p>
          <p>Políticas de Privacidade • Termos de Uso</p>
        </footer>
      </main>

      {/* Botão fixo mobile */}
      <div className="fixed bottom-4 left-0 right-0 px-4 sm:hidden">
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-4 text-base font-extrabold text-neutral-950 shadow-lg shadow-emerald-500/15 hover:brightness-110 transition"
        >
          ✅ Entrar no grupo do WhatsApp
        </a>
      </div>
    </div>
  );
}
