import Image from "next/image";

export default function JoinUs () {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Column - Image */}
      <div className="relative">
          {/* Tennis Image Placeholder */}
          <Image 
              src="/images/join.jpg"
              alt="Logo"
              className="w-full h-auto lg:h-175 aspect-square object-cover"
              width={500}
              height={500} />
          
          {/* Bottom Banner */}
          <div className="p-6 bg-[#CEFF05] lg:absolute lg:bottom-8 lg:left-8 lg:-right-8">
            <h3 className="text-lg lg:text-2xl font-bold leading-tight">
              Alcaraz, Sinner &amp; Sabalenka<br />
              BUKAN TANDINGAN KITA!
            </h3>
          </div>
      </div>

      {/* Right Column - Content */}
      <div className="space-y-6 lg:pl-12">
        <div className="space-y-4">
          <p className="text-sm lg:text-base font-semibold text-white/70 tracking-wider uppercase">
            Hallo Warga Lagoon
          </p>
          
          <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
            Yuk, Main &amp; Ngakak Bareng<br />
            Bersama Tenis Komedi!
          </h1>
        </div>

        <div className="space-y-6 text-white leading-relaxed lg:text-lg">
          <p>
            Jangan jauh-jauh dong! Gabung aja sama kami di Tenis Komedi, tempat dimana 
            olahraga ketemu hiburan. Tawa dan keringat bakal keluar bareng-bareng, dijamin 
            seru dan ngakak abis!
          </p>
          
          <p>
            Join dan rasakan getaran tertawa kita, lansung datang di Basecamp kita aka Sports Club Serpong Lagoon
          </p>
        </div>

      </div>
    </div>
  );
};
