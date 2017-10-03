const work = (state = {}, action) => {
  switch (action.type){
    case 'INIT_WORK':
      return action.results;
    default:
      return state;
  }
}

export default work;
