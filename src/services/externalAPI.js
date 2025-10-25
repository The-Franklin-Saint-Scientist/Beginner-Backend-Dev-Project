import axios from 'axios';
import config from '../config/index.js';


const typicodeAPI = axios.create({
    baseURL: config.TYPICODE_API_URL,
    timeout: 5000,
    headers: {
        Authorization: config.TYPICODE_API_KEY,
        "Content-Type": "application/json"
    },
});

function getPublicProfiles() {
    try {
        const response = await typicodeAPI.get('/profiles');
        return response;
    } catch (error) {
        console.error('Error fetching public profiles:', error);
    }
}



function getPublicPosts() {
    try {
        const response = await typicodeAPI.get('/posts', {params: {postid}});
        return response;
    } catch (error) {
        console.error('Error fetching public posts:', error);
    }
}



function sendPublicUser(firstName, lastName) {
    try {
        const response = await typicodeAPI.post('/users', {firstName, lastName});
        return response;
    } catch (error) {
        console.error('Error sending public posts:', error);
    }
}


export default {
    getPublicProfiles,
    getPublicPosts,
    sendPublicUser,
};