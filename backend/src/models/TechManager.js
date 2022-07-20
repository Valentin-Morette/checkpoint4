const AbstractManager = require("./AbstractManager");

class TechManager extends AbstractManager {
  static table = "tech";

  insert(tech) {
    return this.connection.query(
      `insert into ${TechManager.table} (name, description, date, image, link) values (?, ?, ?, ?, ?)`,
      [tech.name, tech.description, tech.date, tech.image, tech.link]
    );
  }

  update(tech) {
    return this.connection.query(
      `UPDATE ${TechManager.table} SET ? WHERE id = ?`,
      [tech, tech.id]
    );
  }
}

module.exports = TechManager;
