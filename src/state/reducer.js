export function reducer(state, action) {
    switch (action.type) {
        case "OPEN_SIDEBAR":
            return {
                ...state,
                sidebar: true
            }
        case "CLOSE_SIDEBAR":
            return {
                ...state,
                sidebar: false
            }
        case "ADD_CHAMPION":
            if (state.collectionChamps.indexOf(action.obj) === -1) {
                return {
                    ...state,
                    ...state.collectionChamps.push(action.obj)
                }
            }
        case "REMOVE_CHAMPION":
            return {
                ...state,
                collectionChamps: state.collectionChamps.filter((val, i) => i !== action.i )
            }
        default:
            return state;
    };
}