import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useEffect} from "react";

export default function NestedList({arr}) {
    const [opens, setOpens] = React.useState(arr.map(()=>false))

    const handleClick = (index) => {
        const newOpens = opens.map(v=>v)
        newOpens[index] = !opens[index]
        setOpens(newOpens)
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Packages
                </ListSubheader>
            }
        >
            {arr.map((el, ind) =>
                <>
                    <ListItemButton onClick={() => handleClick(ind)}>
                        <ListItemText primary={el.name} />
                        {opens[ind] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    {el.versions.map(ver =>
                        <Collapse in={opens[ind]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary={ver} />
                                </ListItemButton>
                            </List>
                        </Collapse>)}
                </>
            )}

        </List>
    );
}