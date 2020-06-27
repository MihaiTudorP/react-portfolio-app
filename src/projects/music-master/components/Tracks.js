import React, {Component} from 'react';

class Track extends Component {
    playAudio = previewUrl => () => {
        const parent = this.props.parent;
        const audio = new Audio(previewUrl);
        if(!parent.state.playing){
            audio.play();
            audio.addEventListener("ended", () => {parent.setState({audio: null, previewUrl: null, playing: false})})
            parent.setState({playing: true, audio: audio, previewUrl: previewUrl});
        } else {
            if (previewUrl === parent.state.previewUrl){
                parent.state.audio.pause();
                parent.setState({playing: false});
            } else {
                parent.state.audio.pause();
                parent.setState({audio: audio, previewUrl: previewUrl});
                audio.play();
                audio.addEventListener("ended", () => {parent.setState({audio: null, previewUrl: null, playing: false})})
            }
        }
    }

    trackIcon = track =>{
        const parent = this.props.parent;
        if (!track.preview_url) return (<span>N/A</span>);
        if (parent.state.playing && parent.state.previewUrl === track.preview_url)
        return (<span>| |</span>);
        return (<span>&#9654;</span>);
    }


    render(){
        const track = this.props.track;
        const {id, name, album, preview_url} = track;

        return(
            <div key={id} className = "card track-card" onClick={this.playAudio(preview_url)}>
                <div>
                    <img src={album.images[0].url} alt={name} className="card-img-top"/>
                    <p className="track-icon">{this.trackIcon(track)}</p>
                </div>
                <div className = "card-body">
                    <h5 className = "card-title">{name}</h5>
                </div>
            </div>
        );
    }
}

class Tracks extends Component{
    state = {playing: false, audio: null, previewUrl: null}
    render(){
        const {tracks} = this.props;

        return(
            <div className = "card tracks-container">
                <div className="tracks">
                    {tracks.map(track => <Track track={track} parent={this} key={track.id}/>)}
                </div>
            </div>
        )
    }
}

export default Tracks;