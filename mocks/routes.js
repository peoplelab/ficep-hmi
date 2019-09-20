// const url = {
//   fnc: '/api/v1/odata/tools/upload/fnc/paf',
// };


module.exports = [
  // {
  //   "url": `/api/v1/odata/tools/attributes/:toolTypeId`,
  //   "api": require(`./api/v1/odata/tools/attributes`),
  // },
  // {
  //   "url": `/api/v1/odata/tools/categories`,
  //   "api": require(`./api/v1/odata/tools/categories`),
  // },
  // {
  //   "url": `/api/v1/odata/tools/Types/:categoryId`,
  //   "api": require(`./api/v1/odata/tools/Types`),
  // },

  {
    "url": '/api/v1/Cultures',
    "api": require(`./api/v1/Cultures`),
  },
  {
    "url": `/api/v1/Cultures/:id`,
    "api": require(`./api/v1/Cultures`),
  },

  {
    "url": '/api/v1/odata/groups/:id/permissions',
    "api": require(`./api/v1/odata/groups/permissions`),
  },
  {
    "url": `/api/v1/odata/Token/latest`,
    "api": require(`./api/v1/odata/Token/latest`),
  },
  {
    "url": '/api/v1/odata/tools',
    "api": require(`./api/v1/odata/tools`),
  },
  {
    "url": '/api/v1/odata/users',
    "api": require(`./api/v1/odata/users`),
  },
  {
    "url": '/api/v1/odata/users/export',
    "api": require(`./api/v1/odata/users/export`),
  },

  {
    "url": '/api/v1/Token',
    "api": require(`./api/v1/Token`),
  },
  {
    "url":`/api/v1/Token/:sessionId`,
    "api": require(`./api/v1/Token`),
  },

  {
    "url": `/api/v1/tools/:id`,
    "api": require(`./api/v1/tools`),
  },

  {
    "url": '/api/v1/users/:id',
    "api": require(`./api/v1/users`),
  },
  {
    "url": '/api/v1/users/logout',
    "api": require(`./api/v1/users/logout`),
  },
  {
    "url": '/api/v1/users/user/:id/:groupId',
    "api": require(`./api/v1/users/user`),
  },
  {
    "url": '/api/v1/users/user/:id/:groupId',
    "api": require(`./api/v1/users/user`),
  },
];
