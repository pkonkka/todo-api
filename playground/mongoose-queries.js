const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58e88cf34ff6a6848ca8252911';
var userId = '58e61e47e7183b1b2d9e37b0';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

// User find by id
// - no User
// - user found
// - error handling

User.findById(userId)
    .then(user => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User', user);
    })
    .catch(e => console.log(e));


