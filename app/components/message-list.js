'use strict';

import React, {
  View,
  Text,
  Component,
  ListView
} from 'react-native';

import { Colors } from './../config/design';

const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSource: DSConfig
    };
  }

  _getDataSource(messages) {
    return this.state.dateSource.cloneWithRows(messages);
  }

  render() {
    // Hint: React-native has a ListView component, which is great for lists *wink, wink*
    return <View></View>;
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array,
  refreshView: React.PropTypes.func,
  refreshing: React.PropTypes.bool
};
