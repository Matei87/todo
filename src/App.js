import React from 'react';
import { TaskState } from './context/TaskState';
import Form from './components/Form/Form';
import Tasks from './components/Tasks/Tasks';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <TaskState>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">

              <div className="card-header">
                <h1>#To Do</h1>
              </div>
              <div className="card-body">
                < Form />
              </div>
              <div className="card-footer">
                < Tasks />
              </div>

            </div>
          </div>
        </div>
      </div>
    </TaskState>
  );
}

export default App;
