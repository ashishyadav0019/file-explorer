import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './src/components/fileTreeView';
import Header from './src/components/header';
import FileList from './src/components/fileList';

 ReactDOM.render(<Tree/>, document.getElementById('treeview'));

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<FileList />, document.getElementById('rightpanel'));