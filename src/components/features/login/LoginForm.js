import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../style/colors';
import {strings} from '../../../utils/i18n';
import {connect} from 'react-redux';

import {loginRequest} from '../../../redux/actions/login';

import {ResponsiveHeight, ResponsiveSize} from '../../../utils/utilityFunction';

class LoginForm extends Component {
  handleSubmit = () => {
    this.props.loginRequest();
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{paddingBottom: 10}}
        keyboardShouldPersistTaps="always">
        <View style={{height: '100%'}}>
          <View
            style={{
              width: '100%',
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/login.png')}
                style={{marginTop: 30}}
              />
            </View>

            <View style={{margin: 20}}>
              <View>
                <Text style={styles.formLabelText}>{strings('login.id')}</Text>
              </View>
              <TextInput textAlignVertical={'top'} style={styles.formInput} />
            </View>
            <View style={{margin: 20, marginTop: 11}}>
              <View>
                <Text style={styles.formLabelText}>
                  {strings('login.password')}
                </Text>
              </View>
              <TextInput textAlignVertical={'top'} style={styles.formInput} />
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>{strings('login.button')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: ResponsiveHeight(240),
    marginTop: ResponsiveHeight(35),
    backgroundColor: Colors.bgHeaderOrange,
    padding: ResponsiveHeight(8),
  },
  buttonText: {
    fontSize: ResponsiveSize(18),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  formLabelText: {
    fontSize: ResponsiveSize(17),
  },
  formInput: {
    height: ResponsiveHeight(50),
    borderWidth: ResponsiveHeight(1),
    padding: ResponsiveHeight(0),
    backgroundColor: Colors.validBgGreen,
    borderColor: Colors.validBorderGreen,
  },
});

const mapStateToProps = state => ({
  loginData: state.login,
});

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(loginRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
