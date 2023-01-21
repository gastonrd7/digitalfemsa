import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import { formatDate, formatNumber } from '../utils';


const ProductDetail = ({ navigation, route: {params: { product } } }: any ) => {

  const goBack = () => {
    navigation.navigate('Home');
  }

  return (
    <>
    <ScrollView>
        <View style={styles.header}>
                <Text style={{...styles.text, ...styles.titleHome}}>
                {product.product}
                </Text>
        </View>
        <Card containerStyle={styles.imageCard}>
            <Card.Image
                style={styles.image}
                source={{
                uri: product.image
                }}
            />
            </Card>
        <View style={styles.detail}>
                <Text style={{...styles.text, ...styles.sectionTitle}}>
                {'Detalles del producto:'}
                </Text>
                <Text style={{...styles.text, ...styles.itemSubtitle}}>
                {`Comprado el ${formatDate(product.createdAt)}`}
                </Text>
                <Text style={{...styles.text, ...styles.sectionTitle}}>
                {'Con esta compra acumulaste:'}
                </Text>
                <Text style={styles.point}>
                {`${formatNumber(product.points)} puntos`}
                </Text> 
            <TouchableOpacity style={styles.cleanFilter} key="Canjeados" onPress={() => goBack()}>
                <Text style={{...styles.text, ...styles.buttonText}}>{'Aceptar'}</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    </>
);
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#CFD6FF',
        paddingTop: 90,
        paddingLeft: 20,
        paddingBottom: 20,
        height: 150,
    },
    detail: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontFamily: 'Avenir-Black',
        fontWeight: '800',
        fontSize: 14,
    },
    titleHome: {
        fontSize: 24,
    },
    sectionTitle: {
        fontStyle: 'normal',
        lineHeight: 19,
        color: '#9B9898',
        marginBottom: 20,
        marginTop: 20,
    },
    imageCard: {
        justifyContent: 'center',
        width: '90%',
        height: 350,
        padding: 75,
        borderRadius: 10,
    },
    image: {
        width:200,
        height: 200,
    },
    itemTitle:{
        fontStyle: 'normal',
        lineHeight: 19,
        color: '#000000',
    },
    itemSubtitle:{
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 21.86,
        color: '#000000',
    },
    point:{
        fontSize: 24,
        lineHeight: 32.78,
        color: '#000000',
        marginVertical: 15,
        marginTop: 3,
        marginBottom: 40
    },
    cleanFilter: {
        backgroundColor: '#334FFA',
        width: 350,
        height: 50,
        borderRadius: 10,
        'justifyContent': 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 16,
    }
})

export default ProductDetail;