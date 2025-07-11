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
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomBar, FoodCard } from '../../components/molecules';
import { Gap } from '../../components/atoms';

import {
  IconBack,
  IconHome,
  IconBell,
  IconMenu,
  IconUser,
} from '../../assets/icons';

import {
  Croissant,
  LemonTart,
  Eclair,
  Lemon, 
} from '../../assets/images';

const pastryData = [
  { id: '1', name: 'Croissant', price: 'Rp 12.000', image: Croissant },
  { id: '2', name: 'Lemon Tart', price: 'Rp 18.000', image: LemonTart },
  { id: '3', name: 'Eclair', price: 'Rp 15.000', image: Eclair },
  { id: '4', name: 'Lemon Cake', price: 'Rp 16.000', image: Lemon }, 
];

type RootStackParamList = {
  Home: undefined;
  FoodsMenu: undefined;
  DrinkMenu: undefined;
  PastriesMenu: undefined;
  OrderHistory: undefined;
  Profile: undefined;
  Confirmation: undefined;
};

type PastriesMenuProps = NativeStackScreenProps<RootStackParamList, 'PastriesMenu'>;

const PastriesMenu: React.FC<PastriesMenuProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFF8F0" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pastries</Text>
        </View>

        <View style={styles.listWrapper}>
          <FlatList
            data={pastryData}
            renderItem={({ item }) => (
              <FoodCard
                name={item.name}
                price={item.price}
                image={<item.image width={75} height={75} />}
                onPressAdd={() => navigation.navigate('Confirmation')}
                onImagePress={() => navigation.navigate('Confirmation')}
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

export default PastriesMenu;

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
  card: {
    backgroundColor: '#FFE0B2',
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 8,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
});