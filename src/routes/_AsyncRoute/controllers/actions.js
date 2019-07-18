export const types = {
  ACTION_TYPE: 'ACTION_TYPE'
};


export const actionCreator = data => ({
  type: types.ACTION_TYPE,
  payload: {
    data
  },
});
