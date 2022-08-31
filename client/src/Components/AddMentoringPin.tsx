import { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PIN } from "../GraphQL/Mutations";
import {
  Box,
  Modal,
  Button,
  Typography,
  Grid,
  TextField,
  Chip,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
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
import { getStyles } from "../Utils/getStyles";

const AddMentoringPin: any = ({ open, close }: any) => {
  const { userProfile } = useContext(AuthContext);
  const theme = useTheme();

  const [addMentoring, { data, loading, error }] = useMutation(ADD_PIN);
  const [pin, setPin] = useState<any>({
    creator: userProfile?._id,
    title: "",
    field: [],
    location: "",
    description: "",
    date: "2022-01-09T23:00:00.000+00:00",
    techKnowHow: [],
    level: "Junior",
    availability: [],
    timeslots: [],
    offer: false,
  });
  console.log(pin);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin({
      ...pin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<typeof pin>) => {
    const {
      target: { value },
    } = e;
    setPin({ ...pin, field: [...value] });
  };

  const handleSelectChange2 = (e: SelectChangeEvent<typeof pin>) => {
    const {
      target: { value },
    } = e;
    setPin({ ...pin, techKnowHow: [...value] });
  };

  const handleSelectChange3 = (e: SelectChangeEvent<typeof pin>) => {
    const {
      target: { value },
    } = e;
    setPin({ ...pin, timeslots: [...value] });
  };

  const handleSelectChange4 = (e: SelectChangeEvent<typeof pin>) => {
    const {
      target: { value },
    } = e;
    setPin({ ...pin, availability: [...value] });
  };
  /*

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
                    name="title"
                    placeholder="Add a title to your advert"
                    value={pin.title}
                    onChange={handleInputChange}
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
                    name="location"
                    placeholder="Location"
                    value={pin.location}
                    onChange={handleInputChange}
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
                    name="description"
                    placeholder="Tell others more about what you are looking for"
                    value={pin.description}
                    onChange={handleInputChange}
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
                    Field:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <Select
                      labelId="fields-label"
                      id="fields"
                      multiple
                      value={pin.field}
                      onChange={handleSelectChange}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
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
                  </FormControl>
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
                    TechKnowHow:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <Select
                      labelId="fields-label"
                      id="fields"
                      multiple
                      value={pin.techKnowHow}
                      onChange={handleSelectChange2}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value: string) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {(
                        Object.keys(TechKnowHow) as Array<
                          keyof typeof TechKnowHow
                        >
                      ).map((key) => (
                        <MenuItem
                          key={TechKnowHow[key]}
                          value={TechKnowHow[key]}
                          style={getStyles(
                            TechKnowHow[key],
                            pin.techKnowHow,
                            theme
                          )}
                        >
                          {TechKnowHow[key]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                    Timeslots:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <Select
                      labelId="fields-label"
                      id="fields"
                      multiple
                      value={pin.timeslots}
                      onChange={handleSelectChange3}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value: string) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {(
                        Object.keys(TimeSlots) as Array<keyof typeof TimeSlots>
                      ).map((key) => (
                        <MenuItem
                          key={TimeSlots[key]}
                          value={TimeSlots[key]}
                          style={getStyles(
                            TimeSlots[key],
                            pin.timeslots,
                            theme
                          )}
                        >
                          {TimeSlots[key]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                    Availability:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <FormControl sx={{ m: 1, width: 300 }} size="small">
                    <Select
                      labelId="fields-label"
                      id="fields"
                      multiple
                      value={pin.availability}
                      onChange={handleSelectChange4}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value: string) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {(
                        Object.keys(Availability) as Array<
                          keyof typeof Availability
                        >
                      ).map((key) => (
                        <MenuItem
                          key={Availability[key]}
                          value={Availability[key]}
                          style={getStyles(
                            Availability[key],
                            pin.availability,
                            theme
                          )}
                        >
                          {Availability[key]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                  onClick={(e) => {
                    addMentoring({ variables: { input: pin } });
                  }}
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
};
export default AddMentoringPin;
