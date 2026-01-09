import Image from "next/image";

interface Props {
  date?: string;
  month?: string;
  imageSrc?: string;
  eventTitle?: string;
  location?: string;
  details?: string;
}

export default function EventLists({ date, month, imageSrc, eventTitle, location, details }: Props) {
  return (
    <div className="lg:flex lg:w-2/3 lg:ml-auto lg:pl-2 gap-4 border-b last:border-0 border-white/10 mb-8 pb-6 last:pb-0 lg:pb-8">
      {/* Date */}
      <div className="flex lg:block lg:w-1/6 items-end gap-x-2 mb-3">
        <div className="text-3xl font-bold text-[#CEFF05]">
          {date}
        </div>
        <div className="text-white mt-1">
          {month}
        </div>
      </div>

      {/* Image */}
      <div className="flex lg:w-3/6 justify-center overflow-hidden bg-white">
        <Image 
          src={imageSrc ? imageSrc : "/images/join.jpg"}
          alt="Logo"
          className="w-full h-auto lg:aspect-square lg:object-contain hover:scale-125 transition-transform duration-300"
          width={500}
          height={500} />
      </div>

      {/* Event Details */}
      <div className="lg:w-2/6 mt-4 lg:mt-0">
        <h3 className="text-2xl font-bold text-[#CEFF05]">
          {eventTitle}
        </h3>
        
        <div className="flex flex-col gap-3 text-white">
          <span className="font-semibold">{location}</span>
          <p className="text-sm text-white/70">
            {details}
          </p>
        </div>
      </div>
    </div>

  );
};
