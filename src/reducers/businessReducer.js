const initialState = {
    selectedFoodCategory: "dummy1",
    foodCategories: [
        {
            id: "dummy1",
            name: 'Burgers'
        },
        {
            id: "dummy2",
            name: 'Sandwiches'
        },
        {
            id: "dummy3",
            name: 'Fries'
        },
        {
            id: "dummy4",
            name: 'Steak'
        },
        {
            id: "dummy5",
            name: 'Soft drinks'
        }
    ],
    business: [
        {
            id: "dummy1",
            business_name: "Pre-order Business Name",
            closing_time: "17:30",
            opening_time: "08:30"
        }
    ],
    products: [
        {
            business: "dummy1",
            category: "dummy1",
            name: "Burger 1"
        }
    ]
};

const businessReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_FOOD_CATEGORY':
            state.selectedFoodCategory = action.payload.active;
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default businessReducer;