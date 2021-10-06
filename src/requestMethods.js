import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTMxZThjNDEzMzM1NzZlY2FlNzc4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzUyMDIzNCwiZXhwIjoxNjMzNzc5NDM0fQ.Y8sM2j4ZNWEiHELttmEMJVOqjh0kAURfLgIo9rG0RaY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
