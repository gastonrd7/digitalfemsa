import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import { formatDate, formatNumber } from '../../utils';
import { IProduct } from '../../interfaces/product';
import { State } from '../../reducers/products';

const Products = ({ products, navigation, styles }: {products: State, navigation: any, styles: any} ) => {
  
  const goDetail = (item: IProduct) => {
    navigation.navigate('Product', {product: item});
  }
    return (
        <ScrollView style={styles.items}>
            {products.productsToDisplay && products.productsToDisplay.map((item: IProduct, i: number) => {
                return (
                <TouchableOpacity key={item.id} onPress={() => goDetail(item)}>
                    <View key={i} style={styles.user}>
                        <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={{...styles.text, ...styles.itemTitle}}>{item.product}</ListItem.Title>
                            <ListItem.Subtitle style={{...styles.text, ...styles.itemSubtitle}}>{formatDate(item.createdAt)}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Text style={{...styles.text, ...styles.sign, ...{color: item.is_redemption ? '#FF0000' : '#00B833'}}}>{item.is_redemption ? '-' : '+' }</Text>
                        <Text style={{...styles.text, ...styles.point}}>{formatNumber(item.points)}</Text>
                        <Text style={styles.greater}>{'>'}</Text>
                    </View>
                </TouchableOpacity>
                );
            })} 
        </ScrollView>
    )
}

export default Products;