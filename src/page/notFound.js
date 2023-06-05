import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 512,
            width: 512,
          }}
          alt="Page Not Found"
        /* src={PageNotFound} */
        />
        <Box>
          <h1>
            404 - Pagina não encontrada
          </h1>
        </Box>
        <Button style={{ textAlign: "center" }}>
          <Link to="/"> Ir para home </Link>
        </Button>
      </Box>
    )
  }
}
export default NotFoundPage;