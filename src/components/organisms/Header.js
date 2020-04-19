import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import SvgUri from 'expo-svg-uri';
import { useSelector} from 'react-redux';
// import { useFirestoreConnect } from "react-redux-firebase";

export default function Header({getFoodCategories}) {
    const businessName = useSelector(state => state.business.business[0].business_name);

    return (
        <ImageBackground source={require('../../assets/img_burger_joint.png')} style={styles.bgImage}>
            <TouchableOpacity style={styles.backButton}>
                <SvgUri source={require('../../assets/ic_chevron_left.svg')} width="15" height="15"/>
            </TouchableOpacity>
            <View style={styles.businessLogoContainer}>
                <Image source={require('../../assets/img_chef_hat.png')}/>
            </View>
            <Text style={styles.businessName}>{businessName}</Text>
            <View style={styles.timeContainer}>
                <Text style={{fontSize: 12, color: '#697482'}}>{"Open now • Closing soon"}</Text>
            </View>
            <View style={styles.ratingContainer}>
                <SvgUri source={require('../../assets/ic_star_blue.svg')} width="14" height="14"/>
                <SvgUri source={require('../../assets/ic_star_blue.svg')} width="14" height="14"/>
                <SvgUri source={require('../../assets/ic_star_blue.svg')} width="14" height="14"/>
                <SvgUri source={require('../../assets/ic_star_blue.svg')} width="14" height="14"/>
                <SvgUri source={require('../../assets/ic_star_grey.svg')} width="14" height="14"/>
                <Text style={{fontSize: 9, color: '#5D90E5'}}>301</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    },
    backButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'absolute',
        top: 50,
        left: 20
    },
    businessLogoContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#74A3A8',
        position: 'absolute',
        left: 20,
        bottom: 10
    },
    businessName: {
        color: 'white',
        position: 'absolute',
        top: 195,
        left: 75,
        fontSize: 16,
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 4
    },
    timeContainer: {
        backgroundColor: '#D3D0CE',
        width: 150,
        height: 20,
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        left: 75,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingContainer: {
        backgroundColor: '#D3D0CE',
        width: 100,
        height: 20,
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        left: 235,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});