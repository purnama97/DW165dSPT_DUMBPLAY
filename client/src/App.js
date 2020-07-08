import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Beranda from './Page/Beranda.jsx';
import Payment from './Page/Payment.jsx';
import Artist from './Page/Artist.jsx';
import Song from './Page/Song.jsx';
import Transaksi from './Page/Transaksi.jsx';
import Profil from './Page/Profil.jsx';

	function PrivateRoute({ children, ...rest }) {
		return (
		<Route
			{...rest}
			render={({ location }) =>
			Auth.isAuthenticated ? (
				children
			) : (
				<Redirect
				to={{
					pathname: "/",
					state: { from: location }
				}}
				/>
			)
			}
		/>
		);
  	}

	const Auth = {
		isAuthenticated: false,
		authenticate(cb) {
		  Auth.isAuthenticated = true;
		  setTimeout(cb, 100); 
		},
		signout(cb) {
		  Auth.isAuthenticated = false;
		  setTimeout(cb, 100);
		}
	};

	  
class App extends Component{
	render(){
		return(
			<div className="body">
				<Router>
				  <Switch>
					<Route exact path="/profil">
					  <Profil />
					</Route>
					<Route exact path="/artist">
					  <Artist />
					</Route>
					<Route exact path="/song">
					  <Song />
					</Route>
					<Route exact path="/transaction">
					  <Transaksi />
					</Route>
					<Route exact path="/payment">
					  <Payment />
					</Route>
					<Route exact path="/">
					  <Beranda />
					</Route>
				  </Switch>
			</Router>
		</div>
    );
  }
}

export default App