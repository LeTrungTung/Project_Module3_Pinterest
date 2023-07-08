const userRouter = require('./user.route')

function Routes(app) {
  app.use("/api/v1/user",userRouter)
  app.use("/", (req, res) => {
    res.json("Hello world")
  });
}

module.exports = Routes;
