import React from "react";
import ReactDOM from 'react-dom'

// варіант 1
// створення React element через функцію Create element
// const el = React.createElement(
// 	'div',
// 	{
// 		id: "test",
// 		name: "user",
// 	},
// 	React.createElement("h1", null, "Hello world")
// )
// варіант 1 

// варіант 2 через JSX
const Hi = () => { // React компонент повинен починатися з великої літери
	return (
		<h1>Hello WOrld22</h1>
	)
}
const Ul = () => { // React компонент повинен починатися з великої літери
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
		</ul>
	)
}
const Text = () => { // React компонент повинен починатися з великої літери
	return (
		<React.Fragment>
			<p>lorem</p>
			<p>Ipsum</p>
			<p>SIt amet dolor</p>
		</React.Fragment>
		//також можна прописувати React.Fragment простіше <></>
	)
}

const App = () => {
	return (
		<>
			<Ul />
			<Text />
			<Hi />
		</>
	)
}

// variant2 



ReactDOM.render(<App />, document.getElementById("root"))
//
