const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

let massCart = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'ERR_CONNECTION_REFUSED':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);

            massCart.push(item);

            let quantityItems = [];
            massCart.forEach(elem => {
                if (elem.title === item.title) {
                    quantityItems.push(item.title);
                }
            })

            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: Math.floor(Math.random() * 1000000),
                qty: quantityItems.length
            };

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: state.total + newItem.price
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);

            massCart.splice(itemIndex, 1);

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - state.items[itemIndex].price
            }
        default:
            return state;
    }
}

export default reducer;