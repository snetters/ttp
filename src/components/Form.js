import React, {useState, useEffect} from 'react';

import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      orgName: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.orgSearch = this.orgSearch.bind(this);
  }


  
  handleInputChange = (event) => {
    console.log("Org Name: ", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitted form=", this.state)
    // PROPS call here
    this.props.saveUp( this.state );
  };




  componentDidMount() {
    this.setState({ orgName: "initFormOrgName" })
  }

  // orgSearch(orgName) {
  //   // axios.post('/backend/formAPI', orgName)
  //   //     .then(response => 
  //   //       console.log("orgSearch formAPI response=", response)
  //   //       //this.setState({ articleId: response.data.id })
  //   //     );

  //   const [currentTime, setCurrentTime] = useState(0);

  //   useEffect(() => {
  //     fetch('/backend/time').then(res => res.json()).then(data => {
  //       console.log(data.time)
  //     });
  //   }, []);
  // }

  render() {
    const {orgName} = this.state

    return (
      <div className="Form">
        <p>Organization Name is: {orgName}</p>

        <form onSubmit={this.handleSubmit}>

          <input type="text" placeholder='orgName' name="orgName" onChange={this.handleInputChange}/>
          <br></br>

          <button type="submit">Submit</button>
          <br></br>

        </form>
      </div>
      );
  }
}

export default Form