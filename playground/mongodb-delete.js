const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

   db.collection('Users').deleteMany({name: 'Mike'});
  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5aa30ddbedc0c6837c983b48")}).then((results)=>{
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  // db.close();

});
