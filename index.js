import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.post("/proxy", async (req, res) => {
  try {
    const response = await axios.post(
      "http://121.46.23.81:8035/portdistribute/api/order/lockOrderForNet",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Proxy server running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
