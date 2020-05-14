import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openAddReminder } from 'store/actions';
import App from './component';

interface State {
}

const mapStateToProps = (state: State) => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        openAddReminder: bindActionCreators(openAddReminder, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
