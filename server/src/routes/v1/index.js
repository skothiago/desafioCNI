const express = require('express');
const pessoaRoute = require('./pessoa.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [

  {
    path: '/pessoa',
    route: pessoaRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
