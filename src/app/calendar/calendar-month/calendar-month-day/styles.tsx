import deepPurple from '@material-ui/core/colors/deepPurple';
import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) => createStyles({
    dayCell: {
        position: 'relative',
        display: 'flex',
        flex: '1 0 13%',
        flexDirection: 'column',
        border: '1px solid lightgray',
        cursor: 'pointer'
    },
    dayCellOutsideMonth: {
        position: 'relative',
        display: 'flex',
        flex: '1 0 13%',
        flexDirection: 'column',
        border: '1px solid lightgray',
        backgroundColor: 'rgba( 211, 211, 211, 0.4 )',
        cursor: 'pointer'
    },
    dateNumber: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#000',
        backgroundColor: 'transparent'
    },
    todayAvatar: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#fff',
        backgroundColor: deepPurple[400],
    },
    focusedAvatar: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#000',
        backgroundColor: '#f1f1f1',
    },
    focusedTodayAvatar: {
        margin: 5,
        height: '28px',
        width: '28px',
        fontSize: '0.85rem',
        color: '#fff',
        backgroundColor: deepPurple[800],
    },
    remindersContainer: {
        position: 'absolute',
        top: '36px',
        left: '4px',
        right: '4px',
        bottom: '4px',
        overflow: 'auto'
    },
    reminder: {
        whiteSpace: 'nowrap'
    }
});
