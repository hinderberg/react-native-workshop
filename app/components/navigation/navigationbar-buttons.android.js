'use strict';
import React, { TouchableOpacity } from 'react-native';
import { newMessage } from './routes';
import ConnectedSendButton from './spinning-send-button-DO-NOT-TOUCH';

const styles = {
    navBarRightButton: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        top: 0,
        right: 0,
        height: 50
    },
    sendButton: {
      padding: 15,
      top: -3
    }
};

const navigationBarButtons = (dispatch) => ({

    RightButton (route) {
        if (route.title === newMessage.title) {
            return (
                <TouchableOpacity style={styles.navBarRightButton}>
                  <ConnectedSendButton style={styles.sendButton} />
                </TouchableOpacity>
            );
        }
        return null;
    }
});

export default navigationBarButtons;
