import "./Switcher.scss";
import Input from "../input/Input";
import { useContext, useRef } from "react";
import { BoardContext } from "../board/Board";
import { ACTIONS } from "../../reducers/animationReducer";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Switcher = () => {
	const { animation, dispatch } = useContext(BoardContext);
	const enterRef = useRef(null);
	const exitRef = useRef(null);
	const nodeRef = animation.secondIsRunning ? enterRef : exitRef;

	function handleClick() {
		dispatch({ type: ACTIONS.RUN_SECOND });
	}

	return (
		<div className="Switcher">
			{animation.modes.map((elem) => (
				<Input key={elem.id} {...elem} />
			))}

			<SwitchTransition mode={animation.mode}>
				<CSSTransition
					key={animation.secondIsRunning}
					nodeRef={nodeRef}
					in={animation.secondIsRunning}
					timeout={500}
					classNames="Switcher__button">
					<button ref={nodeRef} type="button" className="Switcher__button" onClick={handleClick}>
						{animation.secondIsRunning.toString()}
					</button>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default Switcher;
