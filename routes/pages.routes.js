const router = require('express').Router();
const pagesWebController = require("../controllers/pages.controller")

//DEFINIMOS ENDPOINTS ->rutas definen qué función se ejecuta para cada URL
router.get("/", pagesWebController.renderHome);
router.get("/about", pagesWebController.renderAbout);
router.get("/location", pagesWebController.renderLocation);
router.get("/mission", pagesWebController.renderMission);
router.get("/contact", pagesWebController.renderContact);

//🏠 http://localhost:3000/
//ℹ️ http://localhost:3000/about
//📍 http://localhost:3000/location
//🎯 http://localhost:3000/mission
//📞 http://localhost:3000/contact

module.exports = router;