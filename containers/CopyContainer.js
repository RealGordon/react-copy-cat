import React from 'react';
import CopyCat from '../components/CopyCat.js';
import ReactDOM from 'react-dom';



class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: false,
      input:''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
handleChange(e){
  this.setState({input:e.target.value})
}
  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const { copying ,input}= this.state;
    const {handleChange,toggleTape} =this;
    const props={toggleTape,copying,onChange:handleChange,input}
    return (
   <CopyCat {...props} />
    );
  };
}
ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
