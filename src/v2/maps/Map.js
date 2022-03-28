/* global google */
import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import "./styles.css";
import Marker from './Marker';
import {
  Card,
  CardContent,
  Typography,
  Slide,
  IconButton,
  Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';

const points = [
  { id: 1, title: "The Diag", lat: 42.2770, lng: -83.7382, weight: 10, radius: 200 },
  { id: 2, title: "Angell Hall", lat: 42.2766, lng: -83.7397, weight: 10, radius: 1 },
  { id: 3, title: "LSA Building", lat: 42.2763, lng: -83.7412, weight: 15, radius: 1 }
];

const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)"
];

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "2em",
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10,
    // top: "35%", 
    // left: "5%",
    height: "50%",
    width:"25%",
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  headerText: {
    fontSize: 15,
    color: "light gray",
  },
  titleText: {
    fontSize: 25,
  },
  closeButton: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    display: 'flex',
    justifyContent: "flex-start",
  }
}));


export default function Map() {
  let mapGlobal, heatmap;
  const [heatmapOn, setHeatmapOn] = useState(true);
  const [checked, setChecked] = useState(false);
  const [currMarkerId, setCurrMarkerId] = useState();
  //plotPoints - {lat, long, weight}

  const setOpenMarker = (markerId) => {
    if (markerId == currMarkerId && checked) {
      setChecked(false);
    }
    else {
      setChecked(true);
      setCurrMarkerId(markerId);
    }
  }

  const MarkerCard = () => {
    const classes = useStyles();
    return (
      <Slide direction="right" in={checked} container={mapGlobal} mountOnEnter unmountOnExit>
        <Card className={classes.root}>
          <div className={classes.closeButton}>
            <IconButton onClick={() => setChecked(false)} size="small"><CloseIcon /></IconButton>
          </div>
          <CardContent className={classes.title}>
            <Typography variant='subtitle1' className={classes.headerText}>
              Station Info.
            </Typography>
            <Typography variant='h1' className={classes.titleText} align="left">
              Name
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {currMarkerId}
            </Typography>
          </CardContent>
        </Card>
      </Slide>
    )
  }

  return (
    <div className="App">
      {/* <Button variant="outlined" onClick={() => {
        setHeatmapOn(!heatmapOn);
        heatmap.set(mapGlobal);
      }}
      >
        Toggle Heatmap
      </Button> */}
      <MarkerCard />
      <GoogleMapReact
        gradient={gradient}
        ref={(el) => mapGlobal = el}
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyCkKS6hb822mqUBntgJXInsCiw492xQRyM",
          language: "en",
          region: "US",
          libraries: 'visualization',
        }}
        defaultCenter={{ lat: 42.2808, lng: -83.732124 }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          heatmap = new maps.visualization.HeatmapLayer({
            data: points.map(point => (
              {
                location: new maps.LatLng(point['lat'], point['lng']),
                weight: point['weight'],

              }))
          });
          heatmap.set("gradient", gradient);
          mapGlobal = map;
          heatmap.setMap(map);
        }}
        options={map => ({
          streetViewControl: true,
          draggable: true, // make map draggable
          zoomControlOptions: { position: 9 },
          keyboardShortcuts: true, // keyboard shortcuts
          scaleControl: true, // allow scale controle
          scrollwheel: true, // allow scroll wheel
          mapTypeId: map.MapTypeId.ROADMAP, //default map style
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: map.MapTypeControlStyle.HORIZONTAL_BAR, //style of map control
            position: map.ControlPosition.TOP_LEFT, //location of map type controls
            mapTypeIds: [
              map.MapTypeId.ROADMAP,
              map.MapTypeId.TERRAIN, //roadmap w/ terrain illustrations
              map.MapTypeId.SATELLITE, //pure satellite
              map.MapTypeId.HYBRID //satellite w/ roads
            ]
          },
        })}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <Marker key={id} lat={lat} lng={lng} markerId={id} tooltip={title} openInfo={setOpenMarker} />
          );
        })}
      </GoogleMapReact>
    </div >
  )
}