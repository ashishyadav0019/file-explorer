import React from 'react';
import ReactDOM from 'react-dom';
import SortableTree from '../vendor/react-sortable-tree/dist/main';
import FileExplorerTheme from '../vendor/react-sortable-tree-theme-file-explorer/dist/main';
 
export default class Tree extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      	treeData: [
	      	{ 
	      		title: 'src1/', 
		      	children: [ 
		      		{ 
		      			title: 'index.js' 
		      		},
		      		{ 
		      			title: 'chapterOne.js' 
		      		}	 	 
		      	] 
	      	},
	      	{ 
	      		title: 'src2/', 
		      	children: [ 
		      		{ 
		      			title: 'index.js' 
		      		},
		      		{ 
		      			title: 'chapterOne.js' 
		      		}	 	 
		      	] 
	      	},
	      	{ 
	      		title: 'main.js'
	      	}
      	],
    };
  }
 
  render() {
    return (
      	<div style={{ height: 400 }}>
	        <SortableTree
	          treeData={this.state.treeData}
	          onChange={treeData => this.setState({ treeData })}
	        />
      	</div>
    );
  }
}

 // ReactDOM.render(<Tree/>, document.getElementById('treeview'));