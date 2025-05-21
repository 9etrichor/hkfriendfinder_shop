import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const PlanIntro = ({introText}) => {
  const texts = introText

  const listItem = texts.map(text => 
    <ListItem>
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