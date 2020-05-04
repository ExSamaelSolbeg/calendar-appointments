import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { format as formatDate, isSameDay } from 'date-fns';

import IReminder from '../../interfaces/reminder';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    agendaStatus: {
        isOpen: boolean,
        date: Date
    },
    reminders: Array<IReminder>,
    closeAgenda: () => void
}

const DayAgenda = (props: Props) => {
    const { classes, agendaStatus, closeAgenda, reminders } = props;

    const dateTitle = agendaStatus.date ? formatDate(agendaStatus.date, 'LLLL do, yyyy') : 'Closing';

    const handleClose = () => {
        closeAgenda();
    };

    let remindersOutput;
    const dayReminders = reminders.filter((reminder) => {
        return isSameDay(reminder.date, agendaStatus.date);
    });

    if (dayReminders.length) {
        remindersOutput = dayReminders.map((reminder, index) => {
            const reminderTime = formatDate(reminder.time, 'hh:mm');

            return (
                <div key={index} style={{ color: reminder.color }} className={classes.reminder}>
                    {reminderTime}: {reminder.text}
                </div>
            );
        });
    } else {
        remindersOutput = 'No reminders';
    }

    return (
        <Dialog
            open={agendaStatus.isOpen}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle id='form-dialog-title'>
                {dateTitle}
                <IconButton aria-label='Close' className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider light />
            <DialogContent className={classes.remindersContainer}>
                {remindersOutput}
            </DialogContent>
        </Dialog>
    );
};

export default withStyles(styles)(DayAgenda);
