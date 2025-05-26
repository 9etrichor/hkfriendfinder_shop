//ok
import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

//used in AboutProduct page. display the product description.
const PlanIntro = ({introText}) => {
  const texts = introText

  //looping text
  const listItem = texts.map(text => 
    <ListItem key={text}>
      <ListItemText primary={text} />
    </ListItem>
  )
  return (
    <div className="block">
    <List>
      {listItem}
    </List>
    </div>
  )
}

export default PlanIntro