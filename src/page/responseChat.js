import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography } from '@mui/material';
import { respostaChat } from '../service/service';
import Typing from 'react-typing-animation';

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
    <Grid container padding={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <Grid container padding={10} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Grid item xs={8}>
          <Paper
            component="form"
            onSubmit={callChat}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
          >
            <InputBase
              id='pergunta'
              name='pergunta'
              sx={{ ml: 1, flex: 1 }}
              placeholder="Descreva seu problema"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      {resposta && (
        <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Typography>
            <Typing speed={100} hideCursor={true}>
              {resposta}
            </Typing>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
