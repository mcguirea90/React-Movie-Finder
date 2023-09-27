import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="container__main">
        <div className="row__footer">
          <div className="footer__links">
            <a href="/" className="footer__link">Home</a>
            <a href="/" className="footer__link">Contact Us</a>
          </div>
          <div className="copyright">
            Copyright &copy; 2023, Andrew McGuire 
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer