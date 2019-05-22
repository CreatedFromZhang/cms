import React from "react";

export default class Login extends React.Component {
    render(){
        return <div className="project">
            {
                [1,2,3,4,5,6,7].map(i=><div key={i} className="project-item">
                     <div className="img"><img alt="img" src={require('rootSrc/assert/image/522ec0ae8b14c.jpg')}/></div>
                     <div className="name">{i}</div>
                </div>)
            }
        
        </div>;
    }
}