import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A1E3E] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4 text-[#D4AF37]">Slyvia Adusu Esq.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Candidate for the International Tribunal for the Law of the Sea (ITLOS)
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#qualifications" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Qualifications
                </a>
              </li>
              <li>
                <a href="#brochure" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1E3E] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1E3E] transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1E3E] transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              Made for ITLOS Candidature • Representing Ghana 🇬🇭
            </div>
            <div>
              © 2026 Slyvia Adusu. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
