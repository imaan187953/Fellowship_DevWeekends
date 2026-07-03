import './DestinationCard.css'

function DestinationCard({ image, country, name, rating, reviews }) {
  return (
    <article className="destination-card">
      <div className="destination-card__image-wrap">
        <img src={image} alt={`${name}, ${country}`} className="destination-card__image" />
        <span className="destination-card__badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22s7-6.55 7-12A7 7 0 0 0 5 10c0 5.45 7 12 7 12Z"
              fill="currentColor"
            />
          </svg>
          {country}
        </span>
      </div>
      <div className="destination-card__body">
        <h3 className="destination-card__name">{name}</h3>
        <p className="destination-card__rating">
          <span className="destination-card__star" aria-hidden="true">★</span>
          <span className="destination-card__rating-value">{rating.toFixed(1)}</span>
          <span className="destination-card__reviews">({reviews}+ reviews)</span>
        </p>
      </div>
    </article>
  )
}

export default DestinationCard
