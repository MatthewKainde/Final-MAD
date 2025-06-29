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
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [based64, setbased64] = useState('');
  const [photoUri, setPhotoUri] = useState(null);

  const registerNewUser = () => {
    console.log({ fullName, email, password, based64 });
    navigation.replace('Home');
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
    } else {
      const data = result.assets[0];
      const photoBased64 = `data:${data.type};base64,${data.base64}`;
      setbased64(photoBased64);
      setPhotoUri(photoBased64);
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
          onChangeText={e => setFullName(e)}
        />
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={16} />
        <TextInput
          text="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
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
    borderRadius: 55, // replaced 110 / 2 for clarity
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
});
