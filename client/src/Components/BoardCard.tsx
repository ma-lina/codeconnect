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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Avatar">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="This is the event title"
        // title={cardDetail.title}
        subheader={cardDetail.date}
        align='left'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align='left'>
          {cardDetail.description.slice(0, 90) + "..."}
          {/* {loremText.slice(0, 90) + "..."} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BookmarkIcon />
        </IconButton>
        <IconButton aria-label="share">
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
          <Typography variant='h6' align='left'>Event details</Typography>
          <Typography variant="body1" color="text.secondary" align='left'>
          {cardDetail.description}
          {/* {loremText} */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BoardCard; 