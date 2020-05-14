import React from 'react'
import { WithStyles, withStyles } from '@material-ui/core/styles'

import { getMonthCells } from 'utils/dateUtils';
import CalendarDaysHeader from './calendar-days-header';
import CalendarMonth from './calendar-month';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    date: Date
}

const Calendar = (props: Props) => {
    const { classes, date } = props;

    const calendarCells = getMonthCells(date);

    return (
        <div className={classes.calendarGrid}>
            <CalendarDaysHeader />
            <CalendarMonth
                date={date}
                calendarCells={calendarCells}
            />
        </div>
    );
};

export default withStyles(styles)(Calendar);
