import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Formik} from 'formik';
import GuestLayout from '../../layouts/GuestLayout';
import {COLORS} from '../../constants/colors';
import {scale} from '../../utils/sizes';
import AnimatedButton from '../../components/AnimatedButton';
import {Dispatch, RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';

const mapState = (state: RootState) => ({});

const mapDispatch = (dispatch: Dispatch) => ({
  signIn: dispatch.authorization.signIn,
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ScreenProps extends PropsFromRedux {}

const Auth: React.FC<ScreenProps> = ({signIn}) => {
  const handleSignIn = ({email, password}) => {
    console.log(`user=${email} pass=${password}`);
    signIn({email, password});
  };

  return (
    <GuestLayout>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Review HUB</Text>
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
            handleSignIn(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.innerInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.innerInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />
              </View>
              <AnimatedButton text="Sign In" onSubmit={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </GuestLayout>
  );
};

export default connector(Auth);

const styles = StyleSheet.create({
  container: {
    marginBottom: '32%',
  },
  titleContainer: {
    marginVertical: scale(20),
  },
  titleText: {
    color: COLORS.WHITE,
    fontSize: scale(28),
  },
  inputContainer: {
    backgroundColor: '#efefef',
    width: scale(280),
    height: scale(40),
    marginBottom: scale(20),
    borderRadius: scale(16),
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.07,
  },
  innerInput: {
    width: '100%',
    height: '100%',
    padding: scale(8),
  },
});
