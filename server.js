const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const menu = [
  {
    slug: "we-conect",
    title: "We-Conect Home page",
    url: "https://www.we-conect.com/",
    children: [
      {
        slug: "live-events",
        title: "Live Event",
        url: "https://www.we-conect.com/liveevents",
      },
      {
        slug: "digital-managed-events ",
        title: "Digital Managed Events ",
        url: "https://www.we-conect.com/digital-managed-events",
      },
    ],
  },
  { slug: "google", title: "Google", url: "https://www.google.de" },
];

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/api/v1/menu", (req, res) => {
  res.send(menu);
});

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
