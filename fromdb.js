var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/parctice_db";
var prompt = require("prompt");

var attributes = [
  {
    name: "title"
  }
];
prompt.start();

function createQuestion() {
  prompt.get(attributes, function(err, result) {
    if (err) {
      console.log(err);
      return 1;
    } else {
      title = result.title;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("parctice_db");
        dbo
          .collection("posts")
          .find({ title: title })
          .toArray(function(err, body) {
            if (err) throw err;
            if (body.length > 0) {
              console.log(body[0].body);
            } else {
              console.log("I dont understand you");
            }

            db.close();
            createQuestion();
          });
      });
    }
  });
}

createQuestion();

function recievedMsg(title) {
  forEach(el => {
    if (el.title === title) {
      recievedMsg(title);
      return el;
    }
    console.log(body);
  });
}
