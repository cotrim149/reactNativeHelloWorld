import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Repo extends Component {
	render() {
		return (
			<View style={styles.repo}>
				<Image
					style = {styles.repoImage},
					source = {{ uri: }}
				/>
			</View>
		);
	}
}
