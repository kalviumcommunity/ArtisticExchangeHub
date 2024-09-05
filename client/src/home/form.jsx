import React, { useState } from 'react';
// import '../'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const newCard = {
                Resources: name,
                Links: link,
                Description: description,
                Img: image,
                created_by: created_by
            };

            await axios.post("https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/post", newCard)
                .then(response => console.log(response.data));

            // Clear the form fields after submission
            setName('');
            setLink('');
            setDescription('');
            setImage(null);
            setCreated_by('');

            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="add-container">
            <h1>Add New Art</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Created By"
                value={created_by}
                onChange={(e) => setCreated_by(e.target.value)}
            />
            <button onClick={handleClick}>Add Art</button>
        </div>
    );
};

export default Add;
