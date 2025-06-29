import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Gap } from '../../components/atoms';
import { IconBack } from '../../assets/icons';
import { ProfileImage } from '../../assets/images';
import BottomBar from '../../components/molecules/BottomBar';
import { IconHome, IconBell, IconMenu, IconUser } from '../../assets/icons';

type RootStackParamList = {
  Home: undefined;
  FoodsMenu: undefined;
  DrinkMenu: undefined;
  PastriesMenu: undefined;
  OrderHistory: undefined;
  Profile: undefined;
  SignIn: undefined;
};

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Account</Text>
        </View>
        <Gap height={44} />
        <View style={styles.content}>
          <View style={styles.profileContainer}>
            <ProfileImage style={styles.avatar} />
            <Gap height={16} />
            <Text style={styles.name}>User</Text>
          </View>
          <Gap height={37} />
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('OrderHistory')}>
            <Text style={styles.buttonText}>Order History</Text>
          </TouchableOpacity>
          <Gap height={37} />
          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            activeOpacity={0.8}
            onPress={() => navigation.replace('SignIn')}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomBar
        buttons={[
          { icon: <IconHome width={32} height={32} />, onPress: () => navigation.navigate('Home') },
          { icon: <IconBell width={32} height={32} />, onPress: () => {} },
          { icon: <IconMenu width={32} height={32} />, onPress: () => navigation.navigate('OrderHistory') },
          { icon: <IconUser width={32} height={32} />, onPress: () => navigation.navigate('Profile') },
        ]}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#020202',
    marginTop: 16,
  },

  button: {
    height: 61,
    width: '90%', 
    borderRadius: 30.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9D7B6F',
  },
  logoutButton: {
    backgroundColor: '#D9534F',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});