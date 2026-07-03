import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__text">
          <span className="cta__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 4.5L3 11.5L10.5 13.5L12.5 21L21 4.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div>
            <h2 className="cta__title">Ready to start your journey?</h2>
            <p className="cta__subtitle">Book your next adventure with Travelly today!</p>
          </div>
        </div>
        <a href="#book" className="btn btn-light cta__btn">
          Book Now
          <span className="btn-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}

export default CTA
