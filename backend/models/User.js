const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        },
        password: {
            type: String,
            required: true
            },
});

const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;