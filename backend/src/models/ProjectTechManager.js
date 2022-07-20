const AbstractManager = require("./AbstractManager");

class ProjectTechManager extends AbstractManager {
  static table = "project_tech";

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
