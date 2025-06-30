import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Header, TextInput } from '../../components/molecules';
import { Button, Gap } from '../../components/atoms';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { showMessage } from 'react-native-flash-message';
import { auth, db } from '../../config/Firebase'; // ✅ pastikan path sesuai

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignIn = () => {
    if (!email || !password) {
      showMessage({
        message: 'Email dan Password wajib diisi',
        type: 'danger',
      });
      return;
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        // ✅ Ambil data user dari Realtime Database
        onValue(ref(db, 'users/' + user.uid), snapshot => {
          const userData = snapshot.val();

          if (userData) {
            showMessage({
              message: 'Berhasil login!',
              type: 'success',
            });

            // 🚀 Navigasi ke Home (kamu bisa sesuaikan parameter yang dibawa)
            navigation.replace('Home', {
              uid: user.uid,
              userData: userData, // kamu bisa pakai ini di halaman Home
            });
          } else {
            showMessage({
              message: 'User data tidak ditemukan di database!',
              type: 'danger',
            });
          }
          setLoading(false);
        });
      })
      .catch(error => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.pageContainer}>
      <Header text="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={32} />
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={24} />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Gap height={32} />
        <Button text="Sign In" onPress={onSignIn} />
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
    fontSize: 18,
    color: '#222',
    marginBottom: 0,
  },
  input: {
    marginTop: 2,
  },
});
