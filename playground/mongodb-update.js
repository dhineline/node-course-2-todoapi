const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  db.collection('Todos').findOneAndUpdate(
    {
      _id: new ObjectID("5aa1ed4f6b498f03d68817bb")
    },{
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }
  ).then((result)=>{
    console.log(result);
  });

  // db.close();

});
