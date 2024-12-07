import React, { useState, useEffect } from 'react';
import './Reviews.scss';
import monitor from '../../../assets/images/monitor.png';

const avatars = [
  { id: 1, img: '/avatars/avatar1.png', name: 'Avatar 1' },
  { id: 2, img: '/avatars/avatar2.png', name: 'Avatar 2' },
  { id: 3, img: '/avatars/avatar3.png', name: 'Avatar 3' },
];

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([
    {
      img: monitor,
      name: 'Jane Doe',
      position: 'CEO, CISCO GROUPS',
      review: 'Working with this team was an absolute delight. Their dedication and expertise exceeded our expectations!',
      rating: 5,
    },
    {
      img: monitor,
      name: 'John Smith',
      position: 'CTO, AWS CLOUD',
      review: 'The results speak for themselves. I highly recommend them to anyone looking for top-notch service.',
      rating: 5,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    position: '',
    review: '',
    img: null,
    rating: 0,
  });
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [reviewsData.length]);

  const handleReviewSubmit = () => {
    if (!newReview.name || !newReview.review) {
      alert('Please complete all fields');
      return;
    }

    const newReviewEntry = {
      img: newReview.img || selectedAvatar || monitor,
      name: newReview.name,
      position: newReview.position,
      review: newReview.review,
      rating: newReview.rating,
    };

    setReviewsData([...reviewsData, newReviewEntry]);
    setNewReview({ name: '', position: '', review: '', img: null, rating: 5 });
    setSelectedAvatar(null);
    setShowForm(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="reviews-page">
      <header className="reviews-header">
        <h1>What Our Clients Say</h1>
        <p>See how we’ve helped our clients achieve their goals.</p>
      </header>

      <div className="testimonials">
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="left-section">
              <img src={review.img} alt={review.name} className="client-photo" />
              <h3>{review.name}</h3>
              <p className="position">{review.position}</p>
            </div>
            <div className="right-section">
              <p className="review">{review.review}</p>
              <div className="rating">{'⭐'.repeat(review.rating)}</div>
            </div>
          </div>
        ))}
        <div className="dots">
          {reviewsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="reviews-cta">
        <p>Want to share your experience with us?</p>
        <button onClick={() => setShowForm(true)} className="leave-review-btn">
          Share
        </button>
      </div>

      {showForm && (
        <div className="review-form-modal">
          <button className="close-modal" onClick={() => setShowForm(false)}>
            &times;
          </button>
          <div className="review-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Your Role"
                value={newReview.position}
                onChange={(e) => setNewReview({ ...newReview, position: e.target.value })}
              />
              <textarea
                placeholder="Your Review"
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                required
              ></textarea>
              <div className="form-horizontal">
                <div className="file-upload">
                  <label htmlFor="file-input">Upload</label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                >
                  {[3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 && 's'}
                    </option>
                  ))}
                </select>
                <div className="avatar-section">
                  {avatars.map((avatar) => (
                    <img
                      key={avatar.id}
                      src={avatar.img}
                      alt={avatar.name}
                      onClick={() => setSelectedAvatar(avatar.img)}
                      className={selectedAvatar === avatar.img ? 'selected' : ''}
                    />
                  ))}
                </div>
              </div>
              <button onClick={handleReviewSubmit}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
