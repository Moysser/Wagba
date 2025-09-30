import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Max",
      location: "Dubai",
    };
  }

  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/akshaymarch7");

    const user = await userData.json();
    this.setState(user);
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count, count2 } = this.state;
    const { name, ocupation, location } = this.state;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Ocupation: {ocupation}</h3>
      </div>
    );
  }
}

export default UserClass;
