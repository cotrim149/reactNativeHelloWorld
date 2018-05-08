/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Repo from './components/Repo';

type Props = {};
export default class App extends Component<Props> {

  state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars2.githubusercontent.com/u/2018859?s=40&v=4',
        title : 'Repo title',
        author: 'Repo author'
      },
      {
        id: 2,
        thumbnail: 'https://avatars2.githubusercontent.com/u/2018859?s=40&v=4',
        title : 'Repo title 2',
        author: 'Repo author'
      },
    ]
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minha primeira aplicação</Text>
          <TouchableOpacity onPress = { () => {} } >
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList} >
          {
            this.state.repos.map( repo => <Repo key={repo.id} data={repo}/> )
          }

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  repoList: {
    padding: 20,
  },
});
