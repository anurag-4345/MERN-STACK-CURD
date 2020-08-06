import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", email: ""
    }
  }
  checkValue(event) {
    const name = event.target.name;
    const svalue = event.target.value;
    this.setState({ [name]: svalue })
  }

  showData = () => {
    fetch("http://localhost:3001/postData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `name=${this.state.name}&email=${this.state.email}`
    })
      .then(data => data.json())
      .then(result => {
        this.setState({
          name: result.name,
          email: result.email,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <p>Name: <input
              type="text"
              placeholder="enter name"
              name="name"
              onChange={this.checkValue.bind(this)}
            /></p>
            <p>Email: <input
              type="text"
              placeholder="enter Email"
              name="email"
              onChange={this.checkValue.bind(this)}
            /></p>
            <p> <input
              type="button"
              Value="Submit"
              name="email"
              onClick={() => this.showData()}
            /></p>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
