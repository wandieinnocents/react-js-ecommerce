// here we shall be defining all application level code
// and to define states and actions to make changes to the state


export const initialState = {
    basket: [],
};

// selector
//state has current state of data
//action to make the changes to the state
const reducer = (state, action) => {

    // add methods u want to use to perform state management
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        }

    
}


export default reducer;