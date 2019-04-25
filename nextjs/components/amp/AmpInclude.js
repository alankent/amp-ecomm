import React from 'react';
import Head from 'next/head';

/**
 * Add an AMP custom element via a script tag in the head to import an AMP component.
 * Uses 'key' to avoid importing the same script twice.
 */
class AmpIncludeCustomElement extends React.Component {
  render() {
    return (
      <Head>
        <script
          async
          custom-element={this.props.name}
          src={this.props.src}
          key={this.props.name}
        />
      </Head>
    );
  }
}

export const AmpIncludeAmpAccess = () => (
  <AmpIncludeCustomElement
    name="amp-access"
    src="https://cdn.ampproject.org/v0/amp-access-0.1.js"
  />
);

export const AmpIncludeAmpAnalytics = () => (
  <AmpIncludeCustomElement
    name="amp-analytics"
    src="https://cdn.ampproject.org/v0/amp-access-0.1.js"
  />
);

export const AmpIncludeAmpBind = () => (
  <AmpIncludeCustomElement
    name="amp-bind"
    src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
  />
);

export const AmpIncludeAmpDatePicker = () => (
  <AmpIncludeCustomElement
    name="amp-date-picker"
    src="https://cdn.ampproject.org/v0/amp-date-picker-0.1.js"
  />
);

export const AmpIncludeAmpForm = () => (
  <AmpIncludeCustomElement
    name="amp-form"
    src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
  />
);

export const AmpIncludeAmpLightbox = () => (
  <AmpIncludeCustomElement
    name="amp-lightbox"
    src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
  />
);

export const AmpIncludeAmpList = () => (
  <AmpIncludeCustomElement
    name="amp-list"
    src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
  />
);

export const AmpIncludeAmpLiveList = () => (
  <AmpIncludeCustomElement
    name="amp-live-list"
    src="https://cdn.ampproject.org/v0/amp-live-list-0.1.js"
  />
);

export const AmpIncludeAmpSelector = () => (
  <AmpIncludeCustomElement
    name="amp-selector"
    src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"
  />
);

export const AmpIncludeAmpSidebar = () => (
  <AmpIncludeCustomElement
    name="amp-sidebar"
    src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
  />
);


/**
 * Add an AMP custom template via a script tag in the head to import an AMP component.
 * Uses 'key' to avoid importing the same script twice.
 */
class AmpIncludeCustomTemplate extends React.Component {
  render() {
    return (
      <Head>
        <script
          async
          custom-template={this.props.name}
          src={this.props.src}
          key={this.props.name}
        />
      </Head>
    );
  }
}

export const AmpIncludeAmpMustache = () => (
  <AmpIncludeCustomTemplate
    name="amp-mustache"
    src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
  />
);


/**
 * Add a script tag to the head to import an AMP component.
 * Uses 'key' to avoid importing the same script twice.
 */
class AmpIncludeScript extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <script async src={this.props.src} key={this.props.src} />
        </Head>
      </div>
    );
  }
}

