import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[new Date().getDay()];
    console.log(`Welcome to my site and hopefully this ${currentDay} is going good for you.`);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <Head>
        <title>Gary Varner</title>
        <link rel="icon" href="https://fav.farm/%F0%9F%98%83" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/static"
        />
        <meta property="og:title" content="Gary Varner Site" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 text-center">
        {/* Nav section */}
        <div className="flex justify-between w-full mt-2 p-4">
          <div className="flex items-center">
            <span className="relative flex shrink-0 mx-auto h-10 w-10 overflow-hidden rounded-full ring ring-slate-200">
              <img
                className="aspect-square h-full w-full object-cover hover:grayscale"
                src="/gary_headshot_1.jpeg"
                alt=""
              />
            </span>
            <div className="ml-3">
              <p className="font-bold text-slate-400">Gary Varner</p>
            </div>
          </div>
          <div className="flex justify-between space-x-4">
            <motion.a
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 50 },
              }}
              href="https://github.com/gvarner13"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="2rem"
                height="2rem"
                viewBox="0 0 30 30"
                className="fill-slate-400"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 50 },
              }}
              href="https://twitter.com/GSVarner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="2rem"
                height="2rem"
                viewBox="0 0 30 30"
                className="fill-slate-400"
              >
                {" "}
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </motion.a>
          </div>
        </div>
        <motion.div
          className="w-[400px] mt-6 bg-white/75 rounded"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <h1 className="md:text-8xl text-6xl font-black text-slate-400">
            Maker of{" "}
            <span
              style={{
                background: "linear-gradient(to right, #E7FF52, #41FF54)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stuff
            </span>
            .
          </h1>
        </motion.div>
        <div className="mt-20 text-left px-4">
          <h2 className="text-4xl font-black text-slate-400">About Me</h2>
          <div className="outline-dashed outline-offset-8 outline-4 outline-rose-500/75 rounded bg-slate-400 p-6 max-w-2xl mt-4">
            <p>
              Hi 👋, I am an Atlanta based javaScript developer. Husband and
              father to an awesome family that helps me be my best everyday. My
              love for computers started when I was young and has only grown
              stronger.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(226 232 240 / 50)"
            fillOpacity="1"
            d="M0,64L18.5,64C36.9,64,74,64,111,90.7C147.7,117,185,171,222,202.7C258.5,235,295,245,332,234.7C369.2,224,406,192,443,197.3C480,203,517,245,554,234.7C590.8,224,628,160,665,160C701.5,160,738,224,775,261.3C812.3,299,849,309,886,277.3C923.1,245,960,171,997,165.3C1033.8,160,1071,224,1108,245.3C1144.6,267,1182,245,1218,224C1255.4,203,1292,181,1329,192C1366.2,203,1403,245,1422,266.7L1440,288L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
      </footer>
    </div>
  );
}
