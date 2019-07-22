import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box    from '../../components/layouts/Box/Box.index';
import Anchor from '../../components/layouts/Anchor/Anchor.index';
import Button from '../../components/forms/Button';

import '../Login/components/Login.style.scss';


class HomeComponent extends PureComponent {

	constructor(props) {
		super(props);

		//this.onChange = this.onChange.bind(this);
		this.onLogout = this.onLogout.bind(this);
  }

	onLogout() {
		this.props.onLogout();
	}

	render() {



		//const HomeComponent = () => (
    return (
			<div>
			<h1 style={{textAlign: 'center', color: '#900'}} >
				Home page
			</h1>
			<br/>
			<br/>
			<br/>
			<Box style={{textAlign: 'center', margin: '20px auto 100px'}} >

				<Button
					className="login__button"
					onClick={this.onLogout}
					disabled={false}
					style={{padding: '10px 30px'}}
				>
					Logout
				</Button>
			</Box>


				<Anchor path="/login"> Vai a <b>Login</b></Anchor>
				<Anchor path="/tools"> Vai a <b>Tools</b></Anchor>

			</div>
		);


	}
}


HomeComponent.propTypes = {
  onLogout : PropTypes.func.isRequired,
};

HomeComponent.defaultProps = {
};


export default HomeComponent;
