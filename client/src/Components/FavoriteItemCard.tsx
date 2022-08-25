import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

function FavoriteItemCard() {
  return (
    <Card sx={{ width: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="Avatar of the event creator">
            </Avatar>
          }
          title="Favourite Item"
          subheader="subtitle"
          align='left'
        />
        <Divider sx={{mb:2}} variant="middle" />
        <CardContent>
        <Stack flexGrow={1}  sx={{pb:2}}  direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Typography paragraph variant="body2" color="text.secondary" align='left'>
            This is random text on a card written by a very tired person. 
          </Typography>
        </Stack>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <BookmarkIcon />
          </IconButton>
          <IconButton aria-label="request appointment">
            <InsertInvitationIcon />
          </IconButton>
        </CardActions>
    </Card>
  )
}

export default FavoriteItemCard