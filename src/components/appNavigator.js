/**
 * Created by pbarzev on 19/02/2017.
 */

// import libraries for making a component
import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NewMatch from './newmatch';
import MatchCentre from './matchcentre';

export default class AppNavigator extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'newMatch'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'newMatch'}
          title="New Match"
          iconName="ios-football"
          onPress={() => {
            this.setState({
              selectedTab: 'newMatch',
            });
          }}
        >
          <NewMatch />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'matchCentre'}
          title="Match Centre"
          iconName="ios-stats"
          onPress={() => {
            this.setState({
              selectedTab: 'matchCentre',
            });
          }}
        >
          <MatchCentre />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'teams'}
          title="Teams"
          iconName="ios-people"
          onPress={() => {
            this.setState({
              selectedTab: 'teams',
            });
          }}
        >
          <MatchCentre />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}
