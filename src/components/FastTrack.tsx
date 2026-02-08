import { useState, useEffect, useRef } from 'react';

export default function FastTrack() {
  const [activeTab, setActiveTab] = useState('management');
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = {
    management: [
      {
        id: 1,
        title: 'Masters in Business Management',
        description: 'Lorem ipsum omnis heriet. Lorem ipsum Lorem ipsum omnis heriet. Lorem ipsum omnis heriet. Lorem ipsum...',
        image: '/fast track section 1.jpg'
      },
      {
        id: 2,
        title: 'Masters in Business Management',
        description: 'Lorem ipsum omnis heriet. Lorem ipsum Lorem ipsum omnis heriet. Lorem ipsum omnis heriet. Lorem ipsum...',
        image: '/fast track section 2.jpg'
      }
    ],
    engineering: [
      {
        id: 1,
        title: 'Masters in Engineering',
        description: 'Lorem ipsum omnis heriet. Lorem ipsum Lorem ipsum omnis heriet. Lorem ipsum omnis heriet. Lorem ipsum...',
        image: '/fast track section 1.jpg'
      },
      {
        id: 2,
        title: 'Masters in Engineering',
        description: 'Lorem ipsum omnis heriet. Lorem ipsum Lorem ipsum omnis heriet. Lorem ipsum omnis heriet. Lorem ipsum...',
        image: '/fast track section 2.jpg'
      }
    ],
    medical: [
      {
        id: 1,
        title: 'Masters in Medical Sciences',
        description: 'Lorem ipsum omnis heriet. Lorem ipsum Lorem ipsum omnis heriet. Lorem ipsum omnis heriet. Lorem ipsum...',
        image: '/fast track section 1.jpg'
      },
      {
        id: 2,
        title: 'Masters in Medical Sciences',
        description: 'Lorem ipsum omnis heriet. Lorem ipsum Lorem ipsum omnis heriet. Lorem ipsum omnis heriet. Lorem ipsum...',
        image: '/fast track section 2.jpg'
      }
    ]
  };

  const currentPrograms = programs[activeTab as keyof typeof programs];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gray-900">Fast-Track Your </span>
              <span className="text-[#ff4500]">Degree</span>
            </h2>
            <p className="text-gray-600 mb-8">Foundation and diploma programs designed for university success.</p>

            <div className="flex gap-6 mb-12 border-b border-gray-200">
              {['management', 'engineering', 'medical'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-[#ff4500] border-b-2 border-[#ff4500]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {currentPrograms.map((program) => (
                <div
                  key={program.id}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-900"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{program.description}</p>
                    <button className="text-white hover:text-[#ff4500] transition-colors font-medium text-sm">
                      Explore More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className={`absolute -right-10 top-1/2 transform -translate-y-1/2 w-96 h-96 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
            }`}
          >
            <img
              src="/thin_green_squiggle_orange_aust_(3)_1.png"
              alt="Decorative"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
