export default function Banners() {
  return (
    <section className="bg-cover bg-center w-full h-100 md:h-150 pt-20 flex items-center justify-center text-white relative overflow-hidden" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="relative z-20 text-center p-8 max-w-7xl mx-auto mb-12 md:mb-0 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight">
          TENNIS KOMEDI
        </h1>
        <p className="mt-4 md:text-2xl max-w-2xl mx-auto italic">
          Menang itu Bonus, Keringetan itu Harus,
          <br />
          Foto estetik itu Kudus
        </p>
      </div>
    </section>
  );
}
