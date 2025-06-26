import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface FoodCardProps {
  image: ImageSourcePropType;
  name: string;
  price: string;
  onPressAdd: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, name, price, onPressAdd }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.foodImage} />
      <View style={styles.textContainer}>
        <Text style={styles.foodName}>{name}</Text>
        <Text style={styles.foodPrice}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.plusButton} onPress={onPressAdd} activeOpacity={0.7}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7D09A',
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  foodName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#3E2723',
  },
  foodPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#3E2723',
    marginTop: 4,
  },
  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#C86A3B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },
});