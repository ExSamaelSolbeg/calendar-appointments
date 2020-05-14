import { Theme, createStyles } from '@material-ui/core/styles'

export default (theme: Theme) => createStyles({
    calendarGrid: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});
