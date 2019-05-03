import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onAddClick() {
    this.props.addReminder(this.state.text);
    this.setState({
      text:''
    })
  }

  renderList() {
    const{ reminders } = this.props;
    return (
      <ul className="list-group col-sm-8 mt-2">
        {reminders.map((reminder)=>(
          <li className="list-group-item" key={reminder.id}>
            <div className="list-item">
              <div>{reminder.text}</div>
              <div><em>time</em></div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="to do..."
              value={this.state.text}
              onChange={(e) => {this.setState({text:e.target.value})}}
            />
          </div>
          <button 
            type="button" 
            className="btn btn-success"
            onClick={()=>this.onAddClick()}
          >
            Add
          </button>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder })(App);
