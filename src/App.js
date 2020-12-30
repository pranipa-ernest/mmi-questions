import React, {useState, useEffect} from 'react';
import { Tab, Tabs, makeStyles, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

import questionsData from './questionsData.js'
import TabCard from './components/TabCard.js'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    height: '10vh'
  }, 
  tabCard
  : {
    flex: 1,
  }
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

function App() {

  const [value, setValue] = useState(0)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  var count = 0
  const [questions, setQuestions] = useState(questionsData.map(q => ({...q, index: count++})))

  const classes = useStyles();  

  let tabs = questions.map(q => <Tab label={<div>
                                        <Typography>Question {q.index + 1}</Typography>
                                        <Typography variant="caption">{typeOfQuestion(q.id)}</Typography>
                                        </div>} 
                                        wrapped
                                        key = {q.id}
                                        {...a11yProps(q.index)}
                                        className={classes.tab}
                                        />)
  

  const tabCard
   = questions.map(q => (<TabCard value={value} index={q.index}>{q.text}</TabCard>))

  TabCard.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
      {tabs}
      </Tabs>
      <div className={classes.tabCard}>
        {tabCard}
      </div>
    </div>
  );
}

export default App;




