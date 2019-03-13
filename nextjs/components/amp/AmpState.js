import React from 'react';
import Head from 'next/head';
import {AmpIncludeAmpBind} from './AmpIncludeCustomElement';

class AmpState extends React.Component {
  render() {
    return (
      <>
        <AmpIncludeAmpBind />
        <amp-state id={this.props.id}>
          <script type="application/json">
            {JSON.stringify(this.props.children)}
          </script>
        </amp-state>
      </>
    );
  }
}

export default AmpState;
