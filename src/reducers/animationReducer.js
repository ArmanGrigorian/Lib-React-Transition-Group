import { createRef } from "react";

export const ACTIONS = {
	OUT_IN: "out-in",
	IN_OUT: "in-out",
	RUN_FIRST: "RUN_FIRST",
	RUN_SECOND: "RUN_SECOND",
	MODE: "MODE",
	SET_TEXT: "SET_TEXT",
	ADD_TODO: "ADD_TODO",
	REMOVE_TODO: "REMOVE_FROM_TODO_LIST",
};

export const initialState = {
	firstIsRunning: false,
	secondIsRunning: false,
	mode: ACTIONS.OUT_IN,
	modes: [
		{
			id: ACTIONS.OUT_IN,
		},
		{
			id: ACTIONS.IN_OUT,
		},
	],
	text: "",
	todoList: [
		{
			id: "1",
			title: "Task 1",
			nodeRef: createRef(null),
		},
		{
			id: "2",
			title: "Task 2",
			nodeRef: createRef(null),
		},
		{
			id: "3",
			title: "Task 3",
			nodeRef: createRef(null),
		},
	],
};

export function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.RUN_FIRST:
			return { ...state, firstIsRunning: !state.firstIsRunning };
		case ACTIONS.RUN_SECOND:
			return { ...state, secondIsRunning: !state.secondIsRunning };
		case ACTIONS.MODE:
			return { ...state, mode: action.payload };
		case ACTIONS.SET_TEXT:
			return { ...state, text: action.payload };
		case ACTIONS.ADD_TODO:
			return { ...state, todoList: [...state.todoList, action.payload] };
		case ACTIONS.REMOVE_TODO:
			return { ...state, todoList: state.todoList.filter((val) => val.id !== action.payload) };
		default:
			return state;
	}
}
