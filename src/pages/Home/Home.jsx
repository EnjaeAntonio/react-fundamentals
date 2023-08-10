import React from 'react';
import reactLogo from '../../assets/react.svg';
import './Home.css';
function Home() {
    return (
		<>
			<div className="flex flex-col h-screen text-center justify-center items-center">
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<h1 className="text-5xl text-white">React Fundamentals</h1>
				<p className=" text-slate-400">Created by Enjae Antonio</p>
				<div>
					<h1 className="text-3xl text-white">Table of Contents</h1>
					<div>
						<ul>
							<li className="text-2xl text-blue-600 hover:text-blue-800">
								<a href="/what-is-react">React Introduction</a>
							</li>
							<li className="text-2xl text-blue-600 hover:text-blue-800">
								<a href="/hooks">React hooks</a>
							</li>
							<li className="text-2xl text-blue-600 hover:text-blue-800">
								<a href="/components">React components</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
