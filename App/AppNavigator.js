import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            initial={true}
            component={Login}
            hideNavBar={true}
          />
          <Scene key="signup" component={SignUp} hideNavBar={true} />
          <Scene key="home" component={Home} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
