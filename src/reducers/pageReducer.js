const reducer = (state = 'main', action) => {
    switch(action.type){
        case 'main':
            return state='main';
        case 'respondents':
            return state='respondents';
        case 'update':
            return state='update';
        case  'add':
            return state='add';
        default:
            return state;
    }
};

export default reducer;