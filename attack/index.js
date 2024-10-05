const axios = require("axios");
let data = JSON.stringify({
  email: "subh@gmail.com",
  otp: 230653,
  newPassword: "hola-amigo",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/reset-password",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
