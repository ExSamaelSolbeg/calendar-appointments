import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { format as formatDate, isSameMonth, isSameDay, getDate } from 'date-fns';

import IReminder from 'interfaces/reminder';
import styles from './styles';

interface DateObj {
    date: Date
}

interface Props extends WithStyles<typeof styles>{
    calendarDate: Date,
    dateObj: DateObj,
    reminders: Array<IReminder>,
    openAgenda: (dateObj: DateObj) => void
}

const CalendarMonthDay = (props: Props) => {
    const { classes, dateObj, calendarDate, reminders, openAgenda } = props;
    const [ focused, setFocused ] = useState(false);

    const now = new Date();
    const dateOutput = getDate(dateObj.date);
    let dayClass;
    let avatarClass;

    if (isSameMonth(dateObj.date, calendarDate)) {
        dayClass = classes.dayCell;
    } else {
        dayClass = classes.dayCellOutsideMonth;
    }

    if (isSameDay(dateObj.date, now)) {
        if (focused) {
            avatarClass = classes.focusedTodayAvatar;
        } else {
            avatarClass = classes.todayAvatar;
        }
    } else {
        if (focused) {
            avatarClass = classes.focusedAvatar;
        } else {
            avatarClass = classes.dateNumber;
        }
    }

    const handleMouseOver = () => {
        setFocused(true);
    };

    const handleMouseOut = () => {
        setFocused(false);
    };

    const handleClick = () => {
        openAgenda(dateObj);
    };

    const remindersOutput = reminders.filter((reminder) => {
        return isSameDay(reminder.date, dateObj.date);
    }).map((reminder, index) => {
        const reminderTime = formatDate(reminder.time, 'hh:mm');

        return (
            <div key={index} style={{ color: reminder.color }} className={classes.reminder}>
                {reminderTime}: {reminder.text}
            </div>
        );
    });

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
            className={dayClass}
        >
            <Avatar className={avatarClass}>{dateOutput}</Avatar>
            <div className={classes.remindersContainer}>
                {remindersOutput}
            </div>
        </div>
    );
};

export default withStyles(styles)(CalendarMonthDay);
