import React from 'react';
import {Todo} from './Todo'



export class TodoList extends React.Component {

    render(){

        const datos = this.props.items;

        const listaItems = datos.map((dato) =>
            <li> texto : {dato.text} , prioridad : {dato.priority} , fecha : {dato.dueDate.toString()} </li>
         );

        return (
            <ul>{listaItems}</ul>
        );

    };
}