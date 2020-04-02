import React from 'react';
const Videodetail =(props)=>{
    if(!props.videoitem){
        return <div>Loading...</div>
    }
    const videosrc= `https://www.youtube.com/embed/${props.videoitem.id.videoId}`
    return (
        <div>
        <div className='ui embed'>
        <iframe  title='video player' src={videosrc}/>
        </div>
        <div className='ui segment'>
        <h3 className='ui header'>{props.videoitem.snippet.title}</h3>
        <p>{props.videoitem.snippet.description}</p>
        
        </div>
        </div>
    )
}
export default Videodetail;