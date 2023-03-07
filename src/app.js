const express = require('express');
require('express-async-errors');
const { errorHandler, validateJWT } = require('./middlewares');
const routes = require('./controllers');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', routes.login);
app.post('/user', routes.createUser);
app.get('/user', validateJWT, routes.getUsers);
app.get('/user/:id', validateJWT, routes.getUserById);
app.post('/categories', validateJWT, routes.createCategory);
app.get('/categories', validateJWT, routes.getCategories);
app.post('/post', validateJWT, routes.createPost);
app.get('/post', validateJWT, routes.getPosts);
app.get('/post/:id', validateJWT, routes.getPostById);
app.put('/post/:id', validateJWT, routes.updatePost);

app.use(errorHandler);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
