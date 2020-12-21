import { render } from "@testing-library/react"
import React from 'react'


class Signup extends React.Component {
    componentDidMount(){
      window.location.replace('https://mailchi.mp/d6cd2c3522d2/readers-world')
    }
    render(){
        return(<h1>s</h1>);
    }
  }

export default Signup;