import './LocationCards.css';

const LocationCards = ({ Region,destination, country, details, onBookNow }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="destination">{destination}</h3>
        <p className="country">{country}</p>
        <button className="details" onClick={details}>
          DETAILS
        </button>
        <button className="book-now" onClick={onBookNow}>
          BOOK HERE
        </button>
      </div>
    </div>
  );
};

export default LocationCards;