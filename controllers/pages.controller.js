const renderHome = (req, res) => {
  res.render("home", { title: "Inicio", message: "Bienvenido a nuestra página!" });
};

const renderAbout = (req, res) => {
  res.render("about", { title: "Quiénes Somos", message: "Somos una empresa dedicada a pasarnoslo bien" });
};

const renderLocation = (req, res) => {
  res.render("location", { title: "Dónde Estamos", message: "Nos encontramos en Asturias, España." });
};

const renderMission = (req, res) => {
  res.render("mission", { title: "Qué Hacemos", message: "Ofrecemos soluciones innovadoras para pasártelo genial." });
};

const renderContact = (req, res) => {
  res.render("contact", { title: "Contacto", message: "Puedes escribirnos a lucia@empresa.com" });
};

module.exports = {
  renderHome,
  renderAbout,
  renderLocation,
  renderMission,
  renderContact,
};
