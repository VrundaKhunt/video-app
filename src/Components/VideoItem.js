import './VideoItem.css'
import React from "react";

const VideoItem = ({vid, onVideoSelect}) => {
    return (
        <div onClick={()=>onVideoSelect(vid)} className="video-item item">
            <img alt={vid.snippet.title} className="ui image" src={vid.snippet.thumbnails.default.url}/>
            <div className="content">
                <div className="header">{vid.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;