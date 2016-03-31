'use strict';
import React, { Text, TouchableOpacity } from 'react-native';
import { newMessage } from './routes';
import { postMessage } from './../../actions/actions';
import { Colors } from './../../config/design';

const styles = {
    navBarRightButton: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        top: 0,
        right: 0,
        height: 50
    },
    text: {
        color: Colors.White
    }
};

const navigationBarButtons = (dispatch) => ({

    RightButton (route) {
        // Hint: implement the send-button for android here
    }
});

export default navigationBarButtons;
