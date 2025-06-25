import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import MenuButton from '../../components/atoms/MenuButton';
import BottomBar from '../../components/molecules/BottomBar';
import Gap from '../../components/atoms/Gap';

// Correct SVG imports
import BurgerImage from '../../assets/welcomeburger.svg';
import IconHome from '../../assets/homebutton.svg';
import IconBell from '../../assets/notificationbutton.svg';
import IconMenu from '../../assets/historybutton.svg';
import IconUser from '../../assets/profilebutton.svg';
import IconFoods from '../../assets/foods.svg';
import IconDrinks from '../../assets/drinks.svg';
import IconPastries from '../../assets/pastries.svg';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <BurgerImage width={screenWidth} height={200} style={styles.burgerImage} />
          </View>
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeText}>Welcome, Customer</Text>
          </View>
          <Gap height={16} />
          <View style={styles.menuRow}>
            <MenuButton icon={<IconFoods width={48} height={48} />} label="Foods" onPress={() => {}} />
            <MenuButton icon={<IconDrinks width={48} height={48} />} label="Drinks" onPress={() => {}} />
            <MenuButton icon={<IconPastries width={48} height={48} />} label="Pastries" onPress={() => {}} />
          </View>
        </ScrollView>
        <BottomBar
          buttons={[
            { icon: <IconHome width={32} height={32} />, onPress: () => {} },
            { icon: <IconBell width={32} height={32} />, onPress: () => {} },
            { icon: <IconMenu width={32} height={32} />, onPress: () => {} },
            { icon: <IconUser width={32} height={32} />, onPress: () => {} },
          ]}
          style={styles.bottomBar}
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
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 24,
  },
  imageContainer: {
    width: '100%',
    marginBottom: 8,
  },
  burgerImage: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  welcomeCard: {
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 24,
    marginBottom: 12,
    alignSelf: 'stretch',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  welcomeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#3E2723',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 8,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
