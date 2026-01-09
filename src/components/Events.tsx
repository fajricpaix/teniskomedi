import EventLists from "@/contents/EventLists";
import Image from "next/image";

export default function Events() {
  return (
    <div>
      {/* Header Section */}
      <div className="mb-4 lg:mb-8">
        <p className="text-sm font-semibold text-white/70 tracking-wider uppercase mb-2 lg:mb-4">
          KALENDER
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            Event Tenis Komedi<br />
          </h2>
          
          <div className="lg:max-w-2xl lg:col-span-2">
            <p className="text-white/70 leading-relaxed mb-4">
              Jangan sampai ketinggalan momen seru di lapangan bersama Tenis Komedi!
              Cek kalender acara kami dan tandai tanggalnya untuk ikut serta dalam keseruan yang penuh tawa dan keringat ini.
            </p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <EventLists 
        date="10-18"
        month="Januari"
        imageSrc="/images/lagoonopen.jpg"
        eventTitle="Lagoon Open"
        location="Sports Club Serpong Lagoon"
        details="All Level, No CLub, No Blok, No Cluster Just Warga Serpong Lagoon" 
      />

      <EventLists 
        date="6am"
        month="Rabu & Kamis"
        imageSrc="/images/join.jpg"
        eventTitle="MaBar Tenis Komedi"
        location="Sports Club Serpong Lagoon"
        details="Kalau kosong dan ada waktu, kita main bareng yuk! Keringat pagi lebih menggairahkan daripada tidur pagi."
      />
    </div>
  );
};
