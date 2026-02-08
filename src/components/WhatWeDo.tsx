export default function WhatWeDo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-[45px] leading-[120%] tracking-[-0.15px] font-['Poppins'] mb-3">
          <span className="text-gray-800 font-normal">What </span>
          <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b35] bg-clip-text text-transparent font-semibold italic">
            Esante
          </span>
          <span className="text-gray-800 font-normal"> Does For You?</span>
        </h2>
        
        <p className="text-gray-800 text-base mb-12 font-['Poppins']">
          A thriving economy, top-tier education, and an unmatched lifestyle await.
        </p>

        {/* Cards Container */}
        <div className="grid md:grid-cols-1 gap-8">
          {/* Migration Advisors Card - Dark Green */}
          <div className="bg-[#0A4D4D] rounded-3xl overflow-hidden shadow-xl pb-32">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#FF4500] text-4xl font-['Poppins'] font-normal mb-4">
                    Migration Advisors
                  </h3>
                  <p className="text-white mb-8 leading-relaxed font-['Poppins'] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                  
                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* Button */}
                <button className="bg-[#FF4500] text-white px-8 py-3 rounded-lg hover:bg-[#ff5722] transition-colors font-['Poppins'] font-medium w-fit">
                  Learn More
                </button>
              </div>

              {/* Right Image */}
              <div className="p-10 pr-10 pt-10 pb-0 min-h-[200px] relative">
                <img
                  src="/service section migration advisors.jpg"
                  alt="Sydney Harbor Bridge"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Education & Training Card - Orange/Red */}
          <div className="bg-[#FF4500] rounded-3xl overflow-hidden shadow-xl -mt-40">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Image */}
              <div className="p-10 pl-10 pt-10 pb-10 h-full min-h-[400px] relative">
                <img
                  src="/service section education and training.jpg"
                  alt="Education Building"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Right Content */}
              <div className="p-10 flex flex-col justify-start">
                <div>
                  <h3 className="text-white text-4xl font-['Poppins'] font-normal mb-4">
                    Education & Training
                  </h3>
                  <p className="text-white mb-8 leading-relaxed font-['Poppins'] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                  
                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-['Poppins'] text-sm">
                        ✅ We help in recruit students from all over the world..
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* Button */}
                <button className="bg-white text-[#FF4500] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-['Poppins'] font-medium w-fit">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}