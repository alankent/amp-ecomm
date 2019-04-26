import React from 'react';
import Head from 'next/head';
import {AmpIncludeAmpBind} from './AmpInclude';

class AmpState extends React.Component {
  render() {
    return (
      <>
        <AmpIncludeAmpBind />
        <amp-state id={this.props.id}>
          <script type="application/json" dangerouslySetInnerHTML={{__html: JSON.stringify(this.props.children)}}>
          </script>
        </amp-state>
      </>
    );
  }
}

export default AmpState;
