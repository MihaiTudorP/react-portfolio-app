import React, {Component} from 'react';
import Header from './Header';

const Joke = ({joke: {setup, punchline}}) => (
    <p style ={{margin: 20}}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: []}
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke: json}))
            .catch(error => alert(error.message));
    }

    fetchJokes= () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({jokes: json}))
            .catch(error => alert(error.message));
    }

    render(){
        const {setup, punchline} = this.state.joke;
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
                <hr />
                <h3>Want 10 new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {this.state.jokes.map(jk => (<Joke key= {jk.id} joke = {jk} />))}
            </div>
        )
    }
}

export default Jokes;