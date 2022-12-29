import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Zoom,
} from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AlertDialog from './Alert/AlertDialog';
const ReceipeCard = ({ receipe, setDeleted }) => {
  const [open, setOpen] = useState({
    show: false,
    id: null,
  });

  const handleDelete = (id) => {
    setOpen({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = () => {
    if (open.show && open.id) {
      axios
        .delete(`http://localhost:8082/api/receipes/${open.id}`)
        .then((res) => {
          setDeleted(true);
        })
        .catch((err) => {
          console.log('Error form showReceipeDetail_deleteClick');
        });
      setOpen({
        show: false,
        id: null,
      });
    }
  };
  const handleDeleteFalse = () => {
    setOpen({
      show: false,
      id: null,
    });
  };
  return (
    <Zoom in>
      <Card
        sx={{
          width: {
            xs: '100vw',
            sm: '65vw',
            md: '45vw',
            lg: '24vw',
            xl: '23vw',
          },

          position: 'relative',
          borderRadius: 2,
        }}
      >
        <AlertDialog
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
          open={open}
        />
        <CardMedia
          component="img"
          alt={receipe.receipeName}
          height={345}
          image={receipe.imageUrl}
          sx={{ filter: 'brightness(0.7)' }}
        />

        <CardActions
          sx={{
            position: 'absolute',
            top: 0,
            right: 1,
            display: 'flex',
            gap: 1.5,
          }}
        >
          <IconButton
            component={Link}
            to={`/edit-receipe/${receipe._id}`}
            sx={{ bgcolor: 'rgb(255 255 255 / 75%)' }}
            aria-label="edit"
            color="primary"
            size="small"
          >
            <EditRoundedIcon />
          </IconButton>
          <IconButton
            sx={{ bgcolor: 'rgb(255 255 255 / 75%)' }}
            aria-label="delete"
            color="error"
            size="small"
            onClick={() => {
              handleDelete(receipe._id);
            }}
          >
            <DeleteRoundedIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            noWrap
            sx={{
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {receipe.receipeName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
              minHeight: 45,
              lineHeight: 1.1,
            }}
          >
            {receipe.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            component={Link}
            to={`/show-receipe/${receipe._id}`}
            size="medium"
            color="inherit"
            fullWidth
            sx={{
              boxShadow: 2,
              bgcolor: 'warning.light',
              borderRadius: 5,

              mx: 4,
              mb: 1,
            }}
          >
            View Receipe
          </Button>
        </CardActions>
      </Card>
    </Zoom>
  );
};

export default ReceipeCard;
