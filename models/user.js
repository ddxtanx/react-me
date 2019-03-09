var bcrypt = require('bcryptjs');
// Use db.users.find().pretty()
var mongoose = require('mongoose');
var process = require("process");
var env = process.env;
var mongoURI = `mongodb://${env.MONGO_USER}:${env.MONGO_PASS}@${env.MONGO_URL}`;
mongoose.connect(mongoURI);
mongoose.connection.on('error', function(err) { console.log(err.message); });
mongoose.connection.on('open', function() {
  console.log("mongodb connection open");
});
console.log("hi");
var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	profileimage:{
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	callback(null, isMatch);
	});
}

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(newUser.password, salt, function(err, hash) {
   			newUser.password = hash;
   			newUser.save(callback);
    	});
	});
}
