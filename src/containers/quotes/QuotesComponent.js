import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as quotesActions from '../../redux/actions/quotes/famousQuotesActions';

import { initialState } from '../../data/initialState';

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
        <p>Quotes.</p>
        <p>{ `Count of available quotes is ${ count }` }</p>
        <p>{ `Message is ${ message }` }</p>
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