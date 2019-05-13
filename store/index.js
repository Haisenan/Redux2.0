//引入 redux
import {createStore,combineReducers} from 'redux';
import reducer1 from './user.js';
import reducer2 from './guanli.js';


// 把多个 reducer  合并为一个Json 给他放入store
   let reducers = combineReducers({
     user:reducer1,
     guanli:reducer2
   });

   // 2.创建store存储对象
   // export const store = createStore(reducer);
   export default createStore(reducers);
