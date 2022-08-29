import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chip, Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";

interface CardDetailProps {
  cardDetail: QueryC;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BoardCardC: React.FC<CardDetailProps> = ({ cardDetail }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Avatar of the event creator"
            src={cardDetail.creator.image}
          ></Avatar>
        }
        title={cardDetail.title}
        subheader={new Date(cardDetail.date).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        align="left"
      />
      <CardContent>
        <Stack
          flexGrow={1}
          sx={{ pb: 2 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            flexGrow={1}
          >
            <Chip label={cardDetail.location} />
          </Box>
          <Chip color="primary" label={`${cardDetail.time}:00`} />
        </Stack>
        <Typography
          paragraph
          variant="body2"
          color="text.secondary"
          align="left"
        >
          {cardDetail.description.slice(0, 90) + "..."}
        </Typography>
        <Typography
          paragraph
          variant="body2"
          color="text.secondary"
          align="right"
        >
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
          <Divider sx={{ mb: 2 }} variant="middle" />
          <Typography
            paragraph
            variant="body2"
            color="text.secondary"
            align="left"
          >{`Created by ${cardDetail.creator.firstName} ${cardDetail.creator.lastName}`}</Typography>
          <Typography gutterBottom variant="body1" align="left">
            Details
          </Typography>
          <Typography
            paragraph
            variant="body2"
            color="text.secondary"
            align="left"
          >
            {cardDetail.description}
          </Typography>
          <Typography gutterBottom variant="body2" align="left">
            Frequency
          </Typography>
          <Typography
            paragraph
            variant="body2"
            color="text.secondary"
            align="left"
          >
            {cardDetail.frequency.reduce((first, next) => first + " | " + next)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BoardCardC;
