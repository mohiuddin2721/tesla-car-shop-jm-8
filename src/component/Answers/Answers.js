import React from 'react';
import './Answers.css';

const Answers = () => {
    return (
        <div className='answers'>
            <h1>How does react useState works?</h1>
            <h3>Ans: We know that useState is a hook and it's allows us to have state variables in functional components. We can pass initial state to this function. Then it returns a variable with the current state value. Although no need the primary state. And another function to update this value. </h3>
            <h1>Whats the different between props and state?</h1>
            <h3>Ans: The state and props are vary important for react. Both are decide what data the component will display. 
                <br />Props: <br /> Props are being very short for every property. It's set the attribute that are passed from the parent component to a child component. This can be data, variables, function.
                <br />State: <br /> Firstly, state is a set of variables. And it determine the current condition of the component. This state component is internal. and defined inside the component and changeable only within the component.
            </h3>
        </div>
    );
};

export default Answers;