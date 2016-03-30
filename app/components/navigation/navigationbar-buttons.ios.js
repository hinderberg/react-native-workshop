'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import { Colors } from './../../config/design';
import { newMessage, listMessages } from './routes';
import { navigateTo } from '../../actions/actions';

const navigationBarButtons = (dispatch) => ({

    RightButton: function (route, navigator, index, navState) {
        // Hint dispatch navigateTo(newMessage)) to change the route
        return null;
    }
});


export default navigationBarButtons;
