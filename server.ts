import app from "./src/app";
import { config } from "./src/config/config";
import connectToDatabase from "./src/config/db";

const startServer = async () => {
  await connectToDatabase();

  const PORT = config.port;

  app.listen(PORT, () => {
    console.log(`Server is running at => http://localhost:${PORT}`);
  });
};

startServer();
