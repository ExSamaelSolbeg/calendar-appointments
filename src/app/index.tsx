import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './component';

import { openAddReminder } from '../redux/actions';

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
