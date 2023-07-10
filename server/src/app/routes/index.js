const userRouter = require('./user.route');
const imageRouter = require('./image.route');

function Routes(app) {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/image', imageRouter);
  app.use('/', (req, res) => {
    res.json('Hello Project Pinterest');
  });
}

module.exports = Routes;
