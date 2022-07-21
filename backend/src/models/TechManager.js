const AbstractManager = require("./AbstractManager");

class TechManager extends AbstractManager {
  static table = "tech";

  insert(tech) {
    return this.connection.query(
      `insert into ${TechManager.table} (techno) values (?)`,
      [tech.techno]
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
