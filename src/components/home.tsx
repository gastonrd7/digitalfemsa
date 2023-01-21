import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from '../state/store';
import { getProducts, setFilter, cleanFilter } from '../state/actions/getProducts';
import { Card } from '@rneui/themed';
import { formatNumber } from '../utils';
import Products from './home/products';




const Home = (props: any ) => {
  
  const dispatch = useDispatch();

  const products = useSelector(store => store.Products);
  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);

  const applyFilter = (is_redemption: boolean) => {
    dispatch(setFilter(is_redemption));
  }

  const resetFilter = () => {
    dispatch(cleanFilter());
  }
  
  if(products.isFetching) {
    return <View style={styles.cargando}>
        <Text>
          {'Cargando'}
        </Text>
    </View>;
  }
  return (
    <>
     <View style={styles.container}>
      <Text style={{...styles.text, ...styles.titleHome}}>
          {'Bienvenido de vuelta!'}
        </Text>
        <Text style={{...styles.text, ...styles.subtitleHome}}>
          {'Ruber Rodriguez'}
        </Text>
        <Text style={{...styles.text, ...styles.sectionTitle}}>
          {'TUS PUNTOS'}
        </Text>
        <View style={styles.summaryView}>
          <Card containerStyle={styles.summary}>
            <Text style={{...styles.text, ...styles.titleSummary}}>
              {'Diciembre'}
            </Text>
            <Text style={{...styles.text, ...styles.totalSummary}}>
              {`${formatNumber(products.total)} pts`}
            </Text>
          </Card>
        </View>
        <Text style={{...styles.text, ...styles.sectionTitle}}>
          {'TUS MOVIMIENTOS'}
        </Text>
        <Products products={products} navigation={props.navigation} styles={styles} />
        <View style={styles.footer}>
            {
              products.isTheFilterApplied ?
              <>     
              <TouchableOpacity style={{...styles.button, ...styles.cleanFilter}} key="Canjeados" onPress={() => resetFilter()}>
                <Text style={{...styles.text, ...styles.buttonText}}>{'Todos'}</Text>
              </TouchableOpacity>
              </>
              :
              <>
                <TouchableOpacity style={styles.button} key="Ganados" onPress={() => applyFilter(true)}>
                  <Text style={styles.buttonText}>{'Ganados'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} key="Canjeados" onPress={() => applyFilter(false)}>
                  <Text style={styles.buttonText}>{'Canjeados'}</Text>
                </TouchableOpacity>
              </>
            }
        </View>
      </View>
    </>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontFamily: 'Avenir-Black',
    fontWeight: '800',
    fontSize: 14,
  },
  cargando: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryView: {
    alignItems: 'center',
  },
  summary: {
    width: 320, 
    height: 143, 
    borderRadius: 20,
    backgroundColor: '#334FFA',
  },
  titleSummary: {
    fontSize: 16,
    lineHeight: 21.86,
    color: '#FFFFFF',
  },
  totalSummary: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 32,
    lineHeight: 44,
    color: '#FFFFFF',
    margin: 15,
  },
  titleHome: {
    fontSize: 20,
    lineHeight: 27,
  },
  subtitleHome: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  sectionTitle: {
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#9B9898',
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 10,
    borderRadius: 10,
  },
  items: { 
    marginTop: 15, 
    borderRadius: 20, 
    borderWidth: 0, 
    backgroundColor: '#ffffff',
    paddingRight: 5,
    paddingLeft: 5 
  },
  itemTitle:{
    fontStyle: 'normal',
    lineHeight: 19,
    color: '#000000',
  },
  itemSubtitle:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
    marginVertical: 5
  },
  point:{
    fontStyle: 'normal',
    lineHeight: 22,
    color: '#000000',
    marginVertical: 15,
  },
  sign:{
    fontStyle: 'normal',
    lineHeight: 22,
    color: '#00B833',
    marginVertical: 15,
  },
  greater: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
    marginVertical: 15,
    marginLeft: 10
  },
  footer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    
  },
  button: {
    backgroundColor: '#334FFA',
    width: 160,
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cleanFilter: {
    width: 350,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  }
})

export default Home;