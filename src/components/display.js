import React from 'react';
import Form from './form';


export default class Display extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.name}</h3>
        <Form/>
      </div>
      );
  };
};