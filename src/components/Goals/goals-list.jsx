import React from 'react';
import './goals-list.css'
function GoalsList({...props}) {
    return (
        <ul className="list">
            {props.courseGoals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>
            })}
        </ul>
    );
}

export default GoalsList;