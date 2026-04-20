import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A1E3E] via-[#0D2847] to-[#0A1E3E] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#D4AF37] tracking-wide">ITLOS Candidature 2026</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-serif">
              Slyvia Adusu <span className="text-[#D4AF37]">Esq.</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-6 text-gray-300 italic">
              Candidate for the International Tribunal for the Law of the Sea
            </p>

            <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A distinguished legal professional committed to international justice and maritime law, bringing decades of expertise to the global stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A1E3E] px-8 py-4 rounded-lg hover:bg-[#E5C158] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Download className="w-5 h-5" />
                Download Brochure (PDF)
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/30 backdrop-blur-sm">
                <FileText className="w-5 h-5" />
                View Online
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-lg transform rotate-3 opacity-20"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760320483844-3d808de62def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzY2OTkzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Slyvia Adusu Esq."
                  className="w-full max-w-md h-auto rounded-lg object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-[#0A1E3E] p-4 rounded-lg shadow-lg">
                  <div className="text-sm opacity-80">Ghana</div>
                  <div className="font-serif">🇬🇭</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
