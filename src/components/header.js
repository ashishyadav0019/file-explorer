import React from 'react';
import ReactDOM from 'react-dom';

//declaring a function in ES5 syntax or JSX
var HeaderText = () => {
	return <span>Naehas File Manager System</span>;
}

export default class Header extends React.Component {
	render(){
		return (
				<HeaderText />
			)
	};
}

