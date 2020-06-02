import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json({
    response: true
  })
});

app.listen(3333);