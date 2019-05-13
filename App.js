// 引入 Component  connect   父及桥梁
import React,{ Component } from 'react';
import {connect} from 'react-redux'
import {SET_NAME,ADD_AGE} from './actions/index.js'

// 引入路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Cmp1 from './Cmp1';
import Cmp2 from './Cmp2';

    class App extends Component{

      fn(){
          this.props.setName('this.props.setName 是 在action 也是props中传入的 ')
      }

      fn2(){
          this.props.addAge(1)
      }


      render(){
        return(

          <Router>
              <Link to='/'>首页</Link>
              <Link to='/news'>新闻1</Link>

              <Route path='/' exact component={Cmp1}></Route>
              <Route path='/news' exact component={Cmp2}></Route>

          </Router>
        )
      }
    }

    // export default App;
    //


    export default connect((state,props)=>{
      console.log(state);
        return state.guanli;
        // return {
        //   ...state,
        //   name:props.name
        // }
    },
    {
      setName(name){
        return{
          type:SET_NAME,
          name
        }
      },
      addAge(nl){
        return{
          type:ADD_AGE,
          nl
        }
      }
    })(App);
