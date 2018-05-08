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
						<Text style={styles.boxTitle}>Adicionar repositório</Text>
						<TextInput autoFocus autoCapitalization='none' style={styles.boxInput} underlineColorAndroid = 'rgba(0,0,0,0)' placeholder = 'organização/repositório'></TextInput>

						<View style={styles.buttonsContainer}>

							<TouchableOpacity
								style={[styles.button, styles.cancelButton]}
								onPress= { () => {} }
							>
								<Text style={styles.buttonText}>Cancelar</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={[styles.button, styles.submitButton]}
								onPress= { () => {} }
							>
								<Text style={styles.buttonText}>Adicionar</Text>
							</TouchableOpacity>

						</View>
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
		},
		boxTitle: {
			fontWeight: 'bold',
			fontSize: 16,
		},
		boxInput: {
			alignSelf: 'stretch',
			marginTop: 10,
			paddingVertical: 0,
			paddingHorizontal: 20,
			borderWidth: 1,
			borderColor: '#DDD',
			height: 40,
			borderRadius: 3,
		},
		buttonsContainer: {
			marginTop: 10,
			height: 40,
			flexDirection: 'row'
		},
		button: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 3,
		},
		cancelButton: {
			backgroundColor: '#E25F5F',
			marginRight: 5,
		},
		submitButton: {
			backgroundColor: '#70BD85',
			marginLeft: 5,
		},
		buttonText: {
			fontWeight: 'bold',
			color: '#FFF',
			fontSize: 12
		}
});
