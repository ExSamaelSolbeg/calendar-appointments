import { combineReducers } from 'redux';
import {
    OPEN_AGENDA,
    CLOSE_AGENDA,
    OPEN_ADD_REMINDER,
    CLOSE_ADD_REMINDER,
    ADD_REMINDER
} from './actions';

const initialAgendaState = {
    isOpen: false,
    date: null
};

const initialAddReminderState = {
    isOpen: false
};

const initialRemindersState = {
    reminders: []
};

function agendaStatus(state = initialAgendaState, action: any) {
    switch (action.type) {
        case OPEN_AGENDA:
            return {
                isOpen: true,
                date: action.dateObj.date
            };
        case CLOSE_AGENDA:
            return {
                isOpen: false,
                date: null
            };
        default:
            return state;
    }
}

function addReminderStatus(state = initialAddReminderState, action: any) {
    switch (action.type) {
        case OPEN_ADD_REMINDER:
            return {
                isOpen: true
            };
        case CLOSE_ADD_REMINDER:
            return {
                isOpen: false
            };
        default:
            return state;
    }
}

function remindersStatus(state = initialRemindersState, action: any) {
    switch (action.type) {
        case ADD_REMINDER:
            const reminders = [
                ...state.reminders,
                action.reminder
            ].sort((a, b) => {
                return a.time.getTime() - b.time.getTime();
            });

            return {
                reminders
            };
        default:
            return state;
    }
}

export default combineReducers({
    agendaStatus,
    addReminderStatus,
    remindersStatus
});
