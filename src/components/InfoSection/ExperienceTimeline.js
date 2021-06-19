import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
    ExpIconLink,
    ExpIcons
} from './InfoElements';
import {
    FaReact,
    FaErlang,
    FaGitSquare,
    FaJenkins
} from 'react-icons/fa';
import {
    MdDialerSip
} from 'react-icons/md';
import {
    SiNginx
} from 'react-icons/si';

const useStyles = makeStyles({
    paper: {
        padding: '6px 16px',
        width: '350px',
        '@media (max-width: 780px)': {
            padding: '3px 8px',
            width: '200px'
        },
        '@media (max-width: 625px)': {
            padding: '3px 8px',
            width: '80px'
        }
    },
    opppaper: {
        margin: '15px',
        width: '350px',
        '@media (max-width: 780px)': {
            margin: '1px',
            // width: '100px'
        },
        '@media (max-width: 625px)': {
            width: '65px'
        }
    },
    secondaryTail: {
        backgroundColor: props => props.color//'#01bf71',
    },
    icon: {
        color: props => props.color//'#01bf71'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: '1.3rem',
        padding: '5px',
        textAlign: 'center',
        '@media (max-width: 780px)': {
            fontSize: '0.9rem'
        },
        '@media (max-width: 625px)': {
            fontSize: '0.6rem'
        }
    },
    description: {
        textAlign: 'left',
        padding: '4px',
        '@media (max-width: 780px)': {
            display: 'none'
        }
    },
    year: {
        '@media (max-width: 780px)': {
            fontSize: '0.9rem'
        },
        '@media (max-width: 480px)': {
            fontSize: '0.6rem'
        }
    }
});

export default function ExperienceTimeline(props) {
    const classes = useStyles(props);
    return (
        <Timeline align="alternate" >
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="inherit" className={classes.year}>
                        Jan 2018 to present {new Date().getFullYear()} Software Engineer
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" className={classes.icon}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.heading}>
                            Contact Center Services
                        </Typography>
                        <Typography className={classes.description}>CCS is a Cloud-based Call centre Service that is a product we are developing. Services include Queue call handling, VRQ, Conditional Routes, Extension call Recording
                            feature, Report generation, Scheduled reports, Live dashboard for Agents and Queues events etc.</Typography>
                        <ExpIcons themecolor={props.color}>
                            <ExpIconLink aria-label="Erlang"> <FaErlang />  </ExpIconLink>
                            <ExpIconLink aria-label="React"> <FaReact /> </ExpIconLink>
                            <ExpIconLink aria-label="FaGitSquare"> <FaGitSquare /> </ExpIconLink>
                            <ExpIconLink aria-label="FaJenkins"> <FaJenkins /> </ExpIconLink>
                            <ExpIconLink aria-label="MdDialerSip"> <MdDialerSip /> </ExpIconLink>
                            <ExpIconLink aria-label="SiNginx"> <SiNginx /> </ExpIconLink>
                        </ExpIcons>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className={classes.opppaper}>
                    <Typography variant="body2" color="inherit" className={classes.year}>
                        Jan 2018 to April 2018 Software Engineer
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" className={classes.icon}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.heading}>
                            Mayship
                        </Typography>
                        <Typography className={classes.description}>Mayship is a project management system that helps to track the progress of current projects, and the status of each employees working on a particular project in
                            a repair contract corporation. It helps to track whether the project is on time or not. This project also includes supervisor approval, complete project time
                            structure, scheduled report delivery etc. Reports are also generated for each project. Mayship has web and ios interface.</Typography>
                        <ExpIcons themecolor={props.color}>
                            <ExpIconLink aria-label="Erlang"> <FaErlang />  </ExpIconLink>
                            <ExpIconLink aria-label="FaGitSquare"> <FaGitSquare /> </ExpIconLink>
                            <ExpIconLink aria-label="SiNginx"> <SiNginx /> </ExpIconLink>
                        </ExpIcons>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className={classes.opppaper}>
                    <Typography variant="body2" color="inherit" className={classes.year}>
                        April 2017 to Dec 2017 Associate Software Engineer
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" className={classes.icon}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.heading}>
                            Voifinity
                        </Typography>
                        <Typography className={classes.description}>Voifinity is a cloud-based business phone and contact centre solution for workforce collaboration, customer service and extending business operations across
                            multiple locations.</Typography>
                        <ExpIcons themecolor={props.color}>
                            <ExpIconLink aria-label="Erlang"> <FaErlang />  </ExpIconLink>
                            <ExpIconLink aria-label="FaGitSquare"> <FaGitSquare /> </ExpIconLink>
                            <ExpIconLink aria-label="MdDialerSip"> <MdDialerSip /> </ExpIconLink>
                            <ExpIconLink aria-label="SiNginx"> <SiNginx /> </ExpIconLink>
                        </ExpIcons>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    );
}
