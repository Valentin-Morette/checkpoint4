const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

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
