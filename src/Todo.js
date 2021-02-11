import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            //Add your code here to represent a
            <div>
                <h2> texto: {this.props.text}</h2>
                <h2> prioridad : {this.props.priority}</h2>
                <h2> fecha: {this.props.dueDate.toString()}</h2>
            </div>

        );

    }

}