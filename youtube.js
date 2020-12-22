import axios from 'axios';

const KEY = 'AIzaSyDhZ5EfO0QSeZS5nMgnXC0yGJgCc5kkKik';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY,
        
    }
});