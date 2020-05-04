import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker from 'material-ui-pickers/DatePicker';
import TimePicker from 'material-ui-pickers/TimePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

import IReminder from '../../interfaces/reminder';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    isOpen: boolean,
    closeAddReminder: () => void,
    addReminder: (reminder: any) => void
}

const AddReminder = (props: Props) => {
    const { classes, isOpen, closeAddReminder, addReminder } = props;

    const now = new Date();
    const [reminder, setReminder] = useState<IReminder>({
        color: '#228b22',
        text: '',
        date: now,
        time: now
    });

    const handleClose = () => {
        closeAddReminder();
    };

    const handleDateChange = (date) => {
        setReminder({
            ...reminder,
            date
        });
    };

    const handleTimeChange = (time) => {
        setReminder({
            ...reminder,
            time
        });
    };

    const handleColorChange = (event) => {
        const color = event.target.value;

        setReminder({
            ...reminder,
            color
        });
    };

    const handleTextChange = (event) => {
        const text = event.target.value;

        setReminder({
            ...reminder,
            text
        });
    };

    const handleReminderSave = () => {
        if (!reminder.text) {
            return;
        }

        addReminder(reminder);

        setReminder({
            ...reminder,
            text: ''
        });

        closeAddReminder();
    };

    const isReminderError = !reminder.text;

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle id='form-dialog-title'>
                Add Reminder
                <IconButton aria-label='Close' className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider light />
            <DialogContent className={classes.addReminderFormContainer}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className={classes.row}>
                        <InputLabel className={classes.label}>Date:</InputLabel>
                        <DatePicker value={reminder.date} onChange={handleDateChange} />
                    </div>
                    <div className={classes.row}>
                        <InputLabel className={classes.label}>Time:</InputLabel>
                        <TimePicker value={reminder.time} onChange={handleTimeChange} />
                    </div>
                    <div className={classes.row}>
                        <InputLabel className={classes.label}>Color:</InputLabel>
                        <Input
                            type='color'
                            value={reminder.color}
                            fullWidth={true}
                            onChange={handleColorChange}
                        />
                    </div>
                    <div className={classes.textRow}>
                        <TextField
                            required={true}
                            error={isReminderError}
                            fullWidth={true}
                            inputProps={{ maxLength: 30 }}
                            placeholder="Please input a reminder text"
                            autoFocus={true}
                            onChange={handleTextChange}
                        />
                    </div>
                </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick={handleReminderSave}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default withStyles(styles)(AddReminder);
