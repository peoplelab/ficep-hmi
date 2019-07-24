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
    "path": `.${url.login}`,
  },
  {
    "url": url.logout,
    "path": `.${url.logout}`,
  },
  {
    "url": `${url.tools}/attributes/:toolTypeId`,
    "path": `.${url.tools}/attributes/toolTypeId`,
  },
  {
    "url": `${url.tools}/categories`,
    "path": `.${url.tools}/categories`,
  },
  {
    "url": `${url.tool}/:id`,
    "path": `.${url.tool}/id`,
  },
  {
    "url": url.tools,
    "path": `.${url.tools}`,
  },
  {
    "url": `${url.tools}/Types/:categoryId`,
    "path": `.${url.tools}/Types/categoryId`,
  },
  {
    "url": url.cultures,
    "path": `.${url.cultures}`,
  },
  {
    "url": `${url.cultures}/:id`,
    "path": `.${url.cultures}/id`,
  },
  {
    "url": url.fnc,
    "path": `.${url.fnc}`,
  },
];
