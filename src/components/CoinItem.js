import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import { alignItems } from 'styled-system';

const CoinItem = ({coin}) => {
    const [iconName, seticonName] = useState('');
    const [iconColor, seticonColor] = useState();

    const loadChangeIcon = () => {
        if(coin.price_change_percentage_24h >= 0 ) {
            seticonName("up")
            seticonColor(COLORS.green);
        } else if (coin.price_change_percentage_24h < 0) {
            seticonName("down")
            seticonColor(COLORS.red);
        }
    }

    useEffect(() => {
        loadChangeIcon()
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.coinContainer}>
                <Image style={styles.image} source={{ uri: coin.image }} />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            
            <View style={styles.priceContainer}>
                <Text style={styles.text}>${coin.current_price}</Text>
                <View style={styles.priceChangeContainer}>
                    <AntDesign name={iconName} size={15} color={iconColor} />
                    <Text style={[styles.priceChangeText, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown ]}> {coin.price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 30,
        height: 30
    },
    coinContainer: {
        flexDirection: 'row',
    },
    containerNames: {
        marginLeft: 10 
    },
    text: {
        color: COLORS.black,
    },
    textSymbol: {
        color: '#a1a1a1',
        textTransform: 'uppercase'
    },
    priceContainer: {
        alignItems: 'flex-end'
    },
    priceChangeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'red'
    },
    priceChangeText: {
        color: COLORS.black
    },
    priceUp: {
        color: COLORS.green
    },
    priceDown: {
        color: COLORS.red
    }

})

export default CoinItem
