// const { Databases } = require('appwrite');
// const { fetchImg } = require('./appwrite-storage')
// const client = require('./appwrite-initialize')

import { Databases } from 'appwrite';
import { fetchImg } from './appwrite-storage'
import { client } from './appwrite-initialize';

const databases = new Databases(client);

const data = databases.listDocuments(
    'Dawai-db',
    'dawaiyan'
);


async function fetchData() {
    const db = await data;
    const arr = db['documents'];
    // console.log(arr[0]);

    arr.forEach(ele => {
        const url = fetchImg('Dawai-storage', ele.$id);
        ele['url'] = url['href']
    })
    // console.log(arr);
    return arr;
}

// data.then(function (response) {
//     arr = response['documents']
//     console.log(arr);

// }, function (error) {
//     console.log("Error:",error);
// });

export {fetchData}
// module.exports = {fetchData}

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log("Error:",error);
// });