export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="md:w-[40%] md:max-w-[500px]">
            <h2 className="text-[45px] leading-[120%] tracking-[-0.15px] font-['Poppins']">
              <span className="text-gray-800 font-normal">Everything You Need for</span>
              <br />
              <span className="text-gray-800 font-normal">Your </span>
              <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b35] bg-clip-text text-transparent font-bold">
                Australia Dream
              </span>
            </h2>
          </div>
          <div className="md:w-[55%] md:max-w-[700px] flex items-center">
            <p className="text-[18px] leading-[140%] tracking-[-0.15px] text-black font-['Poppins'] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="relative h-[400px] overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/Service section left.png"
              alt="For Students"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-[#ff4500] text-white px-4 py-2 rounded text-sm font-['Poppins'] font-medium mb-3">
                For Students ↗
              </span>
              <h3 className="text-white text-xl font-['Poppins'] font-normal mb-1">
                World - Class Education
              </h3>
              <p className="text-white/80 text-sm font-['Poppins']">Book 1:1 Counselling</p>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="Service section middle.jpg"
              alt="For Professionals"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-[#ff4500] text-white px-4 py-2 rounded text-sm font-['Poppins'] font-medium mb-3">
                For Professionals ↗
              </span>
              <h3 className="text-white text-xl font-['Poppins'] font-normal mb-1">
                Advance Your Career
              </h3>
              <p className="text-white/80 text-sm font-['Poppins']">Book 1:1 Counselling</p>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="Service section right.jpg"
              alt="For Migration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-[#ff4500] text-white px-4 py-2 rounded text-sm font-['Poppins'] font-medium mb-3">
                For Migration ↗
              </span>
              <h3 className="text-white text-xl font-['Poppins'] font-normal mb-1">
                Advance Your Career
              </h3>
              <p className="text-white/80 text-sm font-['Poppins']">Book 1:1 Counselling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}