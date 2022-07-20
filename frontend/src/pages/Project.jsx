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

  return allProjects && console.warn(allProjects);
}
