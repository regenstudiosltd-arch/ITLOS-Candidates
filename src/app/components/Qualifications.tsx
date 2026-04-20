import { BookOpen, Briefcase, Users, Trophy } from 'lucide-react';

export function Qualifications() {
  const qualifications = [
    {
      icon: Briefcase,
      title: "Legal Expertise",
      points: [
        "International Maritime Law Specialist",
        "Constitutional and Human Rights Advocate",
        "Cross-border Litigation Expert"
      ]
    },
    {
      icon: Globe2,
      title: "International Law Experience",
      points: [
        "Advisory Roles to Regional Bodies",
        "Participation in Treaty Negotiations",
        "Consultancy on Law of the Sea Matters"
      ]
    },
    {
      icon: Users,
      title: "Leadership Roles",
      points: [
        "Senior Legal Counsel Positions",
        "Board Member of Legal Institutions",
        "Mentor to Young Legal Professionals"
      ]
    },
    {
      icon: BookOpen,
      title: "Academic Credentials",
      points: [
        "LLM in International Law",
        "Published Scholar on Maritime Issues",
        "Guest Lecturer at Leading Universities"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-[#0A1E3E] mb-4">
            Key Qualifications
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive background combining academic excellence, practical experience, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#D4AF37] group"
              >
                <div className="mb-4">
                  <div className="bg-[#0A1E3E] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                    <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0A1E3E]" />
                  </div>
                </div>
                <h3 className="text-lg text-[#0A1E3E] mb-4">{qual.title}</h3>
                <ul className="space-y-2">
                  {qual.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Globe2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
