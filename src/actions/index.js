import AppConstants from '../config/appconstants';
import AppConfig from '../config/appconfig';

import axios from 'axios';

export function search(searchTerm) {
    const SEARCH_URL = `${AppConfig.SEARCH_URL.base_url}${searchTerm}${AppConfig.SEARCH_URL.filter}`;
    const SEARCH = axios.get(SEARCH_URL);

    return {
        type: AppConstants.QUESTION_SEARCH,
        payload: SEARCH
    }
}

export function fetchAnswers(questionID) {
    const SEARCH_URL = `${AppConfig.ANSWER_URL.base_url}${questionID}${AppConfig.ANSWER_URL.filter}`;
    const SEARCH = axios.get(SEARCH_URL);
    return {
        type: AppConstants.ANSWER_SEARCH,
        payload: SEARCH
    }
}
