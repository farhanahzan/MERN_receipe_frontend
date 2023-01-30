import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './Form/Form';

const UpdateReceipe = (props) => {
  const navigate = useNavigate();
  const [receipeData, setReceipeData] = useState({
    receipeName: '',
    ingredients: [],
    description: '',
    imageUrl: '',
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://hot-receipe.onrender.com/api/receipes/${id}`)
      .then((res) => {
        setReceipeData({
          receipeName: res.data.receipeName,

          ingredients: res.data.ingredients,
          description: res.data.description,

          imageUrl: res.data.imageUrl,
        });
      })
      .catch((err) => {
        console.log('Error from UpdatereceipeInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setReceipeData({ ...receipeData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const data = {
      receipeName: receipeData.receipeName,

      ingredients: receipeData.ingredients,
      description: receipeData.description,

      imageUrl: receipeData.imageUrl,
    };
    console.log('data', data);
    axios
      .put(`https://hot-receipe.onrender.com/api/receipes/${id}`, data)
      .then((res) => {
        navigate(`/show-receipe/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatereceipeInfo!');
      });
  };

  return (
    <Form
      receipeData={receipeData}
      onChange={onChange}
      onSubmit={onSubmit}
      setReceipeData={setReceipeData}
      formType="update"
    />
  );
};

export default UpdateReceipe;
