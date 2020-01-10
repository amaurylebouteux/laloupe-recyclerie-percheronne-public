import React, {Component} from 'react';
import './AdminLogin.css';
import { Link } from "react-router-dom";
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;


class AdminLogin extends Component {

  constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleChange = event => {
		switch (event.target.name) {
			case 'username':
				this.setState({ username: event.target.value });
				break;
			case 'password':
				this.setState({ password: event.target.value });
				break;
			default:
				break;
		}
	};

	handleFormSubmit = () => {
    const { username, password } = this.state;
    console.log("1: ", username, password);

		fetch(SERVER_ADDRESS + '/api/user/login', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({ username: username, user_password: password }),
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					return res.text().then(text => {
						throw new Error(text);
					});
				}
			})
			.then(data => {
				localStorage.setItem('token', data.token);
				this.props.updateFunction();
			})
			.catch(err => {
				alert(err.message);
      });
	};

  
    

     render() {
        return (
        <>
          <div className="adminheader">
		  <Link to='/'><img id="logoAdmin" src ="./img/logo.png" alt="logo" /></Link>
           
            <h1 className="adminTitle mob-8">Administration Recyclerie Percheronne</h1>
          </div>
          
          <form className="adminLogin mob-12">
            <label className="adminLabel mob-6">Nom d'Utilisateur:</label>
            <input className="adminField mob-6" type= "text" name="username" onChange={this.handleChange}></input>
            <label className="adminLabel mob-6">Mot de passe:</label>
            <input className="adminField mob-6" type ="password" name="password" onChange={this.handleChange}></input>
            <button className="adminLoginSubmit mob-6" type="button" onClick={this.handleFormSubmit}>Se connecter</button>
          </form>
        </>
        );
    }
}




export default AdminLogin;