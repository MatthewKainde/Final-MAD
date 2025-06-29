import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Gap from '../../components/atoms/Gap';
import BottomBar from '../../components/molecules/BottomBar';

import IconHome from '../../assets/icons/homebutton.svg';
import IconBell from '../../assets/icons/notificationbutton.svg';
import IconMenu from '../../assets/icons/historybutton.svg';
import IconUser from '../../assets/icons/profilebutton.svg';
import IconBack from '../../assets/icons/arrow-back.svg';

import Cookies from '../../assets/images/Cookies.svg';
import LemonMeringue from '../../assets/images/Lemon.svg';

const orderHistory = [
  {
    id: '1',
    date: '29 JAN, 12:30',
    items: '03 Items',
    name: 'Lemon Meringue',
    price: 'Rp 8.000',
    image: LemonMeringue,
  },
  {
    id: '2',
    date: '29 JAN, 12:30',
    items: '01 Items',
    name: 'Cookies & Cream Shake',
    price: 'Rp 10.000',
    image: Cookies,
  },
  {
    id: '3',
    date: '23 JAN, 18:30',
    items: '01 Items',
    name: 'Cookies & Cream Shake',
    price: 'Rp 10.000',
    image: Cookies,
  },
  {
    id: '4',
    date: '23 JAN, 18:30',
    items: '01 Items',
    name: 'Cookies & Cream Shake',
    price: 'Rp 10.000',
    image: Cookies,
  },
];

type RootStackParamList = {
  Home: undefined;
  FoodsMenu: undefined;
  DrinkMenu: undefined;
  PastriesMenu: undefined;
  OrderHistory: undefined;
  Profile: undefined;
};

type OrderHistoryProps = NativeStackScreenProps<RootStackParamList, 'OrderHistory'>;

const OrderHistory: React.FC<OrderHistoryProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFF8F0" barStyle="dark-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order History</Text>
        </View>

        {/* List */}
        <FlatList
          data={orderHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.dateRow}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.dateText}>{item.items}</Text>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.image}>
                  <item.image width={70} height={70} style={{ borderRadius: 8 }} />
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <Gap height={12} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        {/* Bottom Bar */}
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

export default OrderHistory;

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
    height: 99,
  },
  headerTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 16,
  },
  listContent: {
    
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#FDC57B',
    borderRadius: 12,
    padding: 12,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateText: {
    color: '#4E3629',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  price: {
    fontSize: 14,
    color: '#4E3629',
    marginTop: 4,
  },
});