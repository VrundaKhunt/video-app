import React from "react";
import VideItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video)=>{
        return <VideItem key={video.id.videoId} onVideoSelect={onVideoSelect} vid={video}/>
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;