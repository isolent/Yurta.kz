import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApartmentById } from '../mockApi';
import "./ApartmentDetail.css";
import { WhatsappShareButton } from 'react-share';

function ApartmentDetail() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [editingCommentIndex, setEditingCommentIndex] = useState(-1);
  const [comments, setComments] = useState([]); // Добавьте состояние для комментариев

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const updateComment = (index, comment) => {
    const updatedComments = [...comments];
    updatedComments[index] = comment;
    setComments(updatedComments);
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    if (newComment) {
      addComment(newComment);
      setNewComment('');
    }
  };

  const handleEditComment = (index) => {
    setEditingCommentIndex(index);
    setNewComment(comments[index]);
  };

  const handleUpdateComment = () => {
    if (newComment) {
      updateComment(editingCommentIndex, newComment);
      setEditingCommentIndex(-1);
      setNewComment('');
    }
  };

  const shareCurrentPageWithWhatsApp = () => {
    const currentUrl = window.location.href;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(currentUrl)}`;
    window.location.href = whatsappUrl;
  };


  useEffect(() => {
    fetchApartmentById(parseInt(id, 10))
      .then((data) => {
        setApartment(data);
      })
      .catch((error) => {
        console.error('Error loading apartment data:', error);
      });
  }, [id]);

  if (!apartment) {
    return <div>The apartment was not found.</div>;
  }

return (
    <div className='main'>
      <div>
        <div className='information'>
          <h2 className='info-section'>{apartment.rooms}-bedroom, monthly, {apartment.address}</h2>
          <p>{apartment.name}</p> 
          <p>{apartment.description}</p>
          <div className="description-section">
            {apartment.kitchen ? (
              <p>The apartment is fully furnished</p>) : (<p>The apartment is not fully furnished</p>)}
            {apartment.kitchen ? (
              <p>The kitchen is studio</p>) : (<p>The kitchen is studio</p>)}
          </div>
          <p>Floor: <span>{apartment.floor}</span></p>

          <div>
          <h3 className='advantages-section'>Advantages:</h3> 
          <ul>
              {apartment.advantages.map((advantage, index) => (
                <li className='list' key={index}>{advantage}</li>
              ))}
            </ul>
        </div>
        <WhatsappShareButton url={window.location.href}>
          Share this apartment via WhatsApp
        </WhatsappShareButton>

        </div>

        <div>
          <h3 className='price-section'>Price: <span>{apartment.price} tg/month</span></h3>
        </div>


        <div> 
          <h3 className='author-section'>Author of the ad: <span>{apartment.author}</span></h3>
          <p className='contacts'> Contacts: {apartment.number}</p>
        </div>
        
       <div className='line'>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='add-comment'
        />
        <button className='but' onClick={editingCommentIndex === -1 ? handleAddComment : handleUpdateComment}>
          {editingCommentIndex === -1 ? 'Send' : 'Update'}
        </button>
      </div>

      <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment-box">
            <p> <strong> {comment} </strong> </p>
            <div>
            <button  className='but'onClick={() => deleteComment(index)}>Delete</button>
            <button className='but' onClick={() => handleEditComment(index)}>Edit</button>
          </div>
          </div>
        ))}
      </div>
     

      <div className="photo-gallery">
          {apartment.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Apartment image ${index + 1}`}
              className="image"
            />
          ))}
    </div>


 </div>
);
};

export default ApartmentDetail;