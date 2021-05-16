import AppConstants from '../config/appconstants';

export default function (state = [], action) {
    state=[];
    switch (action.type) {
        case AppConstants.ANSWER_SEARCH:
            return [action.payload, ...state];

    }
    return state;
}