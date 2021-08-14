import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CoinItem from '../components/CoinItem';
import { COLORS } from '../constants';
import SearchBar from '../components/SearchBar';

const CoinsList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  const loadData = async () => {
    console.log('cargando')
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );

    const data = await res.json();
    //console.log(data);
    setCoins(data);
  }

  useEffect(() => {
    loadData();
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Markets</Text>
        <View style={styles.search}>
        <SearchBar onChangeText={text => setSearch(text) } />
        </View>
        
      </View>
      <View style={styles.divider}/>

      <View style={styles.listContainer}>
      <FlatList 
        data={coins}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <CoinItem coin={item}></CoinItem>
        }}
      />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: '#eeeeee',
    },
    headerContainer: {
      marginTop: 75,
      marginHorizontal: 16,
      flexDirection: 'row',
      
    },
    title:{
      fontFamily: "Roboto-Black", 
      fontSize: 30, 
      color: COLORS.primary,
      
    },
    listContainer: {
      alignItems: 'center'
    },
    divider: {
      marginVertical: 10,
      borderTopWidth: 0.5,
      marginHorizontal: 16
    },
    list: {
      width: '90%',
    },
    search: {
      marginLeft: 80,
      width: '47%',
      
    }
});

export default CoinsList;
