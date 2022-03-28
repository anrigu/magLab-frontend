import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import {
} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import NavBar from '../topBar/NavBar';
import MainPages from './MainPages';

const useStyles = makeStyles((theme) => ({
    root: () => ({
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
    }),
    topBar: () => ({
        position: 'sticky',
        top: "0px",
        width: "100%",
        backgroundColor: theme.palette.primary.light,
    }),
    mainPages: () => ({
        backgroundColor: theme.palette.primary.main,
        height: '100%',
    }),
}));

export default function LandingPage() {
    const classes = useStyles();
    return (
        //Big container
        <div className={classes.root}>
            {/* Multi-screen landing pages */}
            <div className = {classes.mainPages}>
                <MainPages />
            </div>
        </div>
    )
}