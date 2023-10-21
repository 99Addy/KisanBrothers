const express = require('express')
const cors = require('cors')
const sdk = require('node-appwrite');
const { ID } = require('appwrite');
const app = express();

//middleware
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(express.json());

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
.setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
.setProject('KisanBrothers')                // Your project ID
.setKey('89f9fc3eb6b97facad6371d2c888c61bbbc07d4f8e4abb95113051790afa7d3c21484a499ae476f01cea9060905ff068927410abe1f29679c858846ee903e7adc1f3c93dd8253f55240bffdbd788ff8f8992e364ff072e489a3a8b21673578d31e5dd9a5ffef7965d8677c64fa5774fdad7ba79b8f8f395e3ca64ec4517eba4d');         // Your secret API key

app.get('/api', (req, res) => {
    res.json({ "users" : ["userOne", "usertwo", "userThree" ]})
})

app.post('/api/seller_data', (req,res) => {

    // console.log(req.body);
    const email = req.body['email']

    databases
    .createCollection('64f23174a57eb3af979a', ID.unique(), `${email}_db`)
    .then(function(response) {
        console.log('Collection created');
    }, function(error) {
        console.log(error);
    })
    

})

app.listen(5000, () => {console.log("Server started on 5000");})
