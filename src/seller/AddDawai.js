import React, { useState } from 'react';
import './AddDawai.css';
import { ID, Storage, Databases, Query } from 'appwrite';
import { client } from '../appwrite-initialize';

const storage = new Storage(client);
const databases = new Databases(client);

function AddDawai(){
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleIconClick = () => {
        const fileInput = document.getElementById('uploader');
        fileInput.click();
    }

    const handleUpload = () => {
        if(!file){
            console.log('No file selected');
            return;
        }
        storage.createFile('Dawai-storage', ID.unique(), document.getElementById('uploader').files[0])
        .then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }

    const handleDawaiSearch = (e) => {
        setName(e.target.value);
        databases.listDocuments(
            'Dawai-db',
            'dawaiyan',
            [   
                Query.limit(5),
                Query.startsWith("name", name)
            ]
        )
        .then(function(response) {
            const results = response.documents.map((item) => item.name)
            setSearchResults(results);
            setShowDropdown(true);
            console.log(searchResults);
        }, function(error) {
            console.log(error);
        })
    }

    return(
        <div className="upload_dawai">
            <div className="dawai_name">
                <div className='dawai_search'>
                    <input className='dawai_searchInput' type='text' placeholder='Name of Dawai'
                     onChange={ handleDawaiSearch }/>
                </div>

                {showDropdown && (
                    <ul className='dropdown'>
                        {searchResults.map((result, index) => (
                            <li key={index} className='dropdown-item bg-red-600'>
                            {result}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="upload_section">
                <div className='upload_container'>
                    <img className='upload_image' onClick={ handleIconClick }
                    src='https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text-thumbnail.png' alt=''/>
                
                    <input hidden type='file' onChange={ (e) => { setFile(e.target.value)}} id='uploader'/>
                
                    <button className='upload_image_button' onClick={ handleUpload }> Upload </button>
                </div>
            </div>
        </div>
    )
}

export default AddDawai;