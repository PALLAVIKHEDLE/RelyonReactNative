import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {customerListRequest} from '../../../redux/actions/customerList';
import {ResponsiveHeight} from '../../../utils/utilityFunction';
import {connect} from 'react-redux';
import {strings} from '../../../utils/i18n';
import Colors from '../../../style/colors';
import {ListItem} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';

class Dashboard extends Component {
  groupedArray = [];
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: strings('customerList.title'),
      headerStyle: {
        backgroundColor: Colors.bgHeadingBlack,
      },
      headerTitleStyle: {
        color: Colors.white,
        ...Platform.select({
          android: {fontFamily: 'Roboto'},
        }),
      },

      headerTintColor: Colors.white,
    };
  };

  componentDidMount() {
    this.props.customerListRequest();
  }

  _renderItem = ({item, index}) => {
    return (
      <>
        <ListItem title={item.LedgerName} />
      </>
    );
  };

  render() {
    const {customerList} = this.props.customerList;
    let array;
    let ledgerName = [];

    customerList.forEach(element => {
      (array = {
        value: element.LedgerName,
      }),
        ledgerName.push(array);
    });
    console.log('ledgerName', ledgerName);

    return (
      <View>
        <ScrollView>
          <Dropdown label="LedgerName" data={ledgerName} itemCount={10} />
          <FlatList
            data={customerList}
            renderItem={this._renderItem}
            keyExtractor={item => item._id}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: ResponsiveHeight(160),
    width: '100%',
  },
});

const mapStateToProps = state => ({
  customerList: state.customerList,
});
const mapDispatchToProps = dispatch => ({
  customerListRequest: () => dispatch(customerListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
