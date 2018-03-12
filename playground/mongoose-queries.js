const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5aa68092b7e6fb41334b53bd';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos: ', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo fetched: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo fetched by Id', todo);
// }).catch((e)=>{
//   console.log(e);
// })

var userID = '5aa487c3285ca6c27645884a';

if(!ObjectID.isValid(userID)) {
  console.log("user ID not valid");
}

User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User ID not found', userID);
  }
  console.log('User fetched by ID', user);
}).catch((e) => {
  console.log(e);
})
