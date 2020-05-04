import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) => createStyles({
    addReminderFormContainer: {
        minHeight: '250px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    },
    label: {
        minWidth: '60px'
    },
    row: {
        maxWidth: '200px',
        marginTop: '12px',
        display: 'flex',
        alignItems: 'center'
    },
    textRow: {
        marginTop: '36px',
    }
});
