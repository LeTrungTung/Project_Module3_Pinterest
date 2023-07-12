const userRouter = require('./user.route');
const imageRouter = require('./image.route');
const commentRouter = require('./comment.route');

function Routes(app) {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/image', imageRouter);
  app.use('/api/v1/comment', commentRouter);
  app.use('/', (req, res) => {
    res.json('Hello Project Pinterest');
  });
}

module.exports = Routes;
