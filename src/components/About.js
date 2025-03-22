import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <h2>this is namaste react web series</h2>
            <User name ={"Raheees"} Location ={"Dubai"} contact ={"@raheees"}/>

            <UserClass name ={"Badusha"} Location ={"Kozhikode"}/>
        </div>
    )
}

export default About;