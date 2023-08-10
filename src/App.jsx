import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Hooks from './pages/Hooks/Hooks';
import StateHook from './pages/Hooks/StateHook/StateHook';
import EffectHook from './pages/Hooks/EffectHook/EffectHook';
import './style/index.css';
import WhatIsReact from './pages/WhatIsReact/WhatIsReact';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/what-is-react" element={<WhatIsReact />} />0
				<Route exact path="/hooks" element={<Hooks />} />
				<Route exact path="/hooks/use-state" element={<StateHook />} />
				<Route exact path="/hooks/use-effect" element={<EffectHook />} />
			</Routes>
		</>
	);
}

export default App;
