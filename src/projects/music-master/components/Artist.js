import React from 'react';

const Artist = ({artist}) => {
    const {images, name, followers, genres} = artist;
    return(
        <div className = "card artist-card">
            <img src={images[0].url} alt={name} className="card-img-top"/>
            <div className="card-body">
                <h5>{name}</h5>
                <p className="card-text">{followers.total} followers</p>
                <p className="card-text">{genres.join(', ')}</p>
            </div>
        </div>
    )
}

export default Artist;