import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography } from '@mui/material';
import { respostaChat } from '../service/service';
import Typing from 'react-typing-animation';
import Resposta from '../utils/respostas';

export default function ResponseChat() {
  const [resposta, setResposta] = useState("")

  const callChat = (event) => {
    event.preventDefault();
    setResposta("")
    const data = new FormData(event.currentTarget);
    const body = { 'pergunta': data.get('pergunta') }
    respostaChat(body)
      .then((res) => {
        setResposta(res.data.message)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <Grid container padding={1} sx={{ height: '100hv', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container xs={8} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12}>
          <Typography align='center' variant="h4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#d3d3d3", margin: '10px' }}>
            Descreva seu problema
          </Typography>
          <Paper
            component="form"
            onSubmit={callChat}
            sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <InputBase
              id='pergunta'
              name='pergunta'
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      {
        resposta && (
          <Grid container sx={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Typography variant="h6" style={{ color: "#d3d3d3", margin: '10px' }}>
              <Typing speed={50} hideCursor={true}>
                {Resposta(resposta)}
              </Typing>
            </Typography>
          </Grid>
        )
      }
    </Grid >
  );
}
