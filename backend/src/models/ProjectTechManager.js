const AbstractManager = require("./AbstractManager");
const ProjectManager = require("./ProjectManager");
const TechManager = require("./TechManager");

class ProjectTechManager extends AbstractManager {
  static table = "project_tech";

  findTech() {
    return this.connection.query(
      `SELECT p.id, p.name, t.techno FROM ${ProjectManager.table} p JOIN ${ProjectTechManager.table} AS pt ON p.id = pt.project_id JOIN ${TechManager.table} AS t ON t.id = pt.tech_id;`
    );
  }

  findTechno(projectTech) {
    return this.connection.query(
      `SELECT p.id, p.name, t.techno FROM ${ProjectManager.table} p JOIN ${ProjectTechManager.table} AS pt ON p.id = pt.project_id JOIN ${TechManager.table} AS t ON t.id = pt.tech_id WHERE p.id = ?;`,
      [projectTech.id]
    );
  }

  // SELECT p.id, p.name, t.techno FROM project p JOIN project_tech AS pt ON p.id = pt.project_id JOIN tech AS t ON t.id = pt.tech_id WHERE p.id = 1;

  insert(projectTech) {
    return this.connection.query(
      `insert into ${ProjectTechManager.table} (name, description, date, image, link) values (?, ?, ?, ?, ?)`,
      [
        projectTech.name,
        projectTech.description,
        projectTech.date,
        projectTech.image,
        projectTech.link,
      ]
    );
  }

  update(projectTech) {
    return this.connection.query(
      `UPDATE ${ProjectTechManager.table} SET ? WHERE id = ?`,
      [projectTech, projectTech.id]
    );
  }
}

module.exports = ProjectTechManager;
