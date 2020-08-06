import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      name: "", email: "", data: ""
    }
  }

  checkValue(event) {
    const name = event.target.name;
    const svalue = event.target.value;
    this.setState({ [name]: svalue })
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(data => data.json())
      .then(data => this.setState({
        allData: data
      }))
  }

  showData() {
    fetch("http://localhost:3001/postData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
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
          <form onSubmit={() => this.showData()}>
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
              value="Submit"
            />
            </p>
          </form>
        </div>
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allData.map(item => (
              <tr key={item._id}>
                <td>{item.name} </td>
                <td>{item.email} </td>
                <td>{Date(item.date)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
