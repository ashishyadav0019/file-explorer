import React from 'react';
import ReactDOM from 'react-dom';

//declaring a function in ES5 syntax or JSX
var RightPanelText = () => {
	return <span>File List Will be shown here!</span>;
}

export default class FileList extends React.Component {
	render(){
		return (
				<RightPanelText />
			)
	};
}