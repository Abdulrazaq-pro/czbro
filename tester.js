const axios = require("axios");

axios({
  method: "POST",
  url: "https://detect.roboflow.com/jaundice/1",
  params: {
    api_key: "API_KEY",
    image: "IMAGE_URL",
  },
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
  });
