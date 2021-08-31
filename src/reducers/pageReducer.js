const reducer = (state = 'main', action) => {
    switch(action.type){
        case 'main':
            return state='main';
        case 'respondents':
            return state='respondents';
        default:
            return state='main';
    }
};

export default reducer;