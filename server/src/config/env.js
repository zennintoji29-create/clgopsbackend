const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};

if (!env.MONGO_URI || !env.JWT_SECRET) {
  throw new Error("❌ Missing required environment variables");
}

module.exports = env;
