import axios from 'axios';

const KEY = "AIzaSyAe_PuNekPLxKHxe-P3aXCm1zuuPFa8AJs";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        key: KEY
    }
});