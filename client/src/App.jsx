import { BrowserRouter as Router, Route } from 'react-router-dom'import Header from "./components/Header/Header";import Footer from "./components/Footer/Footer"import Home from './components/Home/Home'import Portfolio from "./components/Portfolio/Portfolio";function App() {	return (		<Router>		<div className={`app`}>			<Header/>			<Route exact path={`/`}>				<Home/>			</Route>			<Route exact path={`/portfolio`}>				<Portfolio/>			</Route>			<Footer/>		</div>		</Router>	);}export default App;