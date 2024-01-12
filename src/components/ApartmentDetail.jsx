import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApartmentById } from '../mockApi';
import "./ApartmentDetail.css";
import { WhatsappShareButton,TelegramShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';


function ApartmentDetail() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [editingCommentIndex, setEditingCommentIndex] = useState(-1);
  const [comments, setComments] = useState([]); 
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);



  const handleBooking = (e) => {
    e.preventDefault();
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    if (endDateObj.getTime() < startDateObj.getTime()) {
      alert('The end date of the booking cannot be earlier than the start date!');
      return;
    }

    if (!startDateObj || !endDateObj || isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
      console.error('Invalid date format');
      return;
    }
    // Calculate the time difference
    const differenceInTime = endDateObj.getTime() - startDateObj.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    // Assuming apartment.price is the price per day
    const pricePerDay = apartment.price/30;
    const totalPrice = pricePerDay * differenceInDays;

    console.log(`Total price: ${totalPrice} for ${differenceInDays} days`);
    setTotalPrice(totalPrice);
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('The payment was successfully completed! The apartment is booked.');
    setShowPaymentForm(false);
  };
  
  

  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('apartmentComments', JSON.stringify(comments));
  };
  
  const loadCommentsFromLocalStorage = () => {
    const storedComments = localStorage.getItem('apartmentComments');
    return storedComments ? JSON.parse(storedComments) : [];
  };

  

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    setNewComment('');
  };

  const updateComment = (index, comment) => {
    const updatedComments = [...comments];
    updatedComments[index] = comment;
    setComments(updatedComments);
    setEditingCommentIndex(-1);
    setNewComment('');
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };


  const handleEditComment = (index) => {
    setEditingCommentIndex(index);
    setNewComment(comments[index]);
  };

  
  

  const shareCurrentPageWithWhatsApp = () => {
    const currentUrl = window.location.href;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(currentUrl)}`;
    window.location.href = whatsappUrl;
  };
  

  const shareCurrentPageWithTelegram = () => {
    const currentUrl = window.location.href;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`;
    window.open(telegramUrl, '_blank');
  };
  
  const handleAddComment = () => {
    if (newComment) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');
    }
  };
  
  const handleUpdateComment = () => {
    if (newComment && editingCommentIndex !== -1) {
      const updatedComments = [...comments];
      updatedComments[editingCommentIndex] = newComment;
      setComments(updatedComments);
      setEditingCommentIndex(-1);
      setNewComment('');
    }
  };
  
  useEffect(() => {
    const storedComments = loadCommentsFromLocalStorage();
    setComments(storedComments);
  }, []);
  
  useEffect(() => {
    saveCommentsToLocalStorage(comments);
  }, [comments]);
  
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
        <div>
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
          <p className='price-section'>Price: <span>{apartment.price} tg/month</span></p>
            <WhatsappShareButton className='whatsapp' url = {window.location.href}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </WhatsappShareButton>
            <TelegramShareButton className='telegram' url = {window.location.href}>
              <FontAwesomeIcon icon={faTelegram} />
            </TelegramShareButton>
            <div> 
          <h3 className='author-section'>Author of the ad: <span>{apartment.author}</span></h3>
          <p>Contacts: {apartment.number}</p>
        </div>

        <form onSubmit={handleBooking} className='formCont'>
          <label htmlFor="start-date" id='start'>Booking start date:</label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor="end-date" id='end'>Booking end date:</label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button type="submit" className='subButt'>Book</button>
        </form>

        {showPaymentForm && (
          <form className="payment-form" onSubmit={handlePaymentSubmit}>
            <p>Total Amount: {totalPrice} tg</p>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiration Date" />
            <input type="text" placeholder="CVV" />
            <button type="submit">Pay Now</button>
          </form>
        )}
        
       <div className='line'>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='add-comment'
        />
        <button className='editSend' onClick={editingCommentIndex === -1 ? handleAddComment : handleUpdateComment}>
          {editingCommentIndex === -1 ? 'Send' : 'Update'}
        </button>
      </div>

      <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment-box">
            <p> <strong> {comment} </strong> </p>
              <button className='delete_button' onClick={() => deleteComment(index)} >Delete</button>
              <button className='edit_button'
              onClick={() => handleEditComment(index)}>Edit</button>
          </div>
        ))}
        </div>

        </div>
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