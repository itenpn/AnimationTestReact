import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Animate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      marginLeft: '10px',
      marginTop: '10px'
    }
  }
  
  changePos(x, y){
    this.setState({
      marginLeft: x + 'px',
      marginTop: y + 'px'
    });
  }

  render() {
    return(
      <div className="object" style={this.state}>
      </div>
    );
  }
}
ReactDOM.render(<Animate />, document.getElementById('root'));
