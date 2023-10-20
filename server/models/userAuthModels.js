const { default: mongoose, Schema } = require("mongoose");

const userAuthModels = new Schema(
    {
        uname: {
            type: String,
            require: true
        },
        gmail: {
            type: String,
            require: true
        },
        pwd: {
            type: String,
            require: true
        },
        leaderboard: [
            {
                fplayer: {
                    type: String,
                    require: true
                },

                splayer: {
                    type: String,
                    require: true
                },

                result: {
                    type: String,
                    require: true
                }
            }
        ]
    }, { timestamps: true }
)

module.exports = mongoose.model('userAuthModels', userAuthModels, 'Users');