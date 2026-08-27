export default function reducer(state, action) {
  switch(action.type){
    case "INC" : 
      return (state += 1);
    case "DEC" :
      let newState = 0;
      state >= 1 ? (newState = state - 1) : (newState = 0);
      return newState;
    default:
      return state;
  }
}
