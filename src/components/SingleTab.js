import React from 'react'
import { Tab, Tabs, makeStyles, Typography} from '@material-ui/core';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root: {
      default: {
        height: "10vh",
      },
    },
  }));


function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
function typeOfQuestion(id) {
    switch(id) {
      case 1:
          return "Ethical"
      case 2:
          return "Critical Thinking"
      case 3:
          return "Problem Solving"
      case 4: 
          return "Acting"
      default:
          return "Healthcare/Current Issues"
    }
  }
  
function SingleTab(props) {
    const item = props.item
    const classes = useStyles()

    const label = () => {
        return (
        <div>
        <Typography>Question {item.index + 1}</Typography>
        <Typography variant="caption">{typeOfQuestion(item.id)}</Typography>
        </div>
        )
    }

    return (
        <div className={classes.root}>
            <Tab 
                label={label()}
                wrapped
                {...a11yProps(item.index)}
                className={classes.root}
            >
            </Tab>  
        </div>
    )
}

SingleTab.propTypes = {

}

export default SingleTab

// const tabs = questions.map(q => <Tab label={<div>
//     <Typography>Question {q.index + 1}</Typography>
//     <Typography variant="caption">{typeOfQuestion(q.id)}</Typography>
//     </div>} 
//     wrapped 
//     {...a11yProps(q.index)}
//     style = {{height: '10vh', backgroundColor: "white"}}
//     />)
