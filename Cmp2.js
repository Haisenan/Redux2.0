import React,{Component} from 'react';
// 嵌套路由
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Cmp001 from './Cmp001';
import Cmp002 from './Cmp002';
import Moren from './moren';

class Cmp2 extends Component{
  constructor(...args){
    super(...args);

    this.state={
      id : this.props.match.params.id
    }
  }

  componentDidUpdate(old_props,old_state){
    let id = this.props.match.params.id;
    let old_id = old_props.match.params.id;

    if(id!==old_id){
        console.log(old_props);
// 更新数据
//
        this.setState({
          id
        })

    }

  }

  render(){
    const path = this.props.match.path;
    return(
      <Router>
        <div>

          <h2>选择</h2>
          <Link to={`${path}/`}>默认选择的内容</Link>
          <br/>
          <Link to={`${path}/chinese`}>选择的中文</Link>
          <br/>
          <Link to={`${path}/english`}>选择的English</Link>

          <Route path={`${path}/`}  component={Moren}/>
          <Route path={`${path}/chinese`}  component={Cmp001}/>
          <Route path={`${path}/english`}  component={Cmp002}/>


        </div>
      </Router>
    )
  }
}


export default Cmp2;
