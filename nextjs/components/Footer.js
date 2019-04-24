import Social from './Social';

export default props => (
  <footer tabIndex="0" role="button">
    <style jsx global>{`
      footer {
        background-color: #222;
        color: #fff;
        text-align: center;
      }

      footer h3 {
        padding-top: 0;
        color: #fff;
      }

      footer hr {
        width: 100%;
        background-color: #4a4a4a;
      }

      footer nav {
        max-width: 1280px;
        margin: 0 auto;
      }

      footer nav h2 {
        color: #fff;
        font-size: 0.94rem;
        padding-bottom: 1rem;
      }

      .amp-mode-mouse footer a:hover {
        text-decoration: underline;
      }

      .footer-main {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .footer-section {
        width: 100%;
        padding-top: 1.5rem;
      }

      .footer-section h2 {
        font-size: 0.94rem;
        font-weight: 700;
        padding-bottom: 1rem;
        line-height: normal;
        letter-spacing: normal;
      }

      .footer-section ul {
        padding-bottom: 1.5rem;
      }

      .footer-section.social-section {
        padding: 2rem 0 1.5rem;
      }

      .footer-logo {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: right;
        padding-right: 20px;
      }

      @media (min-width: 52.06rem) {
        footer {
          text-align: initial;
        }

        footer nav {
          padding: 2.5rem 0;
        }

        .footer-section {
          width: 25%;
          padding: 0 2rem;
        }

        .footer-section.social-section {
          padding: 0 0 1.5rem;
        }

        .footer-section.social-section li:first-child a {
          padding-left: 0;
        }
      }
    `}</style>
    <nav>
      <ul className="footer-main">
        <li className="footer-section">
          <h2>About us</h2>
          <ul>
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">Returns Policy</a>
            </li>
            <li>
              <a href="#">Cookie &amp; privacy policy</a>
            </li>
          </ul>
          <hr className="md-hide lg-hide" />
        </li>
        <li className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="tel:+440000000000">+44(0)000 000 0000</a>
            </li>
            <li>
              <a href="mailto:info@BS-LDN">info@BS-LDN</a>
            </li>
            <li>
              <a href="#">Find a Store</a>
            </li>
          </ul>
          <hr className="md-hide lg-hide" />
        </li>
        <li className="footer-section social-section">
          <h2>follow us</h2>
          <Social />
        </li>
        <li className="footer-logo">
          <amp-img
            src="static/img/logo-footer.png"
            className="xs-hide sm-hide"
            width="180"
            height="75"
          />
        </li>
      </ul>
    </nav>
  </footer>
);
