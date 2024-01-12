
import "./Profile.css"
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('Username'); 
  const [userEmail, setUserEmail] = useState('example@gmail.com');
  const [userPhone, setUserPhone] = useState('+7 (777) 77 7777');
  const [tempName, setTempName] = useState(userName); 
  const [tempEmail, setTempEmail] = useState(userEmail); 
  const [tempPhone, setTempPhone] = useState(userPhone); 
  const [isEditing, setIsEditing] = useState(false);
  const [editingApartmentIndex, setEditingApartmentIndex] = useState(null);
  const [userApartments, setUserApartments] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newApartment, setNewApartment] = useState({
    name: '',
    address: '',
    price: 0,
    rooms: '',
    image: '',
  });

  const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setUserEmail(user.email);
                setTempEmail(user.email);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    if (isEditing) {
      setTempName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    if (isEditing) {
      setTempEmail(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    if (isEditing) {
      setTempPhone(e.target.value);
    }
  };

  const handleEditClick = () => {
    if (isEditing) {
     
      setUserName(tempName);
      setUserEmail(tempEmail);
      setUserPhone(tempPhone);
    } else {
      
      setTempName(userName);
      setTempEmail(userEmail);
      setTempPhone(userPhone);
    }
    setIsEditing(!isEditing);
  };

  const handleAddApartment = () => {
    if (
      newApartment.name &&
      newApartment.address &&
      newApartment.price &&
      newApartment.rooms
    ) {
      setUserApartments([...userApartments, newApartment]);
      setNewApartment({
        name: '',
        address: '',
        price: 0,
        rooms: '',
        image: '',
      });
    }else {
      alert("Please fill in all fields before adding a new apartment.");
    }
  };

  const handleDeleteApartment = (index) => {
    const updatedApartments = [...userApartments];
    updatedApartments.splice(index, 1);
    setUserApartments(updatedApartments);
  };

  const handleEditApartment = (index) => {
    setEditingApartmentIndex(index);
    const apartmentToEdit = userApartments[index];
    setNewApartment({
      name: apartmentToEdit.name,
      address: apartmentToEdit.address,
      price: apartmentToEdit.price,
      rooms: apartmentToEdit.rooms,
      image: apartmentToEdit.image,
    });
  };

  const handleUpdateApartment = (index) => {
    if (
      newApartment.name &&
      newApartment.address &&
      newApartment.price &&
      newApartment.rooms
    ) {
      const updatedApartments = [...userApartments];
      updatedApartments[index] = {
        name: newApartment.name,
        address: newApartment.address,
        price: newApartment.price,
        rooms: newApartment.rooms,
        image: newApartment.image,
      };
      setUserApartments(updatedApartments);
      setEditingApartmentIndex(null);
      setNewApartment({
        name: '',
        address: '',
        price: 0,
        rooms: '',
        image: '',
      });
    }
  };

  return (
    <div>
      <div className="user-profile">
        <div className="profile-image-container">
          <img
            src={profileImage || '/images/defaultProfile.jpg'} 
            alt="Profile"
            className="profile-image"
          />
        </div>

      <div className="profileEdit">
        

        <div className="user-details">
          <div className="user-name">
            <label htmlFor="userName">Username:< br /></label>
            {isEditing ? (
              <input
                type="text"
                id="userName"
                value={tempName}
                onChange={handleNameChange}
                className='textInput'
              />
            ) : (
              <span>{userName}</span>
            )}
          </div>
          <div className="user-email">
            <label htmlFor="userEmail">Email: <br /></label>
            {isEditing ? (
              <input
                type="email"
                id="userEmail"
                value={tempEmail}
                onChange={handleEmailChange}
                className='textInput'
              />
            ) : (
              <span>{userEmail}</span>
            )}
          </div>
          <div className="user-phone">
            <label htmlFor="userPhone">Phone: <br /></label>
            {isEditing ? (
              <input
                type="tel"
                id="userPhone"
                value={tempPhone}
                onChange={handlePhoneChange}
                className='textInput'
              />
            ) : (
              <span>{userPhone}</span>
            )}
          </div>
        </div>

        <br></br>
        {isEditing ? (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        ) : null}
      </div>
    </div>

    <button onClick={handleEditClick} className="editButton">
        {isEditing ? 'Save' : 'Edit'}
    </button>
    <br></br>
    
    <div className="newApartment">
      <h3>Add new apartment</h3>
      <label>Apartment Name</label>
      <input
          type="text"
          placeholder="Apartment Name"
          value={newApartment.name}
          onChange={(e) =>
            setNewApartment({ ...newApartment, name: e.target.value })
          }
          className='textInput'
        />
        <label>Apartment Address</label>
        <input
          type="text"
          placeholder="Apartment Address"
          value={newApartment.address}
          onChange={(e) =>
            setNewApartment({ ...newApartment, address: e.target.value })
          }
          className='textInput'
        />
        <label>Apartment Price</label>
        <br />
        <input
          type="number"
          placeholder="Apartment Price"
          value={newApartment.price}
          onChange={(e) =>
            setNewApartment({ ...newApartment, price: e.target.value })
          }
        />
        <br />
        <label>Number of Rooms</label>
        <input
          type="text"
          placeholder="Number of Rooms"
          value={newApartment.rooms}
          onChange={(e) =>
            setNewApartment({ ...newApartment, rooms: e.target.value })
          
          }
          className='textInput'
          
        />
        <label>Add image for your apartment</label>
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewApartment({ ...newApartment, image: e.target.files[0] })
          }
          className="imageForApartment"
        />
        <br />
        <button onClick={handleAddApartment} className="addButton">Add</button>
      </div>

      <div className="user-apartments">
        <h3>Your Apartments:</h3>
        {userApartments.length > 0 ? (
          userApartments.map((apartment, index) => (
            <div key={index} className="apartmentCard">
              <img src={URL.createObjectURL(apartment.image)} alt={apartment.name} className="imageAcpartment"/>
              <h3>{apartment.name}</h3>
              <p>Price: {apartment.price} tg. per month</p>
              <button onClick={() => handleEditApartment(index)} className="editApartmentButton">Edit</button>
              <button onClick={() => handleDeleteApartment(index)}className="deleteApartmentButton">Delete</button>
              {editingApartmentIndex === index && (
                <div className="newApartmentDetails">
                <input
                  type="text"
                  placeholder="Apartment Name"
                  value={newApartment.name}
                  onChange={(e) =>
                    setNewApartment({ ...newApartment, name: e.target.value })
                  }
                  className='textInput'
                />
                <input
                  type="text"
                  placeholder="Apartment Address"
                  value={newApartment.address}
                  onChange={(e) =>
                    setNewApartment({ ...newApartment, address: e.target.value })
                  }
                  className='textInput'
                />
                <input
                    type="number"
                    placeholder="Apartment Price"
                    value={newApartment.price}
                    onChange={(e) =>
                      setNewApartment({ ...newApartment, price: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Number of Rooms"
                    value={newApartment.rooms}
                    onChange={(e) =>
                      setNewApartment({ ...newApartment, rooms: e.target.value })
                    }
                    className='textInput'
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setNewApartment({ ...newApartment, image: e.target.files[0] })
                    }
                    className="imageForApartment"
                  />
                  <br />
                  <button onClick={() => handleUpdateApartment(index)}className="updateApartmentButton">Update</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Nothing Found</p>
        )}
      </div>

    </div>
  );
}

export default Profile;

