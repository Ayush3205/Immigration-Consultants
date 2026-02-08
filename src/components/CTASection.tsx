export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <img 
            src='/CTA background.jpg'
            alt='Background'
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] text-white mb-4">
              Ready To Start Your <span className="text-white font-Italic">Australian</span> Journey?
            </h2>
            <p className="text-white text-lg font-['Poppins'] mb-8 max-w-3xl">
              Let Our Experts in Mumbai And Bangalore Guide You Every Step Of The Way.
            </p>
            <button className="bg-white text-[#ff4500] px-8 py-3 rounded-full font-['Poppins'] font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Book Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}