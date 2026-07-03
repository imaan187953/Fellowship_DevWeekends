import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Explore The World
            <br />
            Create <span className="hero__title-accent">Memories</span>
          </h1>
          <p className="hero__text">
            Discover breathtaking destinations, immerse in new cultures, and
            create unforgettable memories with Travelly.
          </p>
          <a href="#destinations" className="btn btn-primary hero__cta">
            Discover Destinations
            <span className="btn-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
            alt="Traveler wearing a sun hat sitting on a cliff, overlooking the sea and mountains"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
