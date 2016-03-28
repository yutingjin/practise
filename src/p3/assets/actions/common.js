import actionTypes from './action_types';

export function menu(isOpen) {
    return {
        type: actionTypes.MENU,
        menu: isOpen
    }
}
