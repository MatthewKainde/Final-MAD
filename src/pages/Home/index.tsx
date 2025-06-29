import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MenuButton from '../../components/atoms/MenuButton';
import BottomBar from '../../components/molecules/BottomBar';
import Gap from '../../components/atoms/Gap';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { wBurger as WBurger } from '../../assets/images';
import { IconHome, IconBell, IconMenu, IconUser } from '../../assets/icons';
import { IconFoods, IconDrinks, IconPastries } from '../../assets/icons';

type RootStackParamList = {
  Home: undefined;
  FoodsMenu: undefined;
  DrinkMenu: undefined;
  PastriesMenu: undefined;
  OrderHistory: undefined;
  Profile: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <WBurger style={styles.burgerImage} />

          <View style={styles.contentContainer}>
            <View style={styles.welcomeCard}>
              <Text style={styles.welcomeText}>Welcome, Customer</Text>
            </View>
            <Gap height={24} />
            <View style={styles.menuRow}>
              <MenuButton icon={<IconFoods width={48} height={48} />} label="Foods" onPress={() => navigation.navigate('FoodsMenu')} />
              <MenuButton icon={<IconDrinks width={48} height={48} />} label="Drinks" onPress={() => navigation.navigate('DrinkMenu')} />
              <MenuButton icon={<IconPastries width={48} height={48} />} label="Pastries" onPress={() => navigation.navigate('PastriesMenu')} />
            </View>
          </View>
        </ScrollView>

        <BottomBar
          buttons={[
            { icon: <IconHome width={32} height={32} />, onPress: () => navigation.navigate('Home') },
            { icon: <IconBell width={32} height={32} />, onPress: () => {} },
            { icon: <IconMenu width={32} height={32} />, onPress: () => navigation.navigate('OrderHistory') },
            { icon: <IconUser width={32} height={32} />, onPress: () => navigation.navigate('Profile') },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#6D4C41',
  },
  container: {
    flex: 1,
    backgroundColor: '#6D4C41',
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  burgerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  welcomeCard: {
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: -40,
    marginHorizontal: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  welcomeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#3E2723',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});