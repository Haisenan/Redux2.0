import React from 'react';              //react 必须的
import ReactDOM from 'react-dom';       //dom
import { Provider } from 'react-redux';   //外包
import store from './store/index.js';          //拿过来  的文件所有的起名字

import App from './App';
import * as serviceWorker from './serviceWorker';


      ReactDOM.render(
        <Provider store={store} >
          <App name="propsData" age="propsAge"/>
        </Provider>
        , document.getElementById('root'));

serviceWorker.unregister();




// 四部曲
   // 1.创建store
   // 2.创建 rducer
   // 3. 外包  相当于 render里面的 父div  将store中的 state数据通过这个外包标签传给所有的组件
   // 4.connect  相当于 所有的 组件和父组件的中间件  搭建桥梁
   //
