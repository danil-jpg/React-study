import { useState } from "react";

function App(){
	let [likes , setLikes] = useState(0)


	function inc(){
		setLikes(++likes)
		console.log(likes)
	}
	
	function dec(){
		setLikes(--likes)
		console.log(likes)
	}
	return (
		<div className="app">
			<h1>{likes}</h1>
			<button onClick={inc}>Inc</button>
			<button onClick={dec}>Dec</button>
		</div>
	)
}

export default App;