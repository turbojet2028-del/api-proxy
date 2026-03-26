import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}