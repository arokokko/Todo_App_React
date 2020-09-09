import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
	
	const styleItem = {color: important ? 'tomato' : 'black'};
	return <span style={styleItem}>{ label }</span>;
};

export default TodoListItem;