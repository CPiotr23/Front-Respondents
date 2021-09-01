export const pageMain = () => {
    return (dispatch) => {
        dispatch({
            type: "main"
        })
    };
};

export const pageRespondents = () => {
    return (dispatch) => {
        dispatch({
            type: "respondents"
        })
    };
};

export const pageAdd = () => {
    return (dispatch) => {
        dispatch({
            type: "add"
        })
    };
};

export const pageUpdate = () => {
    return (dispatch) => {
        dispatch({
            type: "update"
        })
    };
};