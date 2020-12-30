import React from 'react';
import {Card, CardContent} from '@material-ui/core';


function QuestionCard(props) {

  return (
    <div>
        <Card>
            <CardContent>
            {props.item.text}
            </CardContent>
        </Card>
      
    </div>
  );
}

export default QuestionCard;
