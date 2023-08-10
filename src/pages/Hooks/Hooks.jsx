import React from 'react';
import { Link } from 'react-router-dom';
import './Hooks.css';
import useStateCounter from '../../assets/img/useStateCounter.png';
function Hooks() {
	return (
		<>
			<div className="flex flex-col h-screen justify-center items-center border">
				<h1 className="text-6xl text-white">What are Hooks?</h1>
				<p className=" w-2/4 text-slate-500 text-center my-4 text-lg">
					React hooks are a feature that was introduced in React 16.8. In short, hooks allow you to reuse
					stateful logic without changing your component hierarchy. Read the documentation here{' '}
					<a
						href="https://react.dev/reference/react"
						className=" text-decoration-underline text-blue-600 hover:text-blue-800">
						docs
					</a>
				</p>
				<div className="flex flex-col container border py-4 w-2/4">
					<ul className=" px-16">
						<li className="text-4xl text-blue-600 hover:text-blue-800 border-b border-slate-600">
							<Link to="/hooks/use-state">useState</Link>
							<div className="container">
								<p className="text-slate-200 text-lg">
									The useState hook allows you to add state to functional components.
								</p>
								<div className="d-flex"></div>
							</div>
						</li>
						<li className="text-4xl text-blue-600 hover:text-blue-800 border-b border-slate-600">
							<Link to="/hooks/use-effect">useEffect</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Hooks;
