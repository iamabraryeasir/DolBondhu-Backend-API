import "dotenv/config";

const _config = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017",
    name: process.env.DB_NAME || "dolbondhu",
  },
};

export const config = Object.freeze(_config);
