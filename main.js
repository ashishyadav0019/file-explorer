import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './src/mainComponent/fileManager'

/*export default class Tree extends React.Component {
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
}*/



/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TreeView from './src/vendor/react-bootstrap-treeview'
const treeData = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];

class Main extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			treeData:treeData
		}
	}
	render (){
		return (<div>
			{this.state.treeData[0].text}
			<App treeData={this.state.treeData[0].text}/>
			<TreeView data={this.state.treeData} />
		
		</div>)
	}
}

ReactDOM.render(<Main/>, document.getElementById('treeview'));*/

 ReactDOM.render(<Tree/>, document.getElementById('treeview'));

