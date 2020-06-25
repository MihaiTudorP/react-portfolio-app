import React, {Component} from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profilePicture'/>
                <h1>Hello!</h1>
                <p>My name is Mihai-Tudor. I am a software developer</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio?(
                    <div>
                        <p>I live in Bucharest and I code every day.</p>
                        <p>My favorite language is Java and I think Spring is awesome.</p>
                        <p>Beside coding, I also love dancing and cycling.</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ): (<div><button onClick={this.toggleDisplayBio}>Read more</button></div>)}
                    <hr />
                    <Projects />
                    <hr />
                    <SocialProfiles />
            </div>
        )
    }
}

export default App