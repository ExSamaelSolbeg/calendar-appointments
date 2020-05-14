import { Theme, createStyles } from '@material-ui/core/styles';

export default (theme: Theme) => createStyles({
    monthContainer: {
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        border: '1px solid lightgray'
    }
});
