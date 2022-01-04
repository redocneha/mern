import './App.css';
import React, { useState }from 'react';
import GoalsList from './components/Goals/goals-list';
import NewGoal from './components/NewGoal';

function App() {
  
  const [courseGoals,updateCourseGoals] = useState([{ id: 'cg1', text: "Complete project" }, { id: 'cg2', text: "Learn MERN" }]);

  const addCourseHandler = (courseGoal) => {
    updateCourseGoals((previousGoals) => {
      return previousGoals.concat(courseGoal)
    });
    }
  return (
    <div className="goals">
    <h1>Course goals</h1>
      <GoalsList courseGoals={courseGoals} />
      <NewGoal addCourseGoal={addCourseHandler}/>
    </div>
  );
}

export default App;
