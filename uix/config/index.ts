import env from "@/utils/env";
import app from "./app";

const c = {
  api: {
    url: env("API_URL", "http://localhost/api"),
  },

  app,
};

export default c;
