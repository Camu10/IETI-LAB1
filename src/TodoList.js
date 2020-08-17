import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

	render (){
		const data = this.props.todoList;
		const listItems = data.map((todo,index) => (
			<li key={index}>
				{
					<Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />
				}
			</li>
		));	
		return (
      		<ul>{listItems}</ul>
    	);	
	}
}