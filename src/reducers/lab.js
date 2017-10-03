const lab = (state = {}, action) => {
  switch (action.type){
    case 'INIT_LAB':
      return action.results;
    default:
      return state;
  }
}

export default lab;
