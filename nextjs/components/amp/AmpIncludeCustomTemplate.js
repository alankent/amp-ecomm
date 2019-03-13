import React from 'react';
import Head from 'next/head';

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

export default AmpIncludeCustomTemplate;


export const AmpIncludeAmpMustache = () => (
  <AmpIncludeCustomTemplate
    name="amp-mustache"
    src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
  />
);
