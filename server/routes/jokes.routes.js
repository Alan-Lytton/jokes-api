const JokesRoutes = require('../controllers/jokes.controller');

module.exports = app =>{
    app.get("/api/jokes", JokesRoutes.findAllJokes);
    app.post("/api/jokes", JokesRoutes.createJoke);
    app.get("/api/jokes/:_id", JokesRoutes.findOneJoke);
    app.put("/api/jokes/:_id", JokesRoutes.updateJoke);
    app.delete("/api/jokes/:_id", JokesRoutes.deleteJoke)
}