import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DayAgenda from './component';
import { closeAgenda } from '../../redux/actions';
import IReminder from '../../interfaces/reminder';

interface State {
    agendaStatus: {
        isOpen: boolean,
        date: Date
    },
    remindersStatus: {
        reminders: Array<IReminder>
    }
}

const mapStateToProps = (state: State) => {
    return {
        agendaStatus: state.agendaStatus,
        reminders: state.remindersStatus.reminders
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        closeAgenda: bindActionCreators(closeAgenda, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayAgenda);
