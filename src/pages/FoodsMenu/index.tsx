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

import BottomBar from '../../components/molecules/BottomBar';
import FoodCard from '../../components/molecules/FoodCard';
import Gap from '../../components/atoms/Gap';

// Pastikan path ikon sudah benar
import IconBack from '../../assets/icons/back-arrow.svg';
import IconHome from '../../assets/icons/homebutton.svg';
import IconBell from '../../assets/icons/notificationbutton.svg';
import IconMenu from '../../assets/icons/historybutton.svg';
import IconUser from '../../assets/icons/profilebutton.svg';

const foodData = [
  { id: '1', name: 'Double Cheeseburger', price: 'Rp 15.000', image: require('../../assets/images/Burger.png') },
  { id: '2', name: 'Salad', price: 'Rp 15.000', image: require('../../assets/images/Salad.png') },
  { id: '3', name: 'Spaghetti', price: 'Rp 15.000', image: require('../../assets/images/Spaghetti.png') },
  { id: '4', name: 'Fried Rice', price: 'Rp 15.000', image: require('../../assets/images/Fried-Rice.png') },
];

const FoodsMenu = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFF8F0" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <IconBack width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Foods</Text>
        </View>

        <View style={styles.listWrapper}>
          <FlatList
            data={foodData}
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

export default FoodsMenu;

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
    paddingHorizontal: 12, // Menambahkan padding horizontal di wrapper
  },
  listContainer: {
    paddingBottom: 100,
  },
});