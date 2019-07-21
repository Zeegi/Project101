import React, { Component } from 'react'

const divStyle = {
    background: 'lightblue'
  };

export default class Login extends Component {

    render() {
        const { login } = this.props;
        return (
            <div className= 'Login-spacing' align='center' style={divStyle}>
                <form>
                    <div>
                        <input type="text" name="userid" placeholder='User Id'/>
                    </div>
                    <div>
                        <input type="password" name="pwd" placeholder='Password'/>
                    </div>
                    <div>
                        <button onClick={login}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
