export const selectFoodCategory = category => {
    return {
        type: 'SELECT_FOOD_CATEGORY',
        payload: {
            active: category
        }
    }
};