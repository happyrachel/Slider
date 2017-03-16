import React from 'react';

import Ceshi from './Ceshi.js'


class App extends React.Component{
  constructor(){
    super();
    this.state={num:0,show:true}
    console.log("initial state");
  }
  componentWillMount(){
    console.log("will mount")   //初始化，将要挂载
  }
  componentWillReceiveProps(nextProps){
    console.log('will receive====',nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('shoule update=====',nextProps,nextState)
    if(nextState.num<5){
      return true;
    }
      return false;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('will update=====',nextProps,nextState)
  }
  componentDidUpdate(prevProps,prevState){
    console.log('did update======',prevProps,prevState)
  }
  render(){
    return(
      <div>
        数值是：{this.state.num}<br/>
        <button onClick={()=>this.setState({num:this.state.num+1})}>确定</button>
        <button onClick={()=>this.setState({show:false})}>销毁</button>
        {this.state.show?<Ceshi childNum={this.state.num}/>:null}
      </div>
    )
  }
  componentDidMount(){
    console.log('did mount')
  }
}
export default App;
