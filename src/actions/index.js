const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
};

const menuError = () => {
    return {
        type: 'ERR_CONNECTION_REFUSED'
    }
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
};

const deleteFormCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFormCart
}