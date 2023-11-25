import "./Board.scss";
import Group from "../group/Group";
import Circle from "../circle/Circle";
import Switcher from "../switcher/Switcher";
import { useReducer, createContext } from "react";
import { reducer, initialState } from "../../reducers/animationReducer";

export const BoardContext = createContext(null);

const Board = () => {
	const [animation, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="Board">
			<BoardContext.Provider value={{ animation, dispatch }}>
				<Circle />
				<Switcher />
				<Group />
			</BoardContext.Provider>
		</div>
	);
};

export default Board;
