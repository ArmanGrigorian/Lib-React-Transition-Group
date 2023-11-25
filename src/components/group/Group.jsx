// import ListItem from "../listItem/ListItem";
import "./Group.scss";
import { createRef, useContext } from "react";
import { BoardContext } from "../board/Board";
import { ACTIONS } from "../../reducers/animationReducer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Group = () => {
	const { animation, dispatch } = useContext(BoardContext);

	function handleChange(e) {
		dispatch({ type: ACTIONS.SET_TEXT, payload: e.target.value });
	}

	function handleAdd() {
		const newToDo = {
			id: crypto.randomUUID(),
			title: animation.text,
			nodeRef: createRef(null),
		};

		dispatch({ type: ACTIONS.ADD_TODO, payload: newToDo });
	}

	function handleDelete(id) {
		dispatch({ type: ACTIONS.REMOVE_TODO, payload: id });
	}

	return (
		<div className="Group">
			<input type="text" value={animation.text} onChange={handleChange} />

			<button type="button" onClick={handleAdd}>
				ADD
			</button>

			<TransitionGroup component="ul">
				{animation.todoList.map((elem) => (
					<CSSTransition
						key={elem.id}
						nodeRef={elem.nodeRef}
						timeout={500}
						classNames="Group__listItem">
						<li ref={elem.nodeRef} className="Group__listItem">
							<h3>{elem.title}</h3>
							<button type="button" onClick={() => handleDelete(elem.id)}>
								🗑️
							</button>
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default Group;
