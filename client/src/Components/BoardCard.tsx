import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chip, Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';

const loremText = "This is a random event description text. It's the event of the year, you must join, otherwise severe FOMO. Still missing 100 signs, so I will continue writing. 40 signs left, not to bad, just a bit more."

interface CardDetailProps {
  cardDetail: Query
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BoardCard:React.FC<CardDetailProps> = ({cardDetail}) => {
  console.log(typeof cardDetail.date)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="Avatar of the event creator"
          src={cardDetail.creator.image}

          >
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="This is the pin title"
        // title={cardDetail.title}
        subheader={new Date(cardDetail.date).toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        align='left'
      />
      {/* <Divider sx={{m:1}} variant="middle" /> */}
      <CardContent>
      <Stack flexGrow={1}  sx={{pb:2}}  direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
            <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center" }} flexGrow={1}>
              <Chip label={cardDetail.location} />
            </Box>
            {cardDetail.offer? 
            <Chip color="secondary" label="Mentor" /> :
            <Chip color="warning" label="Mentee" />}
            <Chip color="primary" label={cardDetail.level} />
        </Stack>
        <Typography paragraph variant="body2" color="text.secondary" align='left'>
          {cardDetail.description.slice(0, 90) + "..."}
        </Typography>
          {/* <Stack sx={{pb:2}}  direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
          {cardDetail.field.map( (item, index) => (<Chip key={index} size="small" label={item}/>)
          )}
          </Stack> */}
          <Typography paragraph variant="body2" color="text.secondary" align='right'>
          {cardDetail.field.reduce((first, next) => first + " | " + next)}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BookmarkIcon />
        </IconButton>
        <IconButton aria-label="request appointment">
          <InsertInvitationIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider sx={{mb:2}} variant="middle" />
          <Typography paragraph variant='body2' color="text.secondary" align='left'>{`Created by ${cardDetail.creator.firstName} ${cardDetail.creator.lastName}`}</Typography>
          <Stack sx={{pb:2}}  direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          {cardDetail.techKnowHow.map( (techItem, index) => (<Chip key={index} color="secondary" size="small" label={techItem}/>)
          )}
          </Stack>
          <Typography gutterBottom variant='body1' align='left'>Details</Typography>
          <Typography paragraph variant="body2" color="text.secondary" align='left'>
          {cardDetail.description}
          </Typography>
          <Typography gutterBottom variant='body2' align='left'>Availability</Typography>
          <Typography paragraph variant="body2" color="text.secondary" align='left'>
          {cardDetail.availability.reduce((first, next) => first + " | " + next)}
          </Typography>
          <Typography gutterBottom variant='body2' align='left'>Timing</Typography>
          <Typography paragraph variant="body2" color="text.secondary" align='left'>
          {cardDetail.timeslots.reduce((first, next) => first + " | " + next)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BoardCard; 