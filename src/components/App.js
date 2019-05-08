import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder ,clearAllReminders } from "../actions";
import PropTypes from "prop-types";
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      dueTime: moment(new Date()).format('YYYY-MM-DDTHH:mm')
    };
  }

  onAddClick() {
    if(!this.state.text) {
      alert('Please enter before adding');
      return
    }
    this.props.addReminder(this.state.text, this.state.dueTime);
    this.setState({
      text: "",
      dueTime: moment(new Date()).format('YYYY-MM-DDTHH:mm')
    });
  }

  onDeleteClick(id) {
    this.props.deleteReminder(id);
  }

  onClearAll() {
    this.props.clearAllReminders();
  }

  renderList() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-8 mt-2">
        {reminders.map(reminder => (
          <li className="list-group-item" key={reminder.id}>
            <div className="list-item">
              <div>{reminder.text}</div>
              <div>
                <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
              </div>
            </div>
            <div 
              className="list-item delete-button text-danger"
              onClick = {() => this.onDeleteClick(reminder.id)}
            >
              &#x2715;
            </div>
          </li>
        ))}
      </ul>
    );
  }

  renderClearButton() {
    console.log(this.props.reminders)
    if(this.props.reminders.length === 0) {
      return
    }
    return <div className="btn btn-danger btn-block mt-4" onClick={() => this.onClearAll()}>Clear All</div>
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control mr-3"
              placeholder="to do..."
              value={this.state.text}
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
            />
            <input
              type="datetime-local"
              className="form-control mr-3"
              value={this.state.dueTime}
              onChange={e => {
                this.setState({ dueTime: e.target.value });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.onAddClick()}
          >
            Add
          </button>
        </div>
        {this.renderList()}
        {this.renderClearButton()}
      </div>
    );
  }
}

App.propTypes = {
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  clearAllReminders: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    reminders: state
  };
};

export default connect(
  mapStateToProps,
  { addReminder, deleteReminder, clearAllReminders }
)(App);
