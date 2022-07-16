import React from "react";
import axios from 'axios';

const KEY = 'AIzaSyAacGg0d6jwAJBmBTbvXrqMn-0PYOv8rhM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})