// const mongoose = require('mongoose');

// // const userSchema = new Schema({
// //   name: String,
// //   date: String,
// //   comments: String,
// // }, { collection: "Users" });


// const userSchema = new mongoose.Schema({
//   name: String,
//   date: String,
//   comments: String,
// }, { collection: "Users" }
//   // 모델 스키마 정의
// );

// module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

let User;

try {
  User = mongoose.model('User');
} catch {
  const userSchema = new mongoose.Schema({

    name: String,
    date: String,
    comments: String,
    // 모델 스키마 정의
  });

  User = mongoose.model('User', userSchema);
}

module.exports = User;