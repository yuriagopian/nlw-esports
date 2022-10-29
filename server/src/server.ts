import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  console.log("Acessou Ads");

  return response.json([
    {
      id: 1,
      name: "Anuncio 1",
    },
    {
      id: 2,
      name: "Anuncio 2",
    },
  ]);
});

app.listen(3333);
