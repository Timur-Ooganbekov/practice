import React from "react";

 class EssayForm extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            value: "Please tell about yourself"
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert("Send Essay:" + this.state.value);
        event.preventDefault();
      
      }
    
      render() {
        return(
          <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Send!"/>
          </form>
        )
      }
    }
    export default EssayForm;