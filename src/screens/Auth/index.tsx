import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {Formik} from 'formik';
import GuestLayout from '../../layouts/GuestLayout';
import {COLORS} from '../../constants/colors';
import {scale} from '../../utils/sizes';

const Auth: React.FC = () => {
  return (
    <GuestLayout>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Review HUB</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
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
            <Pressable onPress={handleSubmit} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </GuestLayout>
  );
};

export default Auth;

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: scale(20),
  },
  titleText: {
    color: COLORS.WHITE,
    fontSize: scale(28),
  },
  inputContainer: {
    backgroundColor: COLORS.WHITE,
    width: scale(280),
    height: scale(40),
    marginBottom: scale(20),
    borderRadius: scale(16),
  },
  innerInput: {
    width: '100%',
    height: '100%',
    padding: scale(8),
  },
  buttonContainer: {
    width: scale(280),
    height: scale(44),
    borderRadius: scale(18),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_PURPLE,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: scale(18),
    fontWeight: '500',
  },
});
