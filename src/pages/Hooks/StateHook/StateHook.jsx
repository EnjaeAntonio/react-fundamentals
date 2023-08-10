import React, { useState } from 'react';
import useStateExample from '../../../assets/img/useStateExample.png';

function StateHook() {
	const [count, setCount] = useState(0);

	function increment() {
		if (count >= 0) {
			setCount((prevCount) => prevCount + 1);
		}
	}

	function decrement() {
		if (count > 0) {
			setCount((prevCount) => prevCount - 1);
		}
	}

	return (
		<>
			<div className="flex flex-col h-screen justify-center items-center">
				<div>
					<h1 className="text-5xl text-white">Counter</h1>
					<div className="flex gap-4 justify-center items-center">
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
							onClick={decrement}>
							-
						</button>
						<p className="text-4xl text-white">{count}</p>
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							onClick={increment}>
							+
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default StateHook;
