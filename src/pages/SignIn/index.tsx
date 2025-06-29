import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Header, TextInput } from '../../components/molecules';
import { Button, Gap } from '../../components/atoms';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.pageContainer}>
      <Header text="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={32} />
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={20} />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Gap height={32} />
        <Button text="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={16} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          buttonColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  contentContainer: {
    flex: 1,
    marginTop: 16,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    color: '#222',
  },
});