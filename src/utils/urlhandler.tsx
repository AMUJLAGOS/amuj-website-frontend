//
import axios from "axios";

const server = "http://127.0.0.1:8000/api/";
export const imageServer = "http://127.0.0.1:8000";

export const GetRequest = async (url: any) => {
  const response = await axios.get(`${server}${url}`);
  return response;
};

export const PostRequest = async (url: any, data: any) => {
  try {
    const response = await axios.post(`${server}${url}`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};
