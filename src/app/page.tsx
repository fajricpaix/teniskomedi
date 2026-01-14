import Banners from "@/components/Banners";
import Activity from "@/components/Activity";
import JoinUs from "@/components/JoinUs";
import FollowUs from "@/components/FollowUs";
import Events from "@/components/Events";
import PlayerCard from "@/components/players/PlayerCard";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col">
        <Banners />

        <div className="lg:container lg:mx-auto">
          {/* Kebiasaan Tenis Komedi */}
          <section className="px-4 lg:px-8 -translate-y-24">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Activity 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 lg:h-16 w-12 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Tertawa & Bercerita" 
                description="Kelas singkat untuk meningkatkan teknik permainan Anda sambil ketawa-ketawa." />
              <Activity
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 lg:h-16 w-12 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Keringat & Bahagia" 
                description="Mainkan tenis, keringatan, tertawa, seru banget deh!" />
              <Activity 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 lg:h-16 w-12 lg:w-16" viewBox="0 0 17 17" version="1.1">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <path d="M11.969,1 L3.082,1 L3.082,2.031 L-0.0078124993,2.0310001 L-0.0078124993,6.8670001 C-0.0078124993,8.7360001 2.078,10.274 4.125,10.434 C4.797,11.154 5.979,11.677 7.031,11.9 L7.031,13.164 C6.025,13.473 4.22800003,14.1989902 4.12500003,14.9899902 L11.0290523,14.9899902 C10.9250523,14.1989902 8.945,13.472 7.937,13.164 L7.937,11.9 C8.993,11.677 10.228,11.154 10.901,10.434 C12.947,10.274 14.941,8.736 14.941,6.867 L14.941,2.031 L11.969,2.031 L11.969,1 Z M0.941000006,2.9473877 L3.01000001,2.9473877 L3.01,7.113 C3.01,7.935 3.222,8.717 3.595,9.421 C2.047,8.928 0.941,7.658 0.941,6.172 L0.941000006,2.9473877 Z M9.0451968,8.028 L7.50083389,7.177 L5.9548032,8.028 L6.25,6.228 L5,4.954 L6.72698466,4.691 L7.50083389,3.055 L8.27301534,4.691 L10,4.954 L8.75083389,6.228 L9.0451968,8.028 L9.0451968,8.028 Z M11.34,9.554 C11.715,8.818 11.93,8.004 11.93,7.143 L11.93,2.97424316 L14.004,2.97424316 L14.004,6.16 C14.004,7.713 12.893,9.039 11.34,9.554 Z" fill="#000000"></path>
                    </g>
                  </svg>
                }
                title="Sesekali Kompetisi" 
                description="Ikut atau nggak? Santai aja, ini cuma buat fun!" />
            </div>
          </section>

          {/* Join Us */}
          <section className="px-4 lg:px-8 -translate-y-12 mb-8">
            <JoinUs />
          </section>
        </div>

        <section className="lg:container lg:mx-auto px-4 lg:px-8 mb-16 lg:my-12">
          <p className="text-2xl lg:text-3xl text-center font-semibold text-primary tracking-wider uppercase mb-5">
            Player Tenis Komedi
          </p>
          
          <PlayerCard />
        </section>

        {/* Follow Us */}
        <FollowUs />

        {/* Events */}
        <section className="lg:container lg:mx-auto px-4 lg:px-8 my-12">
          <Events />
        </section>
      </main>
    </>
  );
}
