// <script id="amp-access" type="application/json"> for holding AMP Access configuration data.

import React from 'react';
import Head from 'next/head';

class AmpAccessConfig extends React.Component {
  render() {
    return (
      <Head>
        <script
          id="amp-access"
          type="application/json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(this.props.children)}}
        />
      </Head>
    );
  }
}

export default AmpAccessConfig;
