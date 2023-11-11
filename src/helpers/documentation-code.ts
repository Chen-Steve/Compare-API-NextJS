// Node.js
export const nodejs = `const axios = require("axios");

const options = {
    method: "POST",
    url: "https://similarity-api-next.vercel.app/api/v1/similarity",
    params: {
      text1: "First text",
      text2: "Second text"
    },
    headers: {
      "Authorization": "YOUR_API_KEY",
    }
};

axios.request(options).then(function (response) {
    if (response.status === 200) {
        console.log(response.data);
    } else {
        console.error("Non-200 HTTP status code:", response.status);
    }
}).catch(function (error) {
    console.error(error);
});

// Expected Response:
// {
//   "success": true,
//   "text1": "First text",
//   "text2": "Second text",
//   "similarity": 0.9380026397508087
// }
`;

// Python
export const python = `import requests

url = "https://similarity-api-next.vercel.app/api/v1/similarity"
api_key = "YOUR_API_KEY"
text1 = "First text"
text2 = "Second text"

headers = {
    "Authorization": api_key
}

payload = {
    "text1": text1,
    "text2": text2
}

try:
    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 200:
        data = response.json()
        print(data)
    else:
        print(f"Request failed with status code {response.status_code}")
except requests.RequestException as e:
    print(f"Request failed: {e}")

# Expected Response:
# {
#   "success": true,
#   "text1": "First text",
#   "text2": "Second text",
#   "similarity": 0.9380026397508087
# }
`;

// Bash
export const bash = `curl -X POST \\
  "https://similarity-api-next.vercel.app/api/v1/similarity" \\
  -H "Authorization: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text1": "First text",
    "text2": "Second text"
  }'

# Expected Response:
# {
#   "success": true,
#   "text1": "First text",
#   "text2": "Second text",
#   "similarity": 0.9380026397508087
# }
`;
