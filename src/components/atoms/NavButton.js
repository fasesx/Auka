import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {selectFoodCategory} from "../../actions/businessActions";

export default function NavButton({selected, children, onSelect, id, name}) {
    const dispatch = useDispatch();
    const selectedFoodCategory = useSelector(state => state.business.selectedFoodCategory);

    return (
        <TouchableOpacity style={[styles.navButton, selectedFoodCategory === id && styles.selected]} onPress={() => dispatch(selectFoodCategory(id))}>
            <Text style={[selectedFoodCategory === id && styles.highlight]}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: 'white',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        borderBottomWidth: 2,
        borderBottomColor: '#4382EB'
    },
    highlight: {
        color: '#4382EB'
    }
});