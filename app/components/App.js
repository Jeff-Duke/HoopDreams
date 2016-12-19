import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Login from './Login';
import Home from './Home';
import Profile from './Profile';

const routes = [
  { component: Login, title: 'Login to access NBA data'},
  { component: Home, title: 'Pick a team' },
  { component: Profile, title: 'User Profile' },
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
         <Navigator style={styles.navigator}
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) => {
            let RouteComponent = route.component;
            return (
              <RouteComponent { ...route } navigator={ navigator } />
            )
          }}
          navigationBar={
             <Navigator.NavigationBar
               style = { styles.nav }
               routeMapper = { NavigationBarRouteMapper } />
             }
        />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator) {
    if(route.title === "Login to access NBA data") { return null }
    if(route.title !== "User Profile") {
      return (
        <TouchableHighlight onPress={() => navigator.push({
          component: Profile,
          title: "User Profile"
        })}>
          <Text style={styles.prevButton}>Profile</Text>
        </TouchableHighlight>
      )
    }
    if(route.title === "User Profile") {
      return (
        <TouchableHighlight onPress={() => navigator.push({
          component: Login,
          title: 'Login to access NBA data'
        })}>
          <Text style={styles.prevButton}>Logout</Text>
        </TouchableHighlight>
      )
    }
    else { return null }
  },

  RightButton(route, navigator) {
     if(route.title === "Login to access NBA data") { return null }
    if(route.title !== "Pick a team") {
      return (
        <TouchableHighlight onPress={(index) => navigator.push({
          component: Home,
          title: "Pick a team"
        })}>
          <Text style={styles.nextButton}>Search</Text>
        </TouchableHighlight>
      )
    }
    else { return null }
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.navTitle }>Hoop Dreams</Text>
  }
};

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navTitle: {
    marginTop:4,
    fontSize:16,
  },
  prevButton: {
   	fontSize: 16,
    marginLeft:15,
    marginTop:2,
  },
  nextButton: {
    fontSize: 16,
    marginRight:15,
    marginTop:2,
  },
  nav: {
    height: 50,
    backgroundColor: '#1E77E2',
  }
});
