import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openAgenda } from 'store/actions';
import IReminder from 'interfaces/reminder';
import CalendarMonthDay from './component';

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
