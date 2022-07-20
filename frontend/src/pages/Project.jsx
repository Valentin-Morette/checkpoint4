import axios from "axios";
import { useState, useEffect } from "react";

export default function Project() {
  const [allProjects, setAllProjects] = useState([]);
  const getAllProjects = () => {
    axios
      .get("http://localhost:5000/project")
      .then((res) => res.data)
      .then((data) => setAllProjects(data));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>
      {allProjects &&
        allProjects.map((project) => (
          <div>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div>
                <img src={project.img} alt={project.name} />
                <div>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
