import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" bg-[#252627]">
      <ul className="h-[6vh] flex items-center gap-8  justify-center md:justify-end md:mr-8">
        <li className=" hover:text-white">
          <Link to="/">Accueil</Link>
        </li>
        <li className=" hover:text-white">
          <Link to="/about">À propos</Link>
        </li>
        <li className=" hover:text-white">
          <Link to="/projects">Projets</Link>
        </li>
        <li className=" hover:text-white">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
