const models = require("../models");

class ProjectTechController {
  static browse = (req, res) => {
    models.project_tech
      .findTech()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.project_tech
      .findTechno(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const projectTech = req.body;

    // TODO validations (length, format...)

    models.project_tech
      .insert(projectTech)
      .then(([result]) => {
        res.status(201).send({ ...projectTech, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.project_tech
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectTechController;
