import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

const ShowReceipeDetail = (props) => {
  const [receipe, setReceipe] = useState({});

  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    return () => {
      axios
        .get(`http://localhost:8082/api/receipes/${id}`)
        .then((res) => {
          setReceipe(res.data);
        })
        .catch((err) => {
          console.log('Error from showReceipeDetail');
        });
    };
  }, [id]);

  // const onDeleteClick = (id) => {
  //   axios
  //     .delete(`http://localhost:8082/api/receipes/${id}`)
  //     .then((res) => {
  //       navigate('/');
  //     })
  //     .catch((err) => {
  //       console.log('Error form showReceipeDetail_deleteClick');
  //     });
  // };

  return (
    <Grid
      container
      display={'flex'}
      justifyContent={'center'}
      alignItems="center"
      sx={{ minHeight: '85vh', pt: 6 }}
    >
      <Grid item xs={12}>
        <Paper
          elevation={2}
          sx={{ padding: 0, borderRadius: 5, minHeight: '60vh' }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              sx={{
                minHeight: '60vh',
                position: 'relative',
                backgroundColor: 'grey.800',

                padding: 0,
                borderRadius: {
                  xs: '20px 20px 0px 0px',
                  md: '20px 0px 0px 20px',
                },
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${receipe.imageUrl})`,
              }}
            ></Grid>
            <Grid item xs={12} sm={12} md={7} sx={{ padding: 2 }}>
              {receipe.imageUrl ? (
                <>
                  <Typography variant="h4" gutterBottom>
                    {receipe.receipeName}
                  </Typography>
                  <Typography
                    paragraph
                    color="text.secondary"
                    variant="body1"
                    gutterBottom
                  >
                    {receipe.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Ingredients
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    rowGap={2}
                    columnGap={2}
                  >
                    {receipe.ingredients?.map((item, key) => (
                      <Chip label={item} key={key} size="medium" />
                    ))}
                  </Stack>
                </>
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ShowReceipeDetail;
