

const MENU_OPEN = 'MENU_OPEN';


let initialState = {
    menuIsOpen: false,
}

const menuReducer = (state = initialState, {type}) => {

    switch(type) {

        case MENU_OPEN:

            let copyStateMenu = {...state};
            if (copyStateMenu.menuIsOpen === false) {
                copyStateMenu.menuIsOpen = true;
            } else {
                copyStateMenu.menuIsOpen = false;
            }

        return copyStateMenu;

    default: return state;
    }
}

export default menuReducer;