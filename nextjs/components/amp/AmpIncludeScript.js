import React from 'react';
import Head from 'next/head';

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

export default AmpIncludeScript;
