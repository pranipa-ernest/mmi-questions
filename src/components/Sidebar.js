import React from 'react';
import "typeface-roboto";

import { ListItem, Divider, makeStyles, ListItemText } from '@material-ui/core';


const useStyles = makeStyles({
    listItem: {
        height: '10vmin', 
        alignItems: 'flex-start',
    }
});

  
  
function QuestionNumber(props) { 

    const classes = useStyles();

    let type = props.item.id
    
    switch(type) {
        case 1:
            type = "Ethical"
            break
        case 2:
            type = "Critical Thinking"
            break
        case 3:
            type = "Problem Solving"
            break
        case 4: 
            type = "Acting"
            break
        default:
            type = "Healthcare/Current Issues"
    }

    return (
        <div>
        <div>
            <ListItem button className={classes.listItem}>
                <ListItemText className={classes.boxTitle}
                primary= {"Question " + props.count} 
                secondary={type}/>
            </ListItem>
            <Divider/>
            </div>
        </div>
    );
}

export default QuestionNumber;
