import {
    ACTIONS_QUESTION_SEARCH,
    ACTIONS_ANSWER_SEARCH,
    ACTIONS_QUESTION_AUTHOR,
    ACTIONS_QUESTION_TAG
} from '../../constants/actions';



export default function (state = {}, { type, payload }) {
    switch (type) {
        case ACTIONS_QUESTION_SEARCH: {
            console.log(payload);
            return {
                ...state,
                questionList: payload
            };
        }

        case ACTIONS_QUESTION_AUTHOR: {
            return {
                ...state,
                questionAuthorList: payload
            };
        }

        case ACTIONS_QUESTION_TAG: {
            return {
                ...state,
                questionTagList: payload
            };
        }

        case ACTIONS_ANSWER_SEARCH: {
            return {
                ...state,
                answer: payload
            };
        }

        default:
            return state;
    }
}