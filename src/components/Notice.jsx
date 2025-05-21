import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const Notice = ({noticeText}) => {
  const texts = noticeText

  const items = texts.map(text => 
    <ListItem disablePadding>
      <ListItemIcon>
        <PriorityHighIcon />
        <ListItemText secondary={text} />
      </ListItemIcon>
    </ListItem>
  )

  return (
    <div>
      <h3 className='text-center'>--注意事項--</h3>
      <List>
        {items}
      </List>
    </div>
  )
}

export default Notice