import React from 'react';

import Img8 from './images/prev.png'
import Img9 from './images/next.png'

class Slider extends React.Component{
  constructor(){
    super();
    this.state={
      nowScroll:0 //0代表是第一张图片，1代表第二章图片
    }
  }
  scroll(num){
    let next=this.state.nowScroll+num;
    if (next>=this.props.imgs.length) {
      return this.setState({nowScroll:0})
    }
    if(next<0){
      return this.setState({nowScroll:this.props.imgs.length-1})
    }
    return this.setState({nowScroll:next})
  }
  handleClick(index){
    let n=index-this.state.nowScroll
    clearInterval(this.interval)
    this.scroll(n);
    this.goPlay();
  }
  goPlay(){
    this.interval=setInterval(()=>this.scroll(1),3000)
  }
  componentDidMount(){
    this.goPlay()
  }
  render(){
    let LiWidth=100/this.props.imgs.length+'%'
    let styles={
      ul:{
        width:this.props.imgs.length*100+'%',
        left:-this.state.nowScroll*100+'%'
      }
    }
    return(
      <div className='slider-wrap'>
        <ul style={styles.ul}>
          {this.props.imgs.map(item =><li key={Math.random()} style={{width:LiWidth,backgroundImage:`url(${item})`}}></li>)}
        </ul>
        <img className='prev' onClick={this.handleClick.bind(this,this.state.nowScroll-1)} src={Img8}/>
        <img className='next' onClick={this.handleClick.bind(this,this.state.nowScroll+1)} src={Img9}/>

        <div className='dotted'>
          {this.props.imgs.map( (item,index) =>
          <span key={Math.random()} onClick={this.handleClick.bind(this,index)}
          style={{backgroundColor:this.state.nowScroll==index ? 'red':'#ccc'}}></span>)}
        </div>
      </div>
    )
  }
}


export default Slider
