import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__logo">
          <span className="footer__logo-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 4.5L3 11.5L10.5 13.5L12.5 21L21 4.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          Travelly
        </a>
        <p className="footer__copy">
          &copy; {year} Travelly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
