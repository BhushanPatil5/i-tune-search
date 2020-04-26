import React, { useState } from 'react'

const SearchGrid = () => {
    // using react hooks
    const [searchedArtist, setSearchedArtist] = useState('');
    const [albumList, setAlbumList] = useState('');

    //call api and get the searchedArtist on search input
    const setSearchResult = event => {
        const ARTIST_NAME = searchedArtist;
        const FETCH_URL = `https://itunes.apple.com/search?term=${ARTIST_NAME}&entity=album`;
        fetch(FETCH_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                const albumArray = json.results
                setAlbumList(albumArray)
            }
            );
    }

    // mapping the albums
    const renderContent = () => {
        if(albumList && searchedArtist !== '') return <>{albumList.map((data, i) => getAlbums(data, i))}</>
    }

    // card
    const getAlbums = (data, i) => {
        // trunc albumname if its greater that 20
        const albumName = data.collectionName.length > 20 ? `${data.collectionName.substr(0, 17)}...` : `${data.collectionName}`;
        return (
            <div key={i} className="col-md-3 col-xs-6 mb-4" data-testid="card">
                <div className="card shadow br-rounded">
                    <img src={data.artworkUrl100} alt="Album Image" className="card-img-top br-rounded" />
                    <div className="card-body br-rounded">
                        <h5 className="card-title aclonica-font">{albumName}</h5>
                    </div>
                </div>
            </div>
        )
    }

    // container and input
    return (
        <div className="container">
            <div className="d-flex justify-content-center my-4">
                <div className="searchbar">
                    <input
                        className="search_input"
                        type="text"
                        name="search"
                        data-testid="input"
                        placeholder='Search for an Artist'
                        value={searchedArtist}
                        onChange={event => setSearchedArtist(event.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                setSearchResult()
                            }
                        }}
                    />
                    <a href="#" data-testid="submit" onClick={setSearchResult} className="search_icon"><i className="fa fa-search"></i></a>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3">
                {renderContent()}
            </div>
        </div>
    );
};

export default SearchGrid;