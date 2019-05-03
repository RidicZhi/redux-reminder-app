import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="title">Reminder</div>
      <div className="form-inline">
        <div className="form-group mr-2">
          <input type="text" className="form-control" placeholder="to do..."/>
        </div>
        <button type="button" className="btn btn-success">Add</button>
      </div>
    </div>
  );
}

export default App;
