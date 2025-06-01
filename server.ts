import app from "./src/app";
import { config } from "./src/config/config";

const startServer = async () => {
  const PORT = config.port;

  app.listen(PORT, () => {
    console.log(`✅ Server is running at => http://localhost:${PORT}`);
  });
};

startServer();
