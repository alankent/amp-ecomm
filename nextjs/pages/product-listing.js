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
import {
  AmpIncludeAmpList,
  AmpIncludeAmpSelector,
} from '../components/amp/AmpIncludeCustomElement';
import AmpState from '../components/amp/AmpState';

export default (props) => (
  <>
    <GlobalCss />
    <style jsx global>{`
      .listing {
        max-width: none;
      }

      .listing amp-list {
        margin: 0 0.5rem;
      }

      .listing amp-list amp-img {
        margin: 2.5rem 0 1rem;
      }

      .listing .banner {
        width: 100%;
      }

      .listing .select-wrapper {
        margin: 0 4px;
      }

      .checkout-steps,
      .listing-filters {
        border-top: 1px solid #f3f3f3;
        border-bottom: 1px solid #f3f3f3;
      }

      .listing-filters {
        padding: 1rem;
      }

      .listing-filters select {
        color: #666;
      }

      .listing-filters label {
        display: block;
        margin-bottom: 0.45rem;
      }

      .listing-filters amp-selector button,
      .listing-content .side-panel button {
        color: #666;
      }

      .listing-filters amp-selector button[selected],
      .listing-content .side-panel button[selected] {
        color: #000;
      }

      .select-wrapper {
        display: inline-block;
      }

      .listing-content {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        max-width: 1280px;
        margin: 0 auto;
        padding-bottom: 2rem;
      }

      .listing-content .side-panel button,
      .listing-content .select-wrapper button {
        background: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-border-radius: 0px;
        border-radius: 0px;
        width: 80px;
        border-style: none;
      }

      .listing-container {
        width: 100%;
        padding: 1rem 0 1.5rem;
      }

      .listing-container amp-list {
        margin-top: 0.45rem;
      }

      .listing-header {
        position: relative;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .listing-header h1 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        font-size: 1.75rem;
        padding: 0 1rem;
        margin: 0 0 1rem;
      }

      .listing-product {
        position: relative;
        display: inline-block;
        min-height: 275px;
        width: 50%;
        padding: 0 0.5rem;
        margin-bottom: 1rem;
      }

      .listing-product h2 {
        font-size: 1rem;
      }

      .listing-product > div {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        position: relative;
        min-height: 275px;
      }

      @media (min-width: 52.06rem) {
        .listing .side-panel {
          position: -webkit-sticky;
          position: sticky;
          -webkit-align-self: center;
          -ms-flex-item-align: center;
          align-self: center;
          padding: 2rem 2rem 0 0;
        }

        .listing .side-panel h2 {
          font-size: 1.125rem;
          margin-bottom: 1rem;
        }

        .listing amp-list {
          margin: 0 -0.5rem;
        }

        .listing .select-wrapper {
          margin: 0 4px 0 12px;
        }

        .listing-filters {
          border: none;
        }

        .select-wrapper {
          width: auto;
        }

        .listing-container {
          padding: 0.5rem 2rem 5rem;
          width: 58.33333%;
        }

        .listing-header {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin: 1.5rem 0 1rem;
          border-top: 1px solid #f3f3f3;
          border-bottom: 1px solid #f3f3f3;
        }

        .listing-header h1 {
          margin-top: 1rem;
        }

        .listing-product {
          width: 25%;
          margin-bottom: 2rem;
        }
      }
    `}</style>
    <AmpIncludeAmpSelector />
    <AmpIncludeAmpList />
    <Header />
    <Menu />
    <main id="content" role="main" className="listing">
      {/*TODO: gender and category I think are meant to come from the URL */}
      <AmpState id="products">
        {{
          gender: props.gender || 'women',
          category: props.category || 'shirts',
          filter: 'high-low',
        }}
      </AmpState>
      <amp-img
        className="banner xs-hide sm-hide"
        src="static/img/women-extra-wide.jpg"
        data-amp-bind-src="'static/img/'+products.gender+'-extra-wide.jpg'"
        width="3.5"
        height="1"
        layout="responsive"
        alt="Product listing"
        noloading="">
        <div placeholder="" className="loading" />
      </amp-img>
      <section className="listing-content">
        <div className="sidebar xs-hide sm-hide">
          <div className="side-panel title">
            <h2>Category</h2>
            <amp-selector
              name="category"
              layout="container"
              on="select:AMP.setState({products:{gender: event.targetOption}}), products-list.changeToLayoutContainer()"
              data-amp-bind-selected="products.gender">
              {/*TODO: compute 'selected' based on query parameter. */}
              <button
                type="button"
                option="women"
                {...(props.gender == 'women' && {selected: true})}>
                Women
              </button>
              <button
                type="button"
                option="men"
                {...(props.gender == 'men' && {selected: true})}>
                Men
              </button>
            </amp-selector>
          </div>
        </div>

        <div className="listing-container">
          <div className="listing-header">
            <h1 data-amp-bind-text="products.gender+'’s Clothing'">
              women’s Clothing
            </h1>
            <div className="listing-filters">
              <div className="select-wrapper md-hide lg-hide">
                <div className="title">
                  <label htmlFor="categories">Show:</label>
                  <amp-selector
                    name="category"
                    layout="container"
                    on="select:AMP.setState({products:{category: event.targetOption}}), products-list.changeToLayoutContainer()"
                    data-amp-bind-selected="products.category">
                    {/*TODO: Selected for Shirts and Shorts should be computed */}
                    <button type="button" option="shirts" selected>
                      Shirts
                    </button>
                    <button type="button" option="shorts">
                      Shorts
                    </button>
                  </amp-selector>
                </div>
              </div>
              <div className="select-wrapper title">
                <label htmlFor="price">Sort by:</label>
                <select
                  name="price"
                  id="price"
                  on="change: AMP.setState({products: {filter: event.value}})">
                  <option value="high-low">Price: High-Low</option>
                  <option value="low-high">Price: Low-High</option>
                </select>
              </div>
            </div>
          </div>
          <amp-list
            id="products-list"
            data-amp-bind-src="'/api/categories?categoryId=' + products.gender + '-' + products.category + '&sort=' + products.filter"
            src="/api/categories?categoryId=women-shirts&sort=high-low"
            height="1000"
            width="300"
            layout="responsive">
            <template type="amp-mustache">
              <a
                href="product-details?categoryId=women-shirts&productId={{productId}}"
                target="_self"
                className="listing-product"
                data-amp-bind-href="'product-details?categoryId=' + products.gender + '-' + products.category + '&productId={{productId}}'">
                <div>
                  <div>
                    <amp-img
                      src="{{image}}"
                      width="340"
                      height="340"
                      layout="responsive"
                      alt="{{ name }}"
                      noloading="">
                      <div placeholder="" className="loading" />
                    </amp-img>
                    <h2>{`{{ name }}`}</h2>
                  </div>
                  <div className="title">${`{{ price }}`}</div>
                </div>
              </a>
            </template>
          </amp-list>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
