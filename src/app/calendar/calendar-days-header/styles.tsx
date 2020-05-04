import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) => createStyles({
    daysRow: {
        display: 'flex',
        width: '100%',
        flexBasis: '50px',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});
