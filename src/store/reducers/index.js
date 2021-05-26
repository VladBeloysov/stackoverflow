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
                questionAuthorList: payload,
                questionTagList: null,
                answerList: null
            };
        }

        case ACTIONS_QUESTION_TAG: {
            return {
                ...state,
                questionTagList: payload,
                questionAuthorList: null,
                answerList: null
            };
        }

        case ACTIONS_ANSWER_SEARCH: {
            return {
                ...state,
                answerList: payload.items,
                questionTitle: payload.title
            };
        }

        default:
            return state;
    }
}