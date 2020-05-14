import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) => createStyles({
    remindersContainer: {
        minHeight: '240px',
        marginTop: '12px',
        marginBottom: '12px'
    },
    closeButton: {
        position: 'absolute',
        right: '12px',
        top: '12px'
    },
    toolbarButtonHidden: {
        visibility: 'hidden'
    },
    toolbarButtonVisible: {
        visibility: 'visible'
    },
    reminder: {
        whiteSpace: 'nowrap'
    }
});
