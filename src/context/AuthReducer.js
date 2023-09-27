const authReducer = (state, action) => {

    switch (action.type) {
        case 'USER_REGISTER':
            return {
                ...state,
                message: action.payload.message,
                token: action.payload.token
            };
        case 'USER_ERROR':
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }

};

export default authReducer
