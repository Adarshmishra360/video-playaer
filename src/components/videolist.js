import React from 'react';
import Videoitem from './videoitem';

const Videolist=(props)=>{
  const renderedvideo=  props.video.map((videoitem)=>{
        return <Videoitem   key={videoitem.id.videoId} onvideoselect={props.onvideoselect} videoitem={videoitem} />
    })
    return <div className='ui relaxed divided list' >{renderedvideo}</div>
}
export default Videolist;