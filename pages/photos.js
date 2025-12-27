import Head from "next/head";
import Image from 'next/image'
import NoiseBackground from "../components/ui/background-noise";
import Navbar from "../components/ui/navbar";

export default function Photos() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-100"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <Head>
        <title>Gary Varner</title>
        <link rel="icon" href="https://fav.farm/%F0%9F%98%83" />
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/static"
        />
        <meta property="og:title" content="Gary Varner Site" />
      </Head>

      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1 text-center">
        <Navbar />
        <Image src="/IMG_9071.jpeg" alt="Antalope Canyon" width={500} height={500} className="rounded-lg grayscale w-96"/>
      </main>
    </div>
  );
}
