import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Select from 'react-select';
import SearchEntry from './SearchEntry';

const VideoSearch = (props) => { 
    const [query, setQuery] = useState(' ')
    const [submit, setSubmit] = useState(' ')

    const fullUrl = `http://localhost:3000/videos?query=<${submit}>`;

    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect (() => {
        axios.get(fullUrl)
        .then((response) => {
        const videoList = response.data;
        console.log(videoList);
        setVideos(videoList);
        })
        .catch((error) => {
        setErrors(error.message);
        console.log(error.message);
        })
    }, [submit, fullUrl])

    const onSearchChange = (event) => {
        setQuery(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(query);

    }

    videos.sort((a,b) => (a.title > b.title) ? 1 : -1)





    return (
        <div className='videoSearch'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Search Video by Title" onChange={onSearchChange} value={query}/>
                <input type="submit" value="Submit" />
            </form>
            <ul>
                {videos.map( (video) => {
                return (<li key={video.external_id}>{<SearchEntry id={video.external_id} title={video.title} image_url={video.image_url} release_date={video.release_date} overview={video.overview}/>}</li>);
                })
                }
            </ul>
        </div>
    )


}

VideoSearch.propTypes = {
}

export default VideoSearch;