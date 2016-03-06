'use strict';
import React, {
    View,
    Component,
    ListView,
    RefreshControl
} from 'react-native';

import StartPage from './start-page';
import ColoredFab from './colored-fab';
import { Message } from './message';

const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

const validateMessage = message => {
    return message.message && message.message.length > 0
}

class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateSource: DSConfig
        };
    }

    _getDataSource(messages) {
        return this.state.dateSource.cloneWithRows(messages);
    }

    _onRefresh() {
        this.props.refreshView();
    }

    _goto() {
        this.props.navigator.push({name: 'NewView', component: StartPage, title: 'Skriv ny'});
    }

    render() {
        let messages = this.props.messages.filter(validateMessage).reverse();
        let dataSource = this._getDataSource(messages);

        const refreshControll = (
            <RefreshControl
                refreshing={ this.props.refreshing }
                onRefresh={ this._onRefresh.bind(this) }
                tintColor="#ff0000"
                title="Laster..."
                colors={ ['#ff0000', '#00ff00', '#0000ff'] }
                progressBackgroundColor="#fff"
            />
        );

        return (
            <View style={{flex: 1}}>
                <ListView
                    style={{ flex: 1 }}
                    refreshControl={refreshControll}
                    dataSource={ dataSource }
                    renderRow={ Message }
                />
                <ColoredFab onPress={this._goto.bind(this)}>+</ColoredFab>
            </View>
        )
    }
}

MessagePage.propTypes = {
    messages: React.PropTypes.array
};

export default MessagePage;
