import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
};

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});