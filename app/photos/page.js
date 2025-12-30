import Image from "next/image";
import NoiseBackground from "../../components/ui/background-noise";
import Navbar from "../../components/ui/navbar";

export default function Photos() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-100"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1 text-center">
        <Navbar />
        <Image
          src="/IMG_9071.jpeg"
          alt="Antalope Canyon"
          width={500}
          height={500}
          className="rounded-lg grayscale w-96"
        />
      </main>
    </div>
  );
}
