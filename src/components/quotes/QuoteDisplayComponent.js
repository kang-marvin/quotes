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

  const OpeningQuotationTags = _ => {
    return (
      <span style={{ fontSize: '2rem' }}>&#10077;</span>
    );
  }

  const ClosingQuotationTags = _ => {
    return (
      <span style={{ fontSize: '2rem' }}>&#10078;</span>
    );
  }

  const QuotesAuthor = _ => {
    return (
      <span className="quote-authour">{ ` - ${ author }` }</span>
    );
  }

  const QuotesText = _ => {
    return (
      <Fragment>
        <OpeningQuotationTags />
          { ` ${quote} ` }
        <ClosingQuotationTags />
      </Fragment>
    );
  }

  const ActualQuotePanel = _ => {
    return (
      <div className="quote-statement-panel">
        <p className="quote-statement">
          <QuotesText />
          <QuotesAuthor />
        </p>
      </div>
    );

  }

  return (
    <Grid>
      <Grid.Column
        width={1}>
          <ColorPanel />
      </Grid.Column>
      <Grid.Column
        width={15}
        className="quote-panel">
          <ActualQuotePanel />
      </Grid.Column>
    </Grid>
  );
}

export default QuoteDisplay;
