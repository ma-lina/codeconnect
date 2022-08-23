import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import { Input, IconButton, Typography } from "@mui/material";
import { ADD_AD } from "../GraphQL/Mutations";

const AddAd = () => {
  /*   let input: any;
  const [addMentoring, { data, loading, error }] = useMutation(ADD_AD);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`; */

  return (
    <div>
      <div>
        <FormControl>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                //  error={}
                size="small"
                label=""
                id="firstname"
                name="firstName"
                type="text"
                value={""}
                //   helperText={}
                //onChange={handleChangeHandler}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                //  error={}
                size="small"
                label="Last Name"
                id="lastname"
                name="lastName"
                type="text"
                value={""}
                // helperText={}
                //onChange={handleChangeHandler}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                //   error={}
                size="small"
                label="Username"
                id="username"
                name="username"
                type="text"
                value={""}
                //    helperText={}
                // onChange={handleChangeHandler}
                fullWidth
              />
            </div>
            <div>
              <TextField
                // error={}
                size="small"
                label="E-mail"
                id="email"
                name="email"
                type="email"
                value={""}
                // helperText={}
                //onChange={handleChangeHandler}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                // error={}
                size="small"
                name="password"
                id="password"
                label="Password"
                type="password"
                value={""}
                //  helperText={}
                // onChange={handleChangeHandler}
                required
                fullWidth
              />
            </div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
              // onClick={signUp}
            >
              Sign up
            </Button>
          </Box>
        </FormControl>
      </div>
    </div>
  );
};

export default AddAd;

/*     <div>
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
        <button type="submit">Add Todo</button>
      </form>
    </div> */
