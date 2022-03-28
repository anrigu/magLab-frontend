import React, { useEffect } from 'react';
import Map from './Map';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.primary.main,
    },
    titleText: {
        fontSize: 25,
        marginBottom: theme.spacing(4),
    },
    aboveMap: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'center',
    }
}));

export default function MapContainer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.aboveMap}>
                <Typography variant='h1' className={classes.titleText}>
                    <strong>
                        Nationwide Magnetometers
                    </strong>
                </Typography>
            </div>
            
            <Map/>
        </div>
    )
}