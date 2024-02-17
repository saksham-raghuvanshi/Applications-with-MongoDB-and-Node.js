const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

const main = async () => {
  await client.connect();
  const db = client.db("dbname");
  const collection = db.collection("inventory");
  const data = await collection.find({ price: { $gt: 10 } }).toArray();

  console.log(data);
  return data;
};

main()
  .then(console.log())
  .catch((e) => console.log(e))
  .finally(() => client.close());
