const userRouter = require('./user.route');
const imageRouter = require('./image.route');
const commentRouter = require('./comment.route');
const followRouter = require('./follow_user.route');

function Routes(app) {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/image', imageRouter);
  app.use('/api/v1/comment', commentRouter);
  app.use('/api/v1/follow', followRouter);

  // app.use('/api/v1/upload-one', oneRouter);
  // app.use('/api/v1/upload-many', manyRouter);

  app.use('/', (req, res) => {
    res.json('Hello Project Pinterest');
  });
}

module.exports = Routes;
