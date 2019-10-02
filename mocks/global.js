const responseUsersList = require('./default-responses/users-get-list.json');
const responseGroupsList = require('./default-responses/groups-get-list.json');


// Login
global.login = {
  currentUser: '',
  username: [
    'admin',
    'super',
    'user',
    'Alfred Marakakhov',
    'Maurizia Gambelli',
    'Stephan Kuttingen',
    'Example.Test',
    'test1',
    'test2',
    'test3',
    'test4',
  ],
  password: 'mitrol2019',
  refreshToken: '',
  issuedAt: null,
  expiredAt: null,
  refreshExpiredAt: null,
};

// logged
global.logged = {
  accessToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiIxZjJhYzk0Ny03ODlmLTQ1NzItODA3YS0yNDBmYjcyOGY3NDQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiVXNlcm5hbWVcIjpcImFkbWluXCIsXCJBY2Nlc3NUb2tlblwiOm51bGwsXCJSZWZyZXNoVG9rZW5cIjpudWxsLFwiQ3VsdHVyZVwiOlwiaXQtSVRcIixcIkdyb3Vwc1wiOltcIkFETUlOXCJdLFwiUGVybWlzc2lvbnNcIjpbXCJHUk9VUF9NQU5BR0VNRU5UXCIsXCJUT09MX01BTkFHRU1FTlRcIixcIlVTRVJfTUFOQUdFTUVOVFwiLFwiVklFV19HUk9VUFwiLFwiVklFV19HUk9VUFNcIixcIlZJRVdfVE9PTFwiLFwiVklFV19UT09MU1wiLFwiVklFV19VU0VSXCIsXCJWSUVXX1VTRVJTXCIsXCJWRVJTSU9OX01BTkFHRU1FTlRcIixcIlNFRURfVE9PTFNcIixcIlNFRURfVVNFUlNcIixcIkVESVRfU0VUVElOR1NcIixcIlZJRVdfVE9PTEhPTERFUlNcIixcIlRPT0xIT0RFUl9NQU5BR0VNRU5UXCJdLFwiU2Vzc2lvbklkXCI6XCIyMmM4YTNmOC1mZTkxLTQ5NTYtOGFkZC00ZmY5OGI5MWRlNTRcIixcIkV4cGlyZWRBdFwiOm51bGwsXCJTZXNzaW9uTG9nSWRcIjowLFwiUmVmcmVzaEV4cGlyZWRBdFwiOm51bGwsXCJJc3N1ZWRBdFwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwiLFwiVXNlcklkXCI6MX0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTiIsIm5iZiI6MTU2Mzc5NTkyNSwiZXhwIjoxNTYzNzk5NTI1LCJpc3MiOiJtaXRyb2wuaXQiLCJhdWQiOiJNaXRyb2xBdWRpZW5jZSJ9.p7nFM5hUyPHxjGMl3jhNBUr3p4tL0UGNU09Av3D2ttE',
  sessionId: '22c8a3f8-fe91-4956-8add-4ff98b91de54',
};


// users & groups
global.users = responseUsersList;
global.groups = responseGroupsList;
