import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import CalendarMonthDay from './calendar-month-day';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    calendarCells: {
        date: Date
    }[],
    date: Date,
}

const CalendarMonth = (props: Props) => {
    const daysOutput = props.calendarCells.map((dateObj, index) =>
        <CalendarMonthDay key={index} calendarDate={props.date} dateObj={dateObj} />
    );

    return (
        <div className={props.classes.monthContainer}>
            {daysOutput}
        </div>
    );
};

export default withStyles(styles)(CalendarMonth);
