import green from '@material-ui/core/colors/green';
import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    calendar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        margin: '25px',
        width: '100%',
        height: '90%'
    },
    calendarHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100px',
        width: '100%'
    },
    fabAdd: {
        position: 'absolute',
        bottom: '60px',
        right: '50px',
        color: '#FFF',
        backgroundColor: green[600],
        '&:hover': {
            backgroundColor: green[800]
        }
    }
});
