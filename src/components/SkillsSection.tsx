export default function SkillsSection() {
  const skills = [
    {
      title: 'Healthcare Professionals',
      description: 'Nurses, doctors, and allied health professionals are in high demand across Australia.',
      image: '/skills section 1.jpg',
      link: 'View Opportunities'
    },
    {
      title: 'IT & Technology',
      description: 'Software developers, cybersecurity experts, and data analysts are needed nationwide.',
      image: '/skills section 2.jpg',
      link: 'View Opportunities'
    },
    {
      title: 'Trades & Construction',
      description: 'Electricians, plumbers, carpenters, and other skilled trades workers are essential.',
      image: '/skills section 3.jpg',
      link: 'View Opportunities'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-[45px] leading-tight font-['Poppins'] mb-3">
          <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b35] bg-clip-text text-transparent font-bold">Skills</span>
          <span className="text-gray-800 font-normal"> in Shortage</span>
        </h2>
        <p className="text-gray-600 text-[16px] font-['Poppins'] mb-12 max-w-2xl">
          Sectors actively seeking international talent right now.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6 bg-[#00352B] text-white min-h-[200px] flex flex-col">
                <h3 className="text-xl font-['Poppins'] font-semibold mb-3 text-white">{skill.title}</h3>
                <p className="text-white/90 text-sm font-['Poppins'] mb-4 flex-grow leading-relaxed">
                  {skill.description}
                </p>
                <a 
                  href="#" 
                  className="text-[#ff4500] font-['Poppins'] font-medium hover:text-[#ff6b35] transition-colors inline-flex items-center gap-1 mt-auto"
                >
                  {skill.link} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-end gap-2">
          <button 
            className="w-10 h-10 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors flex items-center justify-center"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-md bg-[#ff4500] hover:bg-[#ff6b35] transition-colors flex items-center justify-center"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}