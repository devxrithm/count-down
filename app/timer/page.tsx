import Image from "next/image";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="mb-10 z-10">
        <Image src={"/iimt.png"} width={300} height={300} alt="logo" />
        <p className="text-center text-xl bg-white text-black font-extrabold mt-2 rounded">
          PRESENTS
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-60"
          poster="#"
        >
          <source
            src="/omen-agent-valorant-moewalls-com.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        <div className="flex items-center justify-center gap-8">
          <Image src={"/logo.png"} width={200} height={200} alt="logo" />

          <div className="h-32 w-[2px] bg-blue-400"></div>

          <h1 className="text-8xl font-extrabold text-white mb-4 ">
            MIND INSTALLERS <br />
            <span className="text-cyan-400 drop-shadow-2xl drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
              HACKATHON
            </span>{" "}
            4.0
          </h1>
        </div>
        <div className="">
          <Counter />
        </div>
      </div>
    </section>
  );
}
