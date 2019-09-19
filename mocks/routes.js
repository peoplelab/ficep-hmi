const url = {
  cultures: '/api/v1/Cultures',
  fnc: '/api/v1/odata/tools/upload/fnc/paf',
  login: '/api/v1/Token',
  logout: '/api/v1/Users/Logout',
  token: '/api/v1/odata/Token',
  tools: '/api/v1/odata/tools',
  tool: '/api/v1/tools',
  users: '/api/v1/odata/users',
};

module.exports = [
  {
    "url": url.login,
    "api": require(`.${url.login}`),
  },
  {
    "url": `${url.token}/latest`,
    "api": require(`.${url.token}/latest`),
  },
  {
    "url": url.logout,
    "api": require(`.${url.logout}`),
  },
  // {
  //   "url": `${url.tools}/attributes/:toolTypeId`,
  //   "api": require(`.${url.tools}/attributes`),
  // },
  // {
  //   "url": `${url.tools}/categories`,
  //   "api": require(`.${url.tools}/categories`),
  // },
  {
    "url": `${url.tool}/:id`,
    "api": require(`.${url.tool}`),
  },
  {
    "url": url.tools,
    "api": require(`.${url.tools}`),
  },
  {
    "url": url.users,
    "api": require(`.${url.users}`),
  },
  // {
  //   "url": `${url.tools}/Types/:categoryId`,
  //   "api": require(`.${url.tools}/Types`),
  // },
  {
    "url": url.cultures,
    "api": require(`.${url.cultures}`),
  },
  {
    "url": `${url.cultures}/:id`,
    "api": require(`.${url.cultures}`),
  },
];
