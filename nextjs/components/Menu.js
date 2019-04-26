import {AmpIncludeAmpSidebar} from './amp/AmpInclude';
import Social from './Social';

export default () => (
  <amp-sidebar id="header-sidebar" layout="nodisplay">
    <div className="menu-header">
      <div
        role="button"
        aria-label="close sidebar"
        on="tap:header-sidebar.toggle"
        tabIndex="0"
        className="menu-close-button">
        ✕
      </div>
    </div>
    <nav className="menu">
      <ul className="label">
        <li className="logo">
          <a href="/" className="block">
            <amp-img
              src="static/img/logo-nav.png"
              width="180"
              height="73"
              layout="intrinsic"
              alt="Company logo"
              noloading="">
              <div placeholder="" className="loading" />
            </amp-img>
          </a>
        </li>
        <li>
          <a href="/product-listing?gender=women&category=shirts">Women</a>
        </li>
        <li className="sub-item">
          <a href="/product-listing?gender=women&category=shirts">
            Women's Shirts
          </a>
        </li>
        <li className="sub-item">
          <a href="/product-listing?gender=women&category=shorts">
            Women's Shorts
          </a>
        </li>
        <li>
          <a href="/product-listing?gender=men&category=shirts">Men</a>
        </li>
        <li className="sub-item">
          <a href="/product-listing?gender=men&category=shirts">Men's Shirts</a>
        </li>
        <li className="sub-item">
          <a href="/product-listing?gender=men&category=shorts">Men's Shorts</a>
        </li>
        <li>
          <a href="/blog-listing.html">Blog</a>
        </li>
        <li>
          <a href="/contact.html">Contact us</a>
        </li>
      </ul>
    </nav>
    <h3>follow us</h3>
    <Social />
    <ul className="faq">
      <li>
        <a href="#" className="text-decoration-none">
          Size Guide
        </a>
      </li>
      <li>
        <a href="#" className="text-decoration-none">
          Returns Policy
        </a>
      </li>
      <li>
        <a href="#" className="text-decoration-none">
          Cookie &amp; privacy policy
        </a>
      </li>
    </ul>

    <style jsx global>{`
      amp-sidebar {
        background-color: #fff;
        color: #000;
        min-width: 300px;
        width: 350px;
        padding: 0 1.5rem;
        margin-bottom: 1.5rem;
        height: 100%;
      }

      amp-sidebar h3 {
        font-size: 0.94rem;
        padding-top: 1.5rem;
      }

      amp-sidebar .faq {
        width: 100%;
        color: #222;
        font-family: Cardo, serif;
        padding-top: 1rem li;
        padding-top-line-height: normal;
        padding-top-padding: 0 0 0.5rem;
      }

      .amp-mode-mouse amp-sidebar .faq li:hover {
        text-decoration: underline;
      }

      .menu-close-button {
        margin-top: 1rem;
        font-size: 1.5rem;
        line-height: 2.5rem;
        top: 0;
      }

      .menu {
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      .menu a {
        font-family: Open Sans Condensed, sans-serif;
        font-size: 1.75rem;
        font-weight: 700;
        line-height: normal;
        display: inline-block;
        position: relative;
      }

      .menu li {
        color: #222;
        margin-top: 1rem;
      }

      .menu li:active,
      .menu li:focus,
      .menu li:hover {
        opacity: 1;
      }

      .menu li.logo,
      .menu li.logo a {
        margin: 0;
        text-align: center;
      }

      .menu li amp-img {
        display: inline-block;
        width: 120px;
      }

      .menu .label {
        color: inherit;
      }

      .menu .label li:not(.logo) {
        padding: 6px;
      }

      .menu .sub-item {
        margin: 0;
      }

      .menu .sub-item a {
        font-size: 0.94rem;
        line-height: 0.94rem;
        margin: 0;
        text-transform: none;
      }

      .menu .sub-item a::before {
        content: '›';
        margin: 2px 4px 0 14px;
      }

      .amp-mode-mouse .menu li:after {
        background-color: #222;
        left: 0;
        position: absolute;
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: left center;
        -ms-transform-origin: left center;
        transform-origin: left center;
        -webkit-transition: -webkit-transform 0.3s
          cubic-bezier(0.19, 1, 0.22, 1);
        transition: -webkit-transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        -o-transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1),
          -webkit-transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        width: 100%;
        bottom: 0;
        height: 2px;
        content: '';
        display: block;
      }

      .amp-mode-mouse .menu li:hover:after {
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1);
      }

      .menu-header {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        line-height: 3.5rem;
        min-height: 3.5rem;
      }

      @media (min-width: 52.06rem) {
        amp-sidebar {
          width: 25%;
        }

        amp-sidebar.menu-button {
          margin-top: 0.5rem;
          padding-top: 0;
        }
      }
    `}</style>

    <AmpIncludeAmpSidebar />
  </amp-sidebar>
);
