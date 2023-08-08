import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, ThemeProvider, Typography } from '@mui/material';
import { respostaChat } from '../service/service';
import Typing from 'react-typing-animation';
import Resposta from '../utils/respostas';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponseChat() {
  const [resposta, setResposta] = useState("")
  const [complemento, setComplemento] = useState("")
  const [click, setClick] = useState(false)

  const complet = (op) => {
    if (op) {
      setComplemento('Obrigado pelo seu contato')
      setClick(true)
    } else {
      setComplemento('Um ticket foi aberto para o seu problema')
      setClick(true)
    }
  }
  const callChat = (event) => {
    event.preventDefault();
    setResposta("")
    setComplemento("")
    setClick(false)
    const data = new FormData(event.currentTarget);
    if (
      data.get('pergunta').includes('senha') ||
      data.get('pergunta').includes('login') ||
      data.get('pergunta').includes('acesso') ||
      data.get('pergunta').includes('computador') ||
      data.get('pergunta').includes('pc') ||
      data.get('pergunta').includes('gru') ||
      data.get('pergunta').includes('gsi') ||
      data.get('pergunta').includes('imprimir') ||
      data.get('pergunta').includes('impressão') ||
      data.get('pergunta').includes('impressora')
    ) {
      const body = { 'pergunta': data.get('pergunta') }
      respostaChat(body)
        .then((res) => {
          setResposta(res.data.message)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setComplemento("")
      setClick(true)
      setResposta('Não foi encontrado nada a respeito na nossa base de dados')
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            <Grid container sx={{ background: 'black', marginTop: '20px', width: '1200px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Typography style={{ color: "#d3d3d3", margin: '10px', width: '1100px' }}>
                <Typing hideCursor={true}>
                  {Resposta(resposta)}
                  <Grid item sx={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button
                      variant='contained'
                      color='secondary'
                      disabled={click}
                      onClick={() => complet(true)}>
                      sim
                    </Button>
                    <Button
                      variant='contained'
                      color='secondary'
                      disabled={click}
                      onClick={() => complet(false)}>
                      Não
                    </Button>

                  </Grid>
                </Typing>
              </Typography>
              {complemento && (
                <Grid item sx={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Typography style={{ color: "#d3d3d3", margin: '10px', width: '1100px' }}>
                    <p style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '24px', textShadow: 'rgba(136, 136, 136, 0.5) 3px -2px 6px' }}>
                        {complemento}
                      </span>
                    </p>
                  </Typography>
                </Grid>
              )}
            </Grid>
          )
        }
      </Grid >
    </ThemeProvider>
  );
}
