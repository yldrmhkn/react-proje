import axios from 'axios';

export default async function getData(userId) {
    try {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = userResponse.data;

        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const postsData = postsResponse.data;

        const combinedData = {
            ...userData,
            posts: postsData
        };

        return combinedData;
    } catch (error) {
        console.error('Veri çekme işlemi sırasında bir hata oluştu:', error);
        throw error;
    }
}