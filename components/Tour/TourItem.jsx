import './TourItem.css';

// eslint-disable-next-line react/prop-types
export const TourItem= ({image, title, price, stars }) => {
  return (
    <div className="card">
      <div className="card-image" 
        style={{ backgroundImage: `url(${image})` }}>
        <div className="card-rating">
          <span>{stars} &#9733;</span>
        </div>
      </div>
      <div className="card-content">
        <div>
            <h3>{title}</h3>
            <p className="price">
            <strong className='strongText'>{price}</strong>/person
            </p>
        </div>
        <button className="arrow-button">&#x27A4;</button>
      </div>
    </div>
  );
};

