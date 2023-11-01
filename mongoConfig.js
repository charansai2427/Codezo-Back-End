const { MongoClient } = require("mongodb");

const client = new MongoClient(
  `mongodb+srv://Charan_sai:darling_242726@cluster0.tr74xjt.mongodb.net/Codezo01`,
 { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

const db = client.db();

const users =  db.collection("users");
const jobs = db.collection("jobs");

module.exports = {users, jobs}