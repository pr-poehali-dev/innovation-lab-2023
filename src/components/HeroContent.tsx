export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Undetected · Обход всех анти-читов</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic">Avalora</span> Client
          <br />
          <span className="font-light tracking-tight text-white">чит нового уровня</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          KillAura, Fly, ESP, X-Ray и более 60 функций в одном клиенте. Стабильная работа на всех версиях,
          приватные сборки и обход популярных анти-читов. Стань непобедимым на любом сервере.
        </p>

        {/* Pricing */}
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <div className="px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-white text-sm font-medium">300 ₽</div>
            <div className="text-white/50 text-xs">1 месяц</div>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-white text-sm font-medium">400 ₽</div>
            <div className="text-white/50 text-xs">2 месяца</div>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
            <div className="text-white text-sm font-medium">1 000 ₽</div>
            <div className="text-white/50 text-xs">Навсегда</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Функции
          </button>
          <button onClick={() => alert('Скоро здесь появится оплата!')} className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Купить чит
          </button>
        </div>
      </div>
    </main>
  )
}