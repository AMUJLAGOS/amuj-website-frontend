//
import axios from "axios";
import "dotenv/config";

const host = process.env.NEXT_PUBLIC_HOST;
const server = process.env.NEXT_PUBLIC_API_SERVER;
export const imageServer =
  process.env.NEXT_PUBLIC_HOST === "local"
    ? process.env.NEXT_PUBLIC_IMAGE_URL
    : "";

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
