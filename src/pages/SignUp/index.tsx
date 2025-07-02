import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { NullPhoto } from '../../assets/images';
import { Button, Gap } from '../../components/atoms';
import { Header, TextInput } from '../../components/molecules';
import { launchCamera } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

import { auth, db } from '../../config/Firebase'; // ✅ pastikan path sesuai

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [base64, setBase64] = useState('');
  const [photoUri, setPhotoUri] = useState(null);

  const registerNewUser = () => {
    if (!fullName || !email || !password) {
      showMessage({
        message: 'Semua field wajib diisi!',
        type: 'danger',
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        // Simpan data user ke Realtime Database
        set(ref(db, 'users/' + user.uid), {
          fullName: fullName,
          email: email,
          photo: base64,
        });

        showMessage({
          message: 'Akun berhasil didaftarkan!',
          type: 'success',
        });

        navigation.navigate('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  const getImage = async () => {
    const result = await launchCamera({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Ambil foto dibatalkan',
        type: 'danger',
      });
      setPhotoUri(null);
    } else if (result.assets && result.assets.length > 0) {
      const data = result.assets[0];
      const base64Photo = `data:${data.type};base64,${data.base64}`;
      setBase64(base64Photo);
      setPhotoUri(base64Photo);
    }
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Header
        text="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
              {photoUri ? (
                <Image source={{ uri: photoUri }} style={styles.avatar} />
              ) : (
                <NullPhoto style={styles.avatar} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={26} />
        <TextInput
          text="Full Name"
          placeholder="Enter your full name"
          onChangeText={setFullName}
        />
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <TextInput
          text="Password"
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <Gap height={24} />
        <Button text="Continue" onPress={registerNewUser} />
        <Gap height={12} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileBorder: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
});
