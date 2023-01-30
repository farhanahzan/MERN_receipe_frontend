import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import ReceipeCard from './ReceipeCard';
import HeroBanner from './HeroBanner/HeroBanner';
import { CircularProgress, Stack } from '@mui/material';

const ShowReceipeList = () => {
  const [receipe, setReceipe] = useState([]);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    axios
      .get('https://hot-receipe.onrender.com/api/receipes')
      .then((res) => {
        setReceipe(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, [deleted]);

  const receipeList =
    receipe.length === 0 ? (
      <CircularProgress />
    ) : (
      receipe.map((receipe, key) => (
        <ReceipeCard receipe={receipe} key={key} setDeleted={setDeleted} />
      ))
    );

  return (
    <>
      <HeroBanner />
      <Stack
        direction="row"
        justifyContent="space-around"
        flexWrap="wrap"
        rowGap="5vh"
        columnGap="2vw"
        width={'100%'}
      >
        {receipeList}
      </Stack>
    </>
  );
};

export default ShowReceipeList;
