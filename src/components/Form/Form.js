import React from 'react';

import './Form.css'

import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orgName: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.timeGetReq = this.timeGetReq.bind(this)
    this.formGetReq = this.formGetReq.bind(this)
  }


  
  handleInputChange = (event) => {
    console.log("org name change to: ", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitted form =", this.state)

    // API request
    this.formGetReq(this.state.orgName)

    // PROPS call here
    this.props.saveUp( this.state );
  }




  timeGetReq() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:3000/backend/time',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  formGetReq(cON) {
    axios.get('http://localhost:3000/backend/formAPI', {
      params: {
        orgName: cON
      }
    })
    .then(function (response) {
      // API output data
      console.log(response.data);
      // What you want to do with the API output data
    })
    .catch(function (error) {
      console.log(error);
    });
  }





  componentDidMount() {
    this.setState({ orgName: "initFormOrgName" })
  }

  render() {
    const {orgName} = this.state

    return (
      <div className="Form">
        <p>Organization Name is: {orgName}</p>

        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder='organization name' name="orgName" onChange={this.handleInputChange}/>
          <br></br>

          <button type="submit">Submit</button>
          <br></br>

        </form>
      </div>
      );
  }
}

export default Form