import React, { Fragment } from 'react';

import { Grid } from 'semantic-ui-react';

const QuoteDisplay = props => {

  const {
    color, quote,
    author, backgroundImage
  } = props.displayObject;

  const ColorPanel = _ => {
    return (
      <Fragment>
        <p
          className="quote-color-panel"
          style={{ backgroundColor: color }} />
      </Fragment>
    )
  }

  const ActualQuotePanel = _ => {
    return (
      <>
        <p style={{ color: 'white' }}>{ quote }</p>
      </>
    )
  }

  return (
    <Grid className="quote-panel">
      <Grid.Column width={2}>
        <ColorPanel />
      </Grid.Column>
      <Grid.Column width={9}>
        {/* <ActualQuotePanel /> */}
      </Grid.Column>
    </Grid>
  );
}

export default QuoteDisplay;
