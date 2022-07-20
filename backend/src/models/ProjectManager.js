const AbstractManager = require("./AbstractManager");
const ProjectTechManager = require("./ProjectTechManager");
const TechManager = require("./TechManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  findTech() {
    return this.connection.query(
      `SELECT p.id, p.name, t.techno FROM ${ProjectManager.table} p JOIN ${ProjectTechManager.table} AS pt ON p.id = pt.project_id JOIN ${TechManager.table} AS t ON t.id = pt.tech_id;`
    );
  }

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name, description, date, image, link) values (?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.date,
        project.image,
        project.link,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `UPDATE ${ProjectManager.table} SET ? WHERE id = ?`,
      [project, project.id]
    );
  }
}

module.exports = ProjectManager;
