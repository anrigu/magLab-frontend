import React from "react";
import LandingPage from "./v2/dashboard/LandingPage";
import { ThemeProvider } from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createTheme';
import { Route, Switch } from "react-router-dom";
import store, { history } from "./v2/redux";
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import MainLayout from "./v2/util/MainLayout";
import MapContainer from "./v2/maps/MapContainer";
import CalendarContainer from "./v2/calendar/CalendarContainer";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#F1F2F6',
            light: '#ffffff',
        },
        secondary: {
            main: '#27197E',
        },
    },
    //4 * spacing parameter --> pixels
    spacing: 4,
    typography: {
        fontFamily: 'Noto Sans'
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/home">
                            <MainLayout Component={<LandingPage />} />
                        </Route>
                        <Route exact path="/maps">
                            <MainLayout Component={<MapContainer />} />
                        </Route>
                        <Route exact path="/calendar">
                            <MainLayout Component={<CalendarContainer />} />
                        </Route>
                        <Route path="/">
                            <MainLayout Component={<LandingPage />} />
                        </Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </ThemeProvider>
    )
}

export default App;