import axios from "axios";
import { useState, useEffect } from "react";

export default function Project() {
  const [allProjects, setAllProjects] = useState([]);
  const [allTech, setAllTech] = useState([]);

  const getAllProjects = () => {
    axios
      .get("http://localhost:5000/project")
      .then((res) => res.data)
      .then((data) => setAllProjects(data));
  };

  const getAllTech = () => {
    axios
      .get("http://localhost:5000/project_tech")
      .then((res) => res.data)
      .then((data) => setAllTech(data));
  };

  useEffect(() => {
    getAllProjects();
    getAllTech();
  }, []);

  return (
    <div className="allCardProject grid py-8 px-4 gap-8 justify-center">
      {allProjects &&
        allTech &&
        allProjects.map((project) => (
          <div>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="flex flex-col rounded-xl border-2 h-[400px] max-w-[500px]">
                <img
                  className="h-[200px] object-cover rounded-t-xl"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
                  }/assets/images/img_projet/${project.image}`}
                  alt={project.name}
                />
                <div className="m-4">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                <ul className="flex gap-x-2 mx-4 mb-4 flex-wrap">
                  {allTech.map((tech) =>
                    tech.id === project.id ? <li>{tech.techno}</li> : null
                  )}
                </ul>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
