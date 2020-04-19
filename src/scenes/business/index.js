import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {Header} from '../../components/organisms';
import {Menu} from "../../components/organisms";

export default function Business() {

    return (
        <View style={styles.container}>
            <Header />
            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    menuContainer: {
        flex: 2,
        backgroundColor: 'white'
    }
});