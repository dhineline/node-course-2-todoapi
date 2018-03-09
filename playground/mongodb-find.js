const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5aa1976def71af22b8e2265d')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })

  db.collection('Todos').find().count().then((count)=>{
    console.log('Todos');
    console.log('Todos count: ', JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  })

  // db.close();

});
