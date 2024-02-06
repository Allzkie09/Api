const axios = require('axios');

// API endpoint
const apiUrl = 'https://deep-image.ai/rest_api/process_result';

// Request headers
const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': 'fb124350-c4ef-11ee-8205-19c98d3fcee4',  // Replace 'API_KEY' with your actual API key
};

// Request data
const requestData = {
  enhancements: ['denoise', 'deblur', 'light'],
  url: 'https://deep-image.ai/api-example.png',
  width: 2000,
};

// Make POST request using Axios
axios.post(apiUrl, requestData, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
