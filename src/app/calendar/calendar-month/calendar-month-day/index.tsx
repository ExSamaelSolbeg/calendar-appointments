import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CalendarMonthDay from './component';
import { openAgenda } from '../../../../redux/actions';
import IReminder from '../../../../interfaces/reminder';

interface State {
    remindersStatus: {
        reminders: Array<IReminder>
    }
}

const mapStateToProps = (state: State) => {
    return {
        reminders: state.remindersStatus.reminders
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        openAgenda: bindActionCreators(openAgenda, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMonthDay);
