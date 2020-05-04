import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { daysArr } from '../../../utils/dateUtils';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{}

const CalendarDaysHeader = (props: Props) => {
    const daysOutput = daysArr.map((day, index) =>
        <Typography key={index} variant='h6'>{day}</Typography>
    );

    return (
        <div className={props.classes.daysRow}>
            {daysOutput}
        </div>
    );
};

export default withStyles(styles)(CalendarDaysHeader);
