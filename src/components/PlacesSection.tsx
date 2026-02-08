export default function PlacesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-gray-800">Find Your Place in </span>
          <span className="text-[#ff4500]">Australia</span>
        </h2>
        <p className="text-gray-600 mb-12">Explore major hubs for education and employment.</p>

        <div className="grid gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Places section.png"
              alt="Study in Australia"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
