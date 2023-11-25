/* eslint-disable react/prop-types */
import "./Circle.scss";
import { useContext, useRef } from "react";
import { BoardContext } from "../board/Board";
import { CSSTransition } from "react-transition-group";
import { ACTIONS } from "../../reducers/animationReducer";

const Circle = () => {
	const { animation, dispatch } = useContext(BoardContext);
	const nodeRef = useRef(null);

	function handleClick() {
		dispatch({ type: ACTIONS.RUN_FIRST });
	}

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={animation.firstIsRunning}
			timeout={2000}
			classNames={{
				enterActive: "Circle-enable",
				enterDone: "Circle-rotate",
				exit: "Circle-disable",
			}}>
			<button ref={nodeRef} type="button" className="Circle" onClick={handleClick}>
				{animation.firstIsRunning ? "Stop" : "Run"}
			</button>
		</CSSTransition>
	);
};

export default Circle;
