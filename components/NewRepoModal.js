import React, {Component} from 'react';

import {
	View,
	Text,
	Modal,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default class NewRepoModal extends Component {
	render() {
		return(
			// Modal é uma tela inteira, e a primeira view da hierarquia controla seu compotamento
			<Modal animationType = 'fade' transparent = {true} visible = {true}>
				<View style={styles.modalContainer}>
					<View style={styles.boxContainer}>

					</View>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create ({
		modalContainer: {
			flex: 1,
			backgroundColor: 'rgba(0,0,0,0.6)', // usando transaparência tem q ser com rgba
			justifyContent: 'center',
			alignItems: 'center',
		},
		boxContainer: {
			padding: 20,
			borderRadius: 10,
			backgroundColor: '#FFF',
			alignItems: 'center',
			width: 280,
		}
});
