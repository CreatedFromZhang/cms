import React from "react";

export default class Login extends React.Component {
    render(){
        return <div className="login"><div className="card"> 
            <div className="img">
                <img alt="img" src={require('rootSrc/assert/image/522ec0ae8b14c.jpg')}/>
            </div>
        
            <div className="form">
                <div className="title">Login</div>
                <div className="form-item">
                    <span className="icon-user iconfont"></span>
                    <input type="text" placeholder="email"/>
                </div>
                <div className="form-item">
                    <span className="icon-password iconfont"></span>
                    <input type="text" placeholder="password"/>
                </div>
                <button className="btn-primary" type="button">Login</button>
                <div className="tips">Forgot <strong>UserName/Password</strong> </div>

                <div className="create-account-tips">create your account </div>
            </div>
        </div></div> ;
    }
}