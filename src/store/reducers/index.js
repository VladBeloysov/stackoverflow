import {
    ACTIONS_QUESTION_SEARCH,
    ACTIONS_ANSWER_SEARCH,
    ACTIONS_QUESTION_AUTHOR,
    ACTIONS_QUESTION_TAG
} from '../../constants/actions';

export default function (state = {}, { type, payload }) {
    switch (type) {
        case ACTIONS_QUESTION_SEARCH: {
            return {
                ...state,
                questionPromis: payload
            };
        }

        case ACTIONS_QUESTION_AUTHOR: {
            return {
                ...state,
                questionAuthorPromis: payload
            };
        }

        case ACTIONS_QUESTION_TAG: {
            return {
                ...state,
                questionTagPromis: payload
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