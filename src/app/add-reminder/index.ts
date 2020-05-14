import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddReminder from './component';
import { closeAddReminder, addReminder } from 'store/actions';

interface State {
    addReminderStatus: {
        isOpen: boolean
    }
}

const mapStateToProps = (state: State) => {
    return {
        isOpen: state.addReminderStatus.isOpen
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        closeAddReminder: bindActionCreators(closeAddReminder, dispatch),
        addReminder: bindActionCreators(addReminder, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
