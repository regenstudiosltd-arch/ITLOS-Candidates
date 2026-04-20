import { Download, ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A1E3E] via-[#0D2847] to-[#0A1E3E] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-serif mb-6">
          Learn More About Slyvia Adusu's Vision
        </h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>

        <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
          Discover her qualifications, experience, and commitment to advancing international
          maritime law and justice through her candidature for ITLOS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A1E3E] px-10 py-5 rounded-lg hover:bg-[#E5C158] transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
            <Download className="w-6 h-6" />
            <span className="text-lg">Download Now</span>
          </button>

          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-sm">Free PDF Download</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl text-[#D4AF37] mb-2">25+</div>
            <div className="text-sm text-gray-300">Years of Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl text-[#D4AF37] mb-2">50+</div>
            <div className="text-sm text-gray-300">International Cases</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl text-[#D4AF37] mb-2">15+</div>
            <div className="text-sm text-gray-300">Published Articles</div>
          </div>
        </div>
      </div>
    </section>
  );
}
