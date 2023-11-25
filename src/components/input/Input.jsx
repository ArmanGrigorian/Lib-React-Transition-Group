/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BoardContext } from "../board/Board";
import { ACTIONS } from "../../reducers/animationReducer";

const Input = ({ id }) => {
	const { animation, dispatch } = useContext(BoardContext);

	function handleChange(e) {
		dispatch({ type: ACTIONS.MODE, payload: e.target.value });
	}

	return (
		<label htmlFor={id}>
			{id}
			<input
				type="radio"
				name="mode"
				id={id}
				value={id}
				checked={animation.mode === id}
				onChange={handleChange}
			/>
		</label>
	);
};

export default Input;
