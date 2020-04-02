import React from 'react';
import './videoitem.css'

const Videoitem =(props)=>{
    return <div onClick={()=>{props.onvideoselect(props.videoitem)}} className=' video-item item' > 
   <img alt={props.videoitem.snippet.title} className='ui image' src= {props.videoitem.snippet.thumbnails.medium.url} />
   <div className= 'content'>
   <div className='header' >{props.videoitem.snippet.title}</div>
   </div>
     </div>
}
export default Videoitem;