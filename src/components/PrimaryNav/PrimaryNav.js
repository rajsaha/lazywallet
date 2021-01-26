import React, { useState } from 'react';
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, History, AttachMoney, Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function PrimaryNav() {
    const state = {
        value: 0,
        pathMap: [
            '/',
            '/regulars',
            '/history',
            '/',
        ]
    };
    const useStyles = makeStyles({
        root: {
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            'z-index': 1000,
            "& .MuiBottomNavigationAction-root": {
                "@media (max-width: 768px)": {
                    minWidth: "auto",
                    padding: "6px 0"
                }
            }
        },
    });
    const classes = useStyles();
    const [btmNavState, setState] = useState(0);
    const handleChange = (event, value) => {
        setState(value);
    };


    return (
        <>
            <BottomNavigation
                value={btmNavState}
                onChange={handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" icon={<Home />} component={Link} to={state.pathMap[0]} />
                <BottomNavigationAction label="Regulars" icon={<AttachMoney />} component={Link} to={state.pathMap[1]} />
                <BottomNavigationAction label="History" icon={<History />} component={Link} to={state.pathMap[2]} />
                <BottomNavigationAction label="Account" icon={<Person />} />
            </BottomNavigation>
        </>
    );
}

export default withRouter(PrimaryNav);