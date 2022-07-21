const express = require("express");

const { ProjectController } = require("./controllers");
const { TechController } = require("./controllers");
const { ProjectTechController } = require("./controllers");

const router = express.Router();

router.get("/project", ProjectController.browse);
router.get("/project/:id", ProjectController.read);
router.put("/project/:id", ProjectController.edit);
router.post("/project", ProjectController.add);
router.delete("/project/:id", ProjectController.delete);

router.get("/tech", TechController.browse);
router.get("/tech/:id", TechController.read);
router.put("/tech/:id", TechController.edit);
router.post("/tech", TechController.add);
router.delete("/tech/:id", TechController.delete);

router.get("/project_tech", ProjectTechController.browse);
router.get("/project_tech/:id", ProjectTechController.read);
router.post("/projec_tech", ProjectTechController.add);

module.exports = router;
