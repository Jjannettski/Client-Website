// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // This is the auto landing page when the user starts the server.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

   // cms route loads cms.html
   app.get("/cms2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms2.html"));
  });

    // signin route loads signin.html
    app.get("/signin", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

// blog route loads blog2.html
app.get("/blog2", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/blog2.html"));
});
// blog route loads blog3.html
app.get("/blog3", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/blog3.html"));
});

// Loads userblog.html
app.get("/userblog", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/userblog.html"));
});
// Loads userblog.html
app.get("/userblog1", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/userblog1.html"));
});
// Loads userblog.html
app.get("/userblog2", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/userblog2.html"));
});

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};
