export default function NewsSection() {
  const news = [
    {
      image: '/news section 1.jpg',
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      date: '19 Nov 2025'
    },
    {
      image: '/news section 2.jpg',
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      date: '19 Nov 2025'
    },
    {
      image: '/news section 3.jpg',
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      date: '19 Nov 2025'
    },
    {
      image: '/news section 4.jpg',
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      date: '19 Nov 2025'
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF6]">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-[#ff4500]">Latest News</span>
        </h2>
        <p className="text-gray-600 mb-12">Join thousands who have successfully made the move.</p>

        <div className="grid md:grid-cols-4 gap-6">
          {news.map((item, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-1">
                <h3 className="text-sm font-Regular text-[#000000] leading-snug">{item.date}</h3>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-Regular text-[#000000] leading-snug">{item.title}</h3>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-Regular text-[#FF3300] leading-snug">Read More</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
