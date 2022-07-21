import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [allTech, setAllTech] = useState([]);
  const [deleteProject, setDeleteProject] = useState(false);

  const getProjects = () => {
    axios
      .get(`http://localhost:5000/project/${id}`)
      .then((res) => res.data)
      .then((data) => setProject(data));
  };

  const getAllTech = () => {
    axios
      .get("http://localhost:5000/project_tech")
      .then((res) => res.data)
      .then((data) => setAllTech(data));
  };

  const RemoveProject = () => {
    axios.delete(`http://localhost:5000/project/${id}`).then((res) => res.data);
    setDeleteProject(true);
  };

  useEffect(() => {
    getProjects();
    getAllTech();
  }, []);

  return (
    <div>
      {project && allTech && (
        <>
          <h1 className="text-center my-4 text-xl">
            <a href={project.link} target="_blanck">
              {project.name}{" "}
            </a>
          </h1>{" "}
          <div className="flex flex-col items-center md:flex-row mx-6 gap-8 my-8">
            <img
              className="max-w-[60%] md:w-[30%] min-w-[300px] rounded-xl border-2 border-regal-white"
              src={`${
                import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
              }/assets/images/img_projet/${project.image}`}
              alt={project.name}
            />

            <ul>
              <li>Fait le : {project.date}</li>
              <li>
                Techno utilisés :{" "}
                <ul className="">
                  {allTech.map((tech) =>
                    tech.id === project.id ? <li> - {tech.techno}</li> : null
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div className="mx-6 mb-4">
            <p>{project.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum
              modi quaerat suscipit nihil, totam enim explicabo? Laborum fugit
              accusantium magnam temporibus dicta assumenda dolorem. Laudantium
              deserunt ex culpa soluta ipsa nesciunt fugiat est? Expedita labore
              voluptatum dolor aut animi possimus nobis unde distinctio. Saepe
              hic accusamus ipsam necessitatibus totam nam dolorem tenetur optio
              veniam rerum ullam odit nisi praesentium voluptatum excepturi esse
              consectetur iusto sit, id sed. Maiores, nisi fuga voluptatum
              perferendis incidunt fugit vel quibusdam, sapiente facere dolore
              quia cupiditate sit pariatur doloribus asperiores possimus ipsam?
              Consequuntur quisquam ex hic facere perspiciatis eaque
              necessitatibus quam quae delectus beatae cupiditate quis dolor
            </p>
          </div>
        </>
      )}
      <button
        className="bg-[#c41c1c] rounded-xl py-2 px-4 ml-6"
        type="button"
        onClick={() => RemoveProject(id)}
      >
        {deleteProject ? (
          <p className="text-white">Projet Supprimé</p>
        ) : (
          <p className="text-white">Supprimer le projet</p>
        )}
      </button>
    </div>
  );
}
