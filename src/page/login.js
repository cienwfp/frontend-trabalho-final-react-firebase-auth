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
        <div>
          <Grid container xs={12} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Avatar style={{ margin: "10px" }} alt="Profile icon" src={photoURL} />
            <Typography variant='h7' style={{ color: "#d3d3d3" }}>
              Seja bem-vindo {displayName}!
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <IconButton onClick={() => signOut(auth)}>
                <ExitToApp />
              </IconButton>
            </Avatar>
          </Grid>
          <ResponseChat />
        </div>
      );
    } else {
      element = (
        <div >
          <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item sx={{ marginTop: '20px' }}>
              <img width={250} style={{ margin: "10px" }} alt="Profile icon" src='https://www.ceperj.rj.gov.br/sites/ceperj/themes/secretarias/partials/LogoCEPERJ.svg' />

            </Grid>
            <Grid height={200} />
            <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h8" style={{ color: "#d3d3d3", margin: '10px' }}>
                Para entrar no chat entre com a sua conta Google
              </Typography>
              <input type="image" alt="Entrar com o Google"
                onClick={signInWithGoogle} src={loginImageURL} />
            </Grid>
          </Grid>
        </div >
      );
    }

    return (
      <div >{element}</div>
    );
  }
}