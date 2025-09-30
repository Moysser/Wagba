const User = ({ name, ocupation, location }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Ocupation: {ocupation}</h3>
    </div>
  );
};

export default User;
