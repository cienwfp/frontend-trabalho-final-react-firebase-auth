import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, signInWithGoogle } from "../utils/firebase";
import ResponseChat from './responseChat';
import { Avatar, Grid, Typography, IconButton } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.userAuthHandler = this.userAuthHandler.bind(this);

    this.state = {
      loginUser: null,
      message: "no message"
    };
  }

  userAuthHandler(user) {
    if (user) {
      this.setState({ loginUser: user });
    } else {
      this.setState({
        loginUser: null,
        message: "no message"
      });
    }
  }

  componentDidMount() {
    onAuthStateChanged(auth, this.userAuthHandler);
  }

  render() {
    const loginImageURL = "http://www.thebestnest.co.nz/wp-content/plugins/google-apps-login/img/btn_google_signin_dark_normal_web.png";
    var element;

    if (this.state.loginUser) {
      const displayName = auth.currentUser.displayName;
      const photoURL = auth.currentUser.photoURL;
      element = (
        <Grid container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container xs={8} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Avatar sx={{ width: 96, height: 96 }} style={{ margin: "10px" }} alt="Profile icon" src={photoURL} />
            <h1>Seja bem-vindo {displayName}!</h1>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <IconButton onClick={() => signOut(auth)}>
                <ExitToApp />
              </IconButton>
            </Avatar>
          </Grid>

          <ResponseChat />
        </Grid>
      );
    } else {
      element = (
        <Grid container style={{ background: '#000080', height: '98vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Grid>
            <img width={600} style={{ margin: "10px" }} alt="Profile icon" src='https://www.ceperj.rj.gov.br/sites/ceperj/themes/secretarias/partials/LogoCEPERJ.svg' />

          </Grid>
          <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" style={{ color: "#d3d3d3" }}>
              Para entrar no chat entre com a sua conta Google
            </Typography>
            <input type="image" alt="Entrar com o Google"
              onClick={signInWithGoogle} src={loginImageURL} />
          </Grid>
        </Grid >
      );
    }

    return (
      <div >{element}</div>
    );
  }
}