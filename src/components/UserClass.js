import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            userInfo: {
                name : "Dummy",
                location: "Default ",
                avatar_url: "https://dummy"
            }
        }

        // console.log(this.props.name +"child constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name + "child component did mount")
        const data = await fetch("https://api.github.com/users/sfwnmuhd");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    componentDidUpdate(){
       
        console.log("Component Did Mount")
    }

    componentWillUnmount(){
        console.log("compnent will unmount")
    }

    render(){
        // console.log(this.props.name + 'child render')
        const{name, location,avatar_url} =this.state.userInfo;
        
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact : @sfwnmuhd</h4>
            </div>
        )
    }

}

export default UserClass;


/***
 * ---MOUNTING
 * 
 * Constructor(dummy data)
 * Render(dummy data)
 *      <Html loads with dummy data/>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * 
 * 
 * ----UPDATE 
 *      
 *      render(API Data)
 *      <HTML loads with new API data
 *      Component Did Update
 * 
 */