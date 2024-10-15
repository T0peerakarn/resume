"use server";

const axios = require("axios");
const baseUrl = "https://graph.instagram.com/v21.0/me";

export const getInstagramImage = async () => {
  const res = await axios.get(
    `${baseUrl}/media?fields=media_url,caption&limit=10&access_token=${process.env.IG_ACCESS_TOKEN}`
  );

  return res.data;
};
