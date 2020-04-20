import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"


export class Sucess extends Component {

  render() {

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="sucess" />
            <h1>Thank you for your submission!</h1>
            <p>you will get an email with a further instructions.</p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Sucess
