import Link from "next/link";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function Activity({title, description, icon}: Props) {
  return (
    <article className="w-full bg-[#CEFF05] text-black p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl leading-tight font-extrabold mb-3">{title}</h3>
      <p className="mb-4 lg:text-lg text-black/80">{description}</p>
    </article>
  );
}
