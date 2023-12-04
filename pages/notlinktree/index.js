import data from "../../data.json";

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={{ fill: "gray" }}
    >
      {" "}
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={{ fill: "gray" }}
    >
      {" "}
      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
    </svg>
  );
}

function LinkCard({ title, href }) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md transition-all bg-gray-200 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function NotLinkTree() {
  return (
    <div
      className="h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]"
      style={{ backgroundSize: "6rem 4rem" }}
    >
      <div className="flex items-center flex-col mx-auto max-w-lg justify-center px-8 pt-16">
        <img
          className="h-24 w-24 rounded-full ring-2 hover:grayscale"
          src="/gary_headshot_1.jpeg"
          alt=""
        />
        <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
        <div className="flex items-center gap-4 mt-8 text-white">
          {data.socials.map((social) => (
            <a
              aria-label={`${social.title} link`}
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.href.includes("twitter") ? (
                <TwitterIcon />
              ) : social.href.includes("github") ? (
                <GitHubIcon />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
