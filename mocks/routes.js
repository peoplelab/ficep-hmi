const url = {
  login: '/api/v1/Token',
  logout: '/api/v1/Users/Logout',
  tools: '/api/v1/odata/tools',
  tool: '/api/v1/tools',
  cultures: '/api/v1/Cultures',
  fnc: '/api/v1/odata/tools/upload/fnc/paf',
};

module.exports = [
  {
    "url": url.login,
    "api": require(`.${url.login}`),
  },
  {
    "url": url.logout,
    "api": require(`.${url.logout}`),
  },
  {
    "url": `${url.tools}/attributes/:toolTypeId`,
    "api": require(`.${url.tools}/attributes/toolTypeId`),
  },
  {
    "url": `${url.tools}/categories`,
    "api": require(`.${url.tools}/categories`),
  },
  {
    "url": `${url.tool}/:id`,
    "api": require(`.${url.tool}/id`),
  },
  {
    "url": url.tools,
    "api": require(`.${url.tools}`),
  },
  {
    "url": `${url.tools}/Types/:categoryId`,
    "api": require(`.${url.tools}/Types/categoryId`),
  },
  {
    "url": url.cultures,
    "api": require(`.${url.cultures}`),
  },
  {
    "url": `${url.cultures}/:id`,
    "api": require(`.${url.cultures}/id`),
  },
  {
    "url": url.fnc,
    "api": require(`.${url.fnc}`),
  },
];
