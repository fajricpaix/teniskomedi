import Link from "next/link";

export default function FollowUs() {
  return (
    <section
      className="relative w-full h-75 md:h-100 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/join.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm font-semibold text-white/80 tracking-widest uppercase mb-6">
            Liat siapa yang lagi seru-seruan di lapangan!
          </p>

          <h2 className="text-xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
            LIHAT &amp; IKUTI KONTEN KITA <br />
            DI SOSIAL MEDIA
            <br />
          </h2>

          <div className="flex justify-center gap-x-3 mt-6">
            <div>
              <Link href="https://www.instagram.com/teko_sergoo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
              </Link>
            </div>
            <Link href="https://www.tiktok.com/@teko_sergoo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.135v-3.3a5.85 5.85 0 0 0-1-.1A5.7 5.7 0 0 0 4.27 15.25a5.7 5.7 0 0 0 9.38 4.77A5.65 5.65 0 0 0 12.1 9.88a5.7 5.7 0 0 0 7.49 0V8.13a9.56 9.56 0 0 0 1.4.88z"/></svg>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
