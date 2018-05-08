import React, {Component} from 'react';

import {
	View,
	StyleSheet,
	Image,
	Text,
} from 'react-native';

export default class Repo extends Component {
	render() {
		return (
			<View style={styles.repo}>
				<Image
					style = {styles.repoImage},
					source = {{ uri: }}
				/>
				<View style = {styles.repoInfo}>
					<Text style = {styles.repoTitle}>Repo Title</Text>
					<Text style = {styles.repoAuthor}>Repo author</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	repo: {
		padding: 20,
		backgroundColor: '#FFF',
		height: 120,
		marginBottom: 20,
		borderRadius: 5,
	},
});
