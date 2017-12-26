import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchSurveys } from '../../actions/index';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  async deleteSurvey(id) {
    const res = await axios({
        method: 'delete',
        url: '/api/surveys/delete',
        data: {
          id,
        }
      });

    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p
              className="right"
            >
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
            <a className="right" onClick={() => this.deleteSurvey(survey._id)}>Delete Survey</a>
          </div>
        </div>
      );
    })
  }

  render() {
    if(this.props.surveys.length === 0) {
      return <div style={{textAlign: 'center'}}>No Surveys</div>
    }

    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys
  }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
