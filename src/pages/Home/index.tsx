import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import MenuButton from '../../components/atoms/MenuButton';
import BottomBar from '../../components/molecules/BottomBar';
import Gap from '../../components/atoms/Gap';

import { wBurger as WBurger } from '../../assets/images';
import IconHome from '../../assets/icons/homebutton.svg';
import IconBell from '../../assets/icons/notificationbutton.svg';
import IconMenu from '../../assets/icons/historybutton.svg';
import IconUser from '../../assets/icons/profilebutton.svg';
import IconFoods from '../../assets/icons/foods.svg';
import IconDrinks from '../../assets/icons/drinks.svg';
import IconPastries from '../../assets/icons/pastries.svg';

const Home = () => {
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
              <MenuButton icon={<IconFoods width={48} height={48} />} label="Foods" onPress={() => {}} />
              <MenuButton icon={<IconDrinks width={48} height={48} />} label="Drinks" onPress={() => {}} />
              <MenuButton icon={<IconPastries width={48} height={48} />} label="Pastries" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>

        <BottomBar
          buttons={[
            { icon: <IconHome width={32} height={32} />, onPress: () => {} },
            { icon: <IconBell width={32} height={32} />, onPress: () => {} },
            { icon: <IconMenu width={32} height={32} />, onPress: () => {} },
            { icon: <IconUser width={32} height={32} />, onPress: () => {} },
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