import React from 'react';
import ReactDOM from 'react-dom';


// import App from './App';
//
// ReactDOM.render(
//   <App/>,document.getElementById('box')
// )


import Slider from './Slider'
import './main.css'

import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
import Img4 from './images/4.jpg'
import Img5 from './images/5.jpg'
import Img6 from './images/6.jpg'
import Img7 from './images/7.jpg'


let imgs=[Img1,Img2,Img3,Img5,Img6]

ReactDOM.render(
   <Slider imgs={imgs}/>,document.getElementById('box2')
 )
