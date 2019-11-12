import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as quotesActions from '../../redux/actions/quotes/famousQuotesActions';

import { initialState } from '../../data/initialState';

import QuoteDisplay from '../../components/quotes/QuoteDisplayComponent';

import '../../styles/quoteStyles.css';

const DEFAULT_QUOTE_OBJECT = { color: '', quote: '', author: '', backgroundImage: '' };

class QuotesComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.loadFamousPeopleQuotes();
  }

  render() {
    const { count, message, data } = this.props.quotesObject;

    return (
      <div>
        <QuoteDisplay
          /** Change the 0 number to be from user key press */
          displayObject={ data[0] ? data[0] : DEFAULT_QUOTE_OBJECT }
        />
      </div>
    );
  }
}

QuotesComponent.propTypes = {
  quotesObject: PropTypes.object,
};

QuotesComponent.defaultProps = {
  quotesObject: initialState.famousQuotes,
}


const mapStateToProps = (state, _ownProps) => {
  return {
    quotesObject: state.famousQuotes.people,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(quotesActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesComponent);