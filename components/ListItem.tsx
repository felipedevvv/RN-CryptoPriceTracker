import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}: 
    {name: string, symbol: string, currentPrice: number, priceChangePercentage7d: number, logoUrl: string}) => {

    const priceChangeColor: string = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/* Left Side View */}
                <View style={styles.leftWrapper}>
                    <Image source={{uri: logoUrl}} style={styles.image} />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>
                {/* Right Side View */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                    <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    rightWrapper: {
        alignItems: 'flex-end',
    },
    image: {
        height: 48,
        width: 48,
    },
    titleWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1",
    },
})

export default ListItem;

