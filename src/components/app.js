import React from 'react';
import Searchbar from './searchbar'
import youtube from '../api/youtube';
import Videolist from './videolist';
import Videodetail from './videodetail';

class App extends React.Component{
    state={video:[],selectedvideo:null}

    componentDidMount(){
        this.ontextSubmit('today news live')
    }
    ontextSubmit= async (text)=>{
     const response= await youtube.get('/search',{
           params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyBa7OFIwj7_ay-eQ_1D_XZ1CVaFraCMW6s',
               q:text
           }
       })
       this.setState({ video: response.data.items,
        selectedvideo:response.data.items[0]
    
    });
    }
    onvideoselect=(videoitem)=>{
        this.setState({selectedvideo:videoitem})

    }
    render(){
        return(
            <div className='ui container' >
            <Searchbar ontextSubmit={this.ontextSubmit}  />
            <div className='ui grid'>
            <div className='ui row'>
            <div className='eleven wide column'>
            <Videodetail videoitem={this.state.selectedvideo}/>
            
            </div>
            <div className='five wide column'>
            <Videolist onvideoselect={this.onvideoselect} video= {this.state.video} />
            </div>
            
            </div>
            
            </div>
            
           
            </div>
        )
    }
}
export default App;