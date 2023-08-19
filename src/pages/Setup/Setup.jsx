import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageUploader from "react-image-upload";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";



const theme = createTheme();

export default function Setup() {
  const { login } = useContext(AuthContext);
  const [Profile_Link, setProfile_Link] = useState("")
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Education, setEducation] = useState("")
  const [Location, setLocation] = useState("")
  
  function getImageFileObject(imageFile) {
    setProfile_Link(imageFile.dataUrl)
  }

  function runAfterImageDelete(file) {
    setProfile_Link("");
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
   
    login(FirstName, LastName, Profile_Link, Education, Location);
    alert("Click on 'proceed to feed'");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Set up your profile
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FirstName"
                  onChange={handleFirstNameChange}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  onChange={handleLastNameChange}
                  id="lastName"
                  label="Last Name"
                  name="LastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 
                  fullWidth
                  onChange={handleEducationChange}
                  id="education"
                  label="Education"
                  name="Education"
                  autoComplete="education"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  onChange={handleLocationChange}
                  name="Location"
                  label="Location"
                  type="location"
                  id="location"
                  autoComplete="location"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <ImageUploader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
                <p>Add Profile Picture</p>
              </Grid>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Set Up
            </Button>
            <Link to="/">
            <p>Proceed to feed</p></Link>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}