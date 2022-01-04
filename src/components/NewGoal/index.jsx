import React ,{useState} from 'react';

const NewGoal = ({...props}) => {
    const [enteredGoal, updateEnteredGoal] = useState("");
    const addCourseHandler = (event) => {
        const addedCourse = {};
        addedCourse.id = Math.random.toString();
        addedCourse.text = enteredGoal;
        props.addCourseGoal(addedCourse);
        event.preventDefault();
        updateEnteredGoal("")
    }
    const saveGoalName = (event) => {
        updateEnteredGoal(event.target.value)
    }
    return (
        <form  onSubmit={addCourseHandler}>
            <span>Enter Goal name: </span>
            <input type="text" value={enteredGoal} onChange={saveGoalName}/>
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;