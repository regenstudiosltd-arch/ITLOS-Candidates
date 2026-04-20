import { Download, Eye } from 'lucide-react';

export function BrochurePreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1E3E] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-serif mb-6">
              Official ITLOS Candidature Brochure
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mb-6"></div>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Download the comprehensive brochure detailing Slyvia Adusu's qualifications, vision,
              and commitment to serving on the International Tribunal for the Law of the Sea.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <h3 className="text-xl mb-4 text-[#D4AF37]">Inside the Brochure:</h3>
              <ul className="space-y-3">
                {[
                  "Professional Biography & Experience",
                  "Vision for ITLOS and Maritime Justice",
                  "Academic Credentials & Publications",
                  "Track Record in International Law",
                  "Endorsements & Recommendations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A1E3E] px-8 py-4 rounded-lg hover:bg-[#E5C158] transition-all shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5" />
                Download Full Brochure
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/30">
                <Eye className="w-5 h-5" />
                Preview Online
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-lg transform -rotate-3 opacity-20"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-md">
                <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-100 to-gray-200 rounded flex flex-col items-center justify-center p-8 border-4 border-[#0A1E3E]">
                  <div className="text-center space-y-6">
                    <div className="text-6xl">📄</div>
                    <div className="space-y-2">
                      <div className="text-[#0A1E3E] font-serif text-2xl">
                        ITLOS Candidature
                      </div>
                      <div className="h-1 w-16 bg-[#D4AF37] mx-auto"></div>
                      <div className="text-[#0A1E3E] text-xl">
                        Slyvia Adusu Esq.
                      </div>
                      <div className="text-gray-600 text-sm">
                        Official Brochure 2026
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="w-12 h-12 mx-auto bg-[#0A1E3E] rounded-full flex items-center justify-center text-2xl">
                        🇬🇭
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center text-gray-600 text-sm">
                  Comprehensive 24-page document
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
