import NoiseBackground from "../../components/ui/background-noise";
import Navbar from "../../components/ui/navbar";

export default function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-100"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1 text-center">
        <Navbar />
        <h1>Projects</h1>
        <div className="flex flex-col items-center">
          <div>Comming Soon</div>
        </div>
      </main>
    </div>
  );
}
