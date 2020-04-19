import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { NavButton } from "../atoms";
import {connect, useDispatch, useSelector} from 'react-redux';



export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('Burgers');
    const selectCategory = category => {
        setActiveCategory(category);
    };
    const categories = useSelector(state => state.business.foodCategories);
    return (
        <View style={styles.menuContainer}>
            <View style={{height: 50, borderBottomWidth: 2, borderBottomColor: 'rgba(128, 128, 128, 0.4)'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        categories && categories.map(category => {
                            const {name, id} = category;
                            return (
                                <NavButton key={id} selected={name === activeCategory} id={id} name={name} onSelect={selectCategory}>
                                    <Text>{name}</Text>
                                </NavButton>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 2,
        backgroundColor: 'white'
    },
    navButton: {
        backgroundColor: 'white',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        borderBottomWidth: 2,
        borderBottomColor: '#4382EB'
    }
});