import { Scale, Globe2, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Scale,
      title: "Legal Excellence",
      description: "Over 25 years of distinguished practice in international and maritime law"
    },
    {
      icon: Globe2,
      title: "Global Experience",
      description: "Extensive work with international tribunals and cross-border legal frameworks"
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Proven track record in judicial and diplomatic roles across Africa and beyond"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-[#0A1E3E] mb-4">
            Distinguished Legal Professional
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Slyvia Adusu brings a wealth of experience in international law, maritime jurisprudence,
            and a deep commitment to justice on the global stage. Her candidature represents Ghana's
            dedication to excellence in international legal scholarship and practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0A1E3E] to-[#0D2847] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-[#D4AF37]/20"
              >
                <div className="bg-[#D4AF37] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#0A1E3E]" />
                </div>
                <h3 className="text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
