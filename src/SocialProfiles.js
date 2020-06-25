import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles'

class SocialProfile extends Component{
    render(){
        const {link, image} = this.props.socialProfile;
        return (<span>
            <a href={link}>
                <img src={image} alt='Social Profile' style={{width: 35, height: 35, margin: 10}} />
            </a>           
        </span>);
    }
}

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(socialProfile => {
                            return (<SocialProfile key = {socialProfile.id} socialProfile = {socialProfile} /> );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;