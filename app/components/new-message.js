'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

import { Colors, Fonts } from './../config/design';
import { connect } from 'react-redux';
import { postMessage, setNewMessageText, setUsername, openImagePicker, clearNewMessageState } from '../actions/actions';

class NewMessage extends Component {
    render() {
        const { username, newMessageText, setNewMessageText, setUsername, error } = this.props;

        // Hint React-Native uses Controlled Components https://facebook.github.io/react/docs/forms.html#controlled-components
        return (
            <View style={styles.container}>
                <Text>New Message View</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 60
    }
});

const mapStateToProps = ({ username, newMessageText, error, image }) => ({username, newMessageText, error, image});
const mapDispatchToProps = (dispatch) => ({
    postMessage: () => dispatch(postMessage()),
    setNewMessageText: message => dispatch(setNewMessageText(message)),
    setUsername: name => dispatch(setUsername(name)),
    onPickImagePressed: () => dispatch(openImagePicker()),
    clearState: () => dispatch(clearNewMessageState())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
