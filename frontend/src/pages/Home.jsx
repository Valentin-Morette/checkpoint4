import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import pp from "../assets/img/pp.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-[94vh] gap-2 lg/">
      <img
        className="rounded-full w-32 border-2 border-regal-white"
        src={pp}
        alt="Valentin Morette"
      />
      <h1 className="text-xl">Valentin Morette</h1>
      <h2>Développeur web</h2>
      <div className="flex gap-5">
        <a href="https://github.com/Valentin-Morette" target="_blanck">
          <FontAwesomeIcon
            className="text-2xl hover:text-white"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/valentinmorette/" target="_blanck">
          <FontAwesomeIcon
            className="text-2xl hover:text-white"
            icon={faLinkedin}
          />
        </a>
        <a href="https://twitter.com/VM__Dev" target="_blanck">
          <FontAwesomeIcon
            className="text-2xl hover:text-white"
            icon={faTwitter}
          />
        </a>
      </div>
    </div>
  );
}
