const questionReducer = (
    state = [
        {
            questionInput: "haha",
            answerInput: "bruh",
        },
    ],
    action
) => {
    switch (action.type) {
        case "ADD_QUEST":
        return [ ...state, action.value ]
        default:
            return state;
    }
};

export default questionReducer;
