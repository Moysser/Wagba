import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="user-card">
      <div>
        {<User name={"Aziz"} ocupation={"Web developer"} location={"Dubai"} />}
      </div>
      <div>
        {
          <UserClass
            name={"Puspus"}
            ocupation={"Web developer"}
            location={"UK"}
          />
        }
      </div>
    </div>
  );
};

export default About;
