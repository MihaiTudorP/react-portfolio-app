import React, {Component} from 'react';

class Search extends Component{
    state = {artistQuery: ''}
    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value});
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
          this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render(){
        return (
            <div className = "input-group mb-3 form-group">
            <input onChange = {this.updateArtistQuery} placeholder='Search for an Artist' className = 'form-control' onKeyPress={this.handleKeyPress}/>
            <div className="input-group-append">
              <button className='btn btn-outline-secondary' onClick={this.searchArtist}>Search</button>
            </div>
          </div>  
        )
    }
}

export default Search;