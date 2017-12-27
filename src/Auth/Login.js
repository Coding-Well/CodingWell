import React, { Component } from 'react'
import '../static/login.css'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handelUsername = this.handelUsername.bind(this)
  handelPassword = this.handelPassword.bind(this)
  handelUsername(e) {
    this.setState({
      'username': e.target.value
    })
  }
  handelPassword(e) {
    this.setState({
      'password': e.target.value
    })
  }

  render () {
    return (
      <div className="login">
        <div className="login-box">
          <h2>欢迎登录</h2>
          <div className="login-username">
            <input type="text" onChange={this.handelUsername} value={this.state.username} placeholder="请输入用户名"/>
          </div>
          <div className="login-password">
            <input type="password" onChange={this.handelPassword} value={this.state.password} placeholder="请输入密码"/>
          </div>
        </div>
      </div>
    )
  }
}
