import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props)

        // console.log("parent consturctor called");
    }

    componentDidMount(){
        // console.log("parend component did mount");
    }    

    render(){
        // console.log("parent renderend")
        return (
            <div className="about">
                <h1>About</h1>
                <h2>this is namaste react web series</h2>
                <UserClass name ={"First"} Location ={"Kozhikode"}/>
                
            </div>
        )
    }
}




// const About = () => {
//     return (
//         <div className="about">
//             <h1>About</h1>
//             <h2>this is namaste react web series</h2>
//             <UserClass name ={"Badusha"} Location ={"Kozhikode"}/>
//         </div>
//     )
// }

export default About;