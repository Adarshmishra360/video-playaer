import React from 'react';

class Searchbar extends React.Component{
    state={text:''}

    oninputChange= (event)=>{
      this.setState({text:event.target.value});
    }
    onformSubmit=(event)=>{
        event.preventDefault();
        this.props.ontextSubmit(this.state.text);
    }

    render(){
        return(
            <div className='search-bar ui segment' >
            <form onSubmit={this.onformSubmit}  className='ui form'>
            <div className='field' >
            <label>Search videos</label>
            <input type='text' value={this.state.text} onChange={this.oninputChange}/>
            </div>
            </form>
            
            </div>
        )
    }
}
export default Searchbar;