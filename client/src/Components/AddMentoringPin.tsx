import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AD } from "../GraphQL/Mutations";
import {
  Box,
  Modal,
  Button,
  Typography,
  Grid,
  TextField,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../Context/AuthContext";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  TechKnowHow,
  Availability,
  TimeSlots,
  Field,
  Level,
} from "../Utils/enums";

const AddMentoringPin: any = ({ open, close }: any) => {
  const theme = useTheme();
  //let input: any;
  const [addMentoring, { data, loading, error }] = useMutation(ADD_AD);
  const [pin, setPin] = useState<any>({
    creator: null,
    title: "",
    field: [],
    location: "",
    description: "",
    date: "",
    techKnowHow: [],
    level: "",
    availability: [],
    timeslots: [],
    offer: null,
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(key: string, state: any, theme: any) {
    return {
      fontWeight:
        state.indexOf(key) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  /*   const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPin({ ...pin, [e.target.name]: e.target.value });

  const handleCLick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sign);
    if (
      !sign.firstName ||
      !sign.lastName ||
      !sign.email ||
      !sign.username ||
      !sign.password 
    ) {
      alert("Enter your details!");
    } else {
      addMentoring({
        variables: {
          addMentoring: {
          /*   firstName: sign.firstName,
            lastName: sign.lastName,
            password: sign.password,
            birthday: sign.birthday,
            email: sign.email,
            username: sign.username,
          },
        },
      });
      if (error) {
        console.log(error);
      } else {
        console.log("pin up");
      }
    }*/

  return (
    <div>
      <Modal open={open} onClose={close}>
        <Box className="modal-style modal-style-paper" sx={{ p: 2 }}>
          <Box
            sx={{
              dispay: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="form">
              <Typography
                variant={"h4"}
                textAlign={"center"}
                component={"div"}
                color="primary"
                align="left"
                sx={{ pt: 2, pb: 1 }}
              >
                <Box className="fira-code">Add a new pin on the board</Box>
              </Typography>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Title:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="firstName"
                    placeholder="Add a title to your advert"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Location:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="lastName"
                    placeholder="Location"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"left"}
                  >
                    Description:
                  </Typography>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    multiline
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="username"
                    placeholder="Tell others more about what you are looking for"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Grid
                pb={0.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                wrap="nowrap"
              >
                <Grid item xs={4} md={3}>
                  <InputLabel id="fields-label">Field</InputLabel>
                  <Select
                    labelId="fields-label"
                    id="fields"
                    multiple
                    value={pin.field}
                    //onChange={}
                    input={<OutlinedInput id="select-fields" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value: string) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {(Object.keys(Field) as Array<keyof typeof Field>).map(
                      (key) => (
                        <MenuItem
                          key={Field[key]}
                          value={Field[key]}
                          style={getStyles(Field[key], pin.field, theme)}
                        >
                          {Field[key]}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </Grid>

                <Grid item xs>
                  <TextField
                    required
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 120 }}
                    name="email"
                    placeholder="what is your field / areas of interest?"
                    // onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  pt: 4,
                  pb: 1,
                  gap: 2,
                }}
              >
                <Button
                  startIcon={<CancelIcon />}
                  variant="contained"
                  color="secondary"
                  onClick={close}
                >
                  Discard
                </Button>
                <Button
                  endIcon={<SaveIcon />}
                  variant="contained"
                  color="primary"
                  // onClick={handleSubmitProfileChange}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
  /*
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMentoring({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Pin</button>
      </form>
    </div>
  );*/
};
export default AddMentoringPin;
