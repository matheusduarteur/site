const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/SEU_LINK_AQUI"; // TROQUE AQUI

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Glow background (fica atrás de tudo) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative mx-auto max-w-6xl px-4 pt-8">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold tracking-wide text-white/80">
            Universidade da Resina
          </p>

          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-xl bg-emerald-500 px-4 py-2 text-sm font-extrabold text-neutral-950"
          >
            Entrar no grupo
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative mx-auto max-w-6xl px-4 pb-28 pt-10">
        <section className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              🔴 Evento ao vivo e gratuito
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
              Aprenda a criar peças{" "}
              <span className="text-emerald-400">incríveis</span> em madeira com
              resina e transforme isso em{" "}
              <span className="text-yellow-300">hobby + renda</span>
            </h1>

            <p className="mt-4 text-lg text-white/70">
              Entre no grupo silencioso do WhatsApp para receber o link da aula,
              materiais e avisos. Sem spam.
            </p>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-base font-extrabold text-neutral-950"
            >
              ✅ Quero entrar no grupo do WhatsApp
            </a>
          </div>

          {/* IMAGEM HERO */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-b from-emerald-500/20 to-yellow-400/10 blur-2xl" />

            {/* z-10 garante que a imagem fique acima do glow */}
            <div className="relative z-10 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img
                src="/matheus-hero.jpg"
                alt="Matheus com peças de madeira e resina"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <img src="/peca1.jpg" className="rounded-2xl" alt="Peça 1" />
          <img src="/peca2.jpg" className="rounded-2xl" alt="Peça 2" />
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Universidade da Resina</p>
        </footer>
      </main>

      {/* Botão fixo mobile */}
      <div className="fixed bottom-4 left-0 right-0 px-4 sm:hidden">
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-4 text-base font-extrabold text-neutral-950 shadow-lg"
        >
          ✅ Entrar no grupo do WhatsApp
        </a>
      </div>
    </div>
  );
}
