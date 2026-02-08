export default function StoriesSection() {
  const stories = [
    {
      image: '/story section 1.jpg',
      title: 'Student Success',
      description: 'Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum...'
    },
    {
      image: '/story section 2.jpg',
      title: 'Career Growth',
      description: 'Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum...'
    },
    {
      image: '/story section 3.jpg',
      title: 'Family Journey',
      description: 'Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum...'
    },
    {
      image: '/story section 4.jpg',
      title: 'Professional Path',
      description: 'Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum omnis heriet Lorem ipsum...'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-3">
          <span className="text-gray-900">Real Stories, Real Futures.</span>
        </h2>
        <p className="text-gray-600 mb-12">Join thousands who have successfully made the move.</p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stories.map((story, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-21">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-6">
                <div className="text-white">
                  
                  <div className="absolute inset-0 flex items-start justify-start">
              <img
                src="/play button.png"
                alt='button'
                className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
