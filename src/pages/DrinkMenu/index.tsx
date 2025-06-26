import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

// Impor komponen dari barrel kategori mereka
import { BottomBar, FoodCard } from '../../components/molecules';
import { Gap } from '../../components/atoms';

// Impor ikon dari barrel icons
import {
  IconBack,
  IconHome,
  IconBell,
  IconMenu,
  IconUser,
} from '../../assets/icons';

import {
  OrangeJuice,
  Punch,
  Cookies, 
  GingerAle,
} from '../../assets/images';

const drinkData = [
  { id: '1', name: 'Orange Juice', price: 'Rp 7.000', image: OrangeJuice },
  { id: '2', name: 'Punch', price: 'Rp 8.000', image: Punch },
  { id: '3', name: 'Cookies & Cream Shake', price: 'Rp 10.000', image: Cookies }, // Pastikan 'Cookies' di sini merujuk ke Cookies.png
  { id: '4', name: 'Ginger Ale', price: 'Rp 8.000', image: GingerAle },
];

const DrinkMenu = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFF8F0" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <IconBack width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Drinks</Text>
        </View>

        <View style={styles.listWrapper}>
          <FlatList
            data={drinkData} 
            renderItem={({ item }) => (
              <FoodCard 
                name={item.name}
                price={item.price}
                image={item.image}
                onPressAdd={() => console.log('Add', item.name)}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Gap height={16} />}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
        
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

export default DrinkMenu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#986D5A',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#FFF2E9',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 4},
    zIndex: 1,
    height:99,
  },
  headerTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 16,
  },
  listWrapper: {
    flex: 1,
    backgroundColor: '#FFF2E9',
    marginHorizontal: 20,
    marginTop: 48,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  listContainer: {
    paddingBottom: 100,
  },
});