import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await axios.post(
      "http://121.46.23.81:8035/portdistribute/api/order/lockOrderForNet",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000,
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {
    console.error("LockOrder Error:", error.message);

    return res.status(500).json({
      error: error.message,
      detail: error.response?.data || null,
    });
  }
}