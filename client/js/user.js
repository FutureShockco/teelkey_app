User = new Mongo.Collection(null)

User.get = function (username, cb) {
    teelkey.getAccounts([username], function (error, result) {
        if (!result || result.length < 1) {
            cb(true)
            return
        }
        for (var i = 0; i < 1; i++) {
            User.upsert({ _id: result[i]._id }, result[i])
        }
        cb(null)
    });
}

User.refresh = function (username, cb) {
    teelkey.getAccounts([username], function (error, result) {
        if (!result || result.length < 1) {
            cb(true)
            return
        }
        for (var i = 0; i < 1; i++) {
            User.upsert({ _id: result[i]._id }, result[i])
        }
        cb(null)
    });
}
