import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LibraryEntry = (props) => {
    
    return (
    <div> 
        <h5>{props.title} - {props.release_date}</h5>
        <img src={props.image_url} alt={props.title}/>
        {/* <p>
        <button 
            onClick={() => {props.searchCallback(
            {id: props.id, 
            title: props.title}
            )
            }
        }
        > 
            <img src={props.image_url} alt={props.title}/>
            <p>Select {props.title}</p>
        </button>
        </p> */}
    </div>
    )
    
}
    
    // for callback, need to have id come back up so we can pass it to rails
    // hold onto it (setState) then pass it
    LibraryEntry.propTypes = {
        title: PropTypes.string,
        id: PropTypes.number,
        libraryCallback: PropTypes.func.isRequired
    }
    
    
    export default LibraryEntry;

