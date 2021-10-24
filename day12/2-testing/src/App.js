import "./App.css";

import { useState } from "react";
// import Counter from "./components/Counter";
// import Todo from "./components/Todo";

// import { sayHello } from "./helpers/hello";

function App() {
	const [text, setText] = useState("");

	const names = splitNames(text);

	return (
		<div className="App">
			{/* <Counter /> */}
			{/* <Todo /> */}

			<input value={text} onChange={({ target }) => setText(target.value)} />

			{names.map((item, i) => (
				<div key={i}>{item}</div>
			))}
		</div>
	);
}

export const splitNames = (text) => {
	return text.split(",");
};

export default App;
