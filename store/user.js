import {SET_NAME,ADD_AGE} from '../actions/index.js';


// 1.创建 rducer存储
 function reducer1(state={name:'stateDate',age:10},action){
  switch(action.type){
    case SET_NAME:
       return{
         ...state,
         name:action.name
       }

     case ADD_AGE:
       return {
         ...state,
         age:action.nl+state.age
       }
     default:
        return state;
  }

}


export default reducer1;
