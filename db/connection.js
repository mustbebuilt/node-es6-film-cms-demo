// const { MongoClient } = require("mongodb");
import { MongoClient, ObjectId } from "mongodb";
const Db = "mongodb://127.0.0.1:27017";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var dbConnection;

export const connectToServer = (callback) => {
  client.connect(function (err, db) {
    // Verify we got a good "db" object
    if (db) {
      dbConnection = db.db("myMoviesDb");
      console.log("Successfully connected to MongoDB.");
    }
    return callback(err);
  });
};

export const getDb = () => {
  return dbConnection;
};

export const getObjectId = () => {
  // var ObjectId = require("mongodb").ObjectId;
  return ObjectId;
};
