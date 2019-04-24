/*
Copyright 2017 The AMP Start Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import GlobalCss from '../components/GlobalCss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default () => (
  <>
    <GlobalCss />
    <style jsx global>{`
      .landing {
        max-width: none;
      }

      .hero-wrapper {
        overflow: hidden;
        text-align: center;
      }

      .hero-wrapper amp-img loading {
        margin-top: 200px;
      }

      .amp-mode-mouse .hero-wrapper amp-img {
        -webkit-transition: -webkit-transform 1s;
        transition: -webkit-transform 1s;
        -o-transition: transform 1s;
        transition: transform 1s;
        transition: transform 1s, -webkit-transform 1s;
      }

      .amp-mode-mouse .hero-wrapper:hover amp-img {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
      }

      .hero-content {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 3rem 1.5rem;
      }

      .hero-content h2 {
        font-size: 1.38rem;
        font-weight: 700;
      }

      .hero-content p {
        padding: 1rem 1rem 1.5rem;
        font-family: Cardo, serif;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      @media (min-width: 52.06rem) {
        .hero-wrapper {
          position: relative;
          text-align: left;
          color: #fff;
        }

        .hero-wrapper .button {
          margin-left: 2rem;
          background-color: #fff;
          border: none;
          color: #222;
          font-size: 0.94rem;
        }

        .hero-content {
          position: absolute;
          margin: 0 auto;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 0;
        }

        .hero-content h2 {
          color: #fff;
          font-size: 3.5rem;
          padding-left: 2rem;
          margin-bottom: 1rem;
          max-width: 500px;
          background: #00000066;
        }

        .hero-content p {
          font-size: 1rem;
          margin-bottom: 2rem;
          margin-left: 0;
          padding-left: 2rem;
          background: #00000066;
        }

        .hero-align {
          margin: 0 auto;
          width: 100%;
          max-width: 1280px;
        }

        .hero-content-theme-secondary,
        .hero-content-theme-secondary h2 {
          color: #222;
        }

        .button.button-lg-black {
          color: #fff;
          background-color: #222;
        }

        .amp-mode-mouse .hero-content-theme-secondary .button:hover {
          background-color: #fff;
          color: #222;
        }
      }
    `}</style>
    <Header pageType="index" />
    <Menu />
    <main id="content" role="main" className="landing">
      <section className="hero-wrapper">
        <a
          href="/product-listing?gender=women&category=shirts"
          className="block">
          <amp-img
            src="static/img/women-narrow.jpg"
            width="1.25"
            height="1"
            layout="responsive"
            media="(max-width: 52.06rem)"
            alt="Hero Landing 1"
            noloading="">
            <div placeholder="" className="loading" />
          </amp-img>
          <amp-img
            src="static/img/women-wide.jpg"
            width="2.5"
            height="1"
            layout="responsive"
            media="(min-width: 52.07rem)"
            alt="Hero Landing 1"
            noloading="">
            <div placeholder="" className="loading" />
          </amp-img>
          <div className="hero-content">
            <div className="hero-align">
              <h2>Women's Clothing</h2>
              <p>
                When the temperatures plummet, we look for clothing and clothing
                accessories to protect us from cold and wind chill.
              </p>
              <div className="button button-white caps">shop</div>
            </div>
          </div>
        </a>
      </section>
      <section className="hero-wrapper">
        <a href="/product-listing?gender=men&category=shirts" className="block">
          <amp-img
            src="static/img/men-narrow.jpg"
            width="1.25"
            height="1"
            layout="responsive"
            media="(max-width: 52.06rem)"
            alt="Hero Landing 1"
            noloading="">
            <div placeholder="" className="loading" />
          </amp-img>
          <amp-img
            src="static/img/men-wide.jpg"
            width="2.5"
            height="1"
            layout="responsive"
            media="(min-width: 52.07rem)"
            alt="Hero Landing 1"
            noloading="">
            <div placeholder="" className="loading" />
          </amp-img>
          <div className="hero-content">
            <div className="hero-align">
              <h2>Men's Clothing</h2>
              <p>
                With garments from over thirty of the industry’s leading
                manufacturers, Campmor has hundreds of Men’s jackets and vests
                from which to choose.
              </p>
              <div className="button button-white caps">shop</div>
            </div>
          </div>
        </a>
      </section>
      <section className="hero-wrapper">
        <a href="/blog-listing.html" className="block">
          <amp-img
            src="static/img/cookout-narrow.jpg"
            width="1.25"
            height="1"
            layout="responsive"
            media="(max-width: 52.06rem)"
            alt="Hero Landing 1"
            noloading="">
            <div placeholder="" className="loading" />
          </amp-img>
          <amp-img
            src="static/img/cookout-wide.jpg"
            width="2.5"
            height="1"
            layout="responsive"
            media="(min-width: 52.07rem)"
            alt="Hero Landing 1"
            noloading="">
            <div placeholder="" className="loading" />
          </amp-img>
          <div className="hero-content">
            <div className="hero-align">
              <h2>Camping is awesome</h2>
              <p>
                Check out our amazing words which we write about camping and
                stuff.
              </p>
              <div className="button button-white caps">read</div>
            </div>
          </div>
        </a>
      </section>
    </main>
    <Footer />
  </>
);
