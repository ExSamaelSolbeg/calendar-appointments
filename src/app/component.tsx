import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as dateFns from 'date-fns';

import Calendar from './calendar';
import DayAgenda from './day-agenda';
import AddReminder from './add-reminder';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    openAddReminder: () => void
}

interface State {
    date: Date
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    handlePrevMonthClick = () => {
        this.setState({
            date: dateFns.subMonths(this.state.date, 1)
        });
    };

    handleNextMonthClick = () => {
        this.setState({
            date: dateFns.addMonths(this.state.date, 1)
        });
    };

    handleAddReminderClick = () => {
        const { openAddReminder } = this.props;

        openAddReminder();
    };

    render() {
        const { classes } = this.props;
        const { date } = this.state;

        const month = date.toLocaleString('en-us', { month: 'long' });
        const year = dateFns.getYear(date);

        return (
            <div className={classes.root}>
                <Paper className={classes.calendar}>
                    <header className={classes.calendarHeader}>
                        <IconButton aria-label='Last Month' onClick={this.handlePrevMonthClick}>
                            <KeyboardArrowLeftIcon fontSize='large' />
                        </IconButton>
                        <Typography variant='h3'>
                            {month} {year}
                        </Typography>
                        <IconButton aria-label='Next Month' onClick={this.handleNextMonthClick}>
                            <KeyboardArrowRightIcon fontSize='large' />
                        </IconButton>
                    </header>
                    <Calendar
                        date={date}
                    />
                    <Fab
                        aria-label='Add'
                        className={classes.fabAdd}
                        onClick={this.handleAddReminderClick}
                    >
                        <AddIcon />
                    </Fab>
                </Paper>
                <DayAgenda />
                <AddReminder />
            </div>
        );
    }
}

export default withStyles(styles)(App);
