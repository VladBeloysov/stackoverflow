import {
    ACTIONS_QUESTION_SEARCH,
    ACTIONS_ANSWER_SEARCH,
    ACTIONS_SET_REW
} from '../../constants/actions';

export default function (state = {}, { type, payload }) {
    switch (type) {
        case ACTIONS_QUESTION_SEARCH: {
            return {
                ...state,
                questionPromis: payload
            };
        }

        case ACTIONS_ANSWER_SEARCH: {
            return {
                ...state,
                answer: payload
            };
        }

        case ACTIONS_SET_REW: {
            return {
                ...state,
                rew: payload
            };
        }

        default:
            return state;
    }
}