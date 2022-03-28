import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Typography,
    Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: () => ({
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,
    }),
    title: ({ textBoxWidth }) => ({
        display: 'flex',
        alignItems: "center",
        justifyContent: 'flex-start',
        width: textBoxWidth,
    }),
    titleText: () => ({
        fontSize: 35,
        fontWeight: 'bold',
    }),
    image: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    position: () => ({
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    })
}));


export default function MissionPage() {
    const styleConstants = {
        textBoxWidth: "100%",
    }
    const classes = useStyles(styleConstants);
    return (
        <div className={classes.root}>
            <div className={classes.position}>
                <Card className={classes.image}>
                    <Typography>
                        Image goes here
                    </Typography>
                </Card>
                <div className={classes.title}>
                    <Typography variant="h1" className={classes.titleText}>
                        <strong>
                            Our Mission
                        </strong>
                    </Typography>
                </div>
            </div>
        </div>
    )
}