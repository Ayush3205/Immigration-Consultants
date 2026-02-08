export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/Hero Section.jpg')"
        }}
      />
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Migration simplified.<br />Dreams amplified.
        </h1>
        <button className="bg-[#ff4500] bg-transparent border-2 border-[#ff4500]/80 hover:border-[#ff4500] text-white text-base font-medium px-9 py-1 rounded-full transition-all duration-300 hover:text-white shadow-lg hover:shadow-none">
  Book a Demo
        </button>
      </div>
    </section>
  );
}
