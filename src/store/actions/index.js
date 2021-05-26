import {
    ACTIONS_QUESTION_SEARCH,
    ACTIONS_ANSWER_SEARCH,
    ACTIONS_QUESTION_AUTHOR, ACTIONS_QUESTION_TAG
} from '../../constants/actions';

import AppConfig from '../../config/appconfig';
import axios from 'axios';

export function getQuestion(searchTerm) {
    return (dispatch) => {
        const SEARCH_URL = `${AppConfig.SEARCH_URL.base_url}${searchTerm}${AppConfig.SEARCH_URL.filter}`;
        axios.get(SEARCH_URL).then((response) => {
            dispatch({ type: ACTIONS_QUESTION_SEARCH, payload: response.data.items });
        });
    };
}

export function getQuestionAuthor(authorID) {
    return (dispatch) => {
        const SEARCH_URL = `https://api.stackexchange.com/2.2/users/${authorID}/questions?order=desc&sort=activity&site=stackoverflow&filter=!-*f(6rc.lFba`;
        axios.get(SEARCH_URL).then((response) => {
            dispatch({ type: ACTIONS_QUESTION_AUTHOR, payload: response.data.items });
        });
    };
}

export function getQuestionTag(tag) {
    return (dispatch) => {
        const SEARCH_URL = `https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow&filter=!-*f(6rc.lFba`;
        axios.get(SEARCH_URL).then((response) => {
            dispatch({ type: ACTIONS_QUESTION_TAG, payload: response.data.items });
        });
    };
}

export function getAnswers({questionID, title}) {
    return (dispatch) => {
        const SEARCH_URL = `https://api.stackexchange.com/2.2/questions/${questionID}/answers?order=desc&sort=activity&site=stackoverflow&filter=!-*f(6rc.lFba`;
        axios.get(SEARCH_URL).then((response) => {
            const items = response.data.items;
            dispatch({ type: ACTIONS_ANSWER_SEARCH, payload: {  items, title } });
        });
    };
}