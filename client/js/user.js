User = new Mongo.Collection(null)

User.get = function (username, cb) {
    teelkey.getAccounts([username], function (error, result) {
        if (!result || result.length < 1) {
            cb(true)
            return
        }
        for (var i = 0; i < 1; i++) {
            console.log( result[i])
            result[i].privatekey = "6a8ZCRXaKixGUC1yZGLhuhkUta8cv2EysXuh9aqK2pgw";
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
            console.log( result[i])
            result[i].privatekey = "6a8ZCRXaKixGUC1yZGLhuhkUta8cv2EysXuh9aqK2pgw";
            User.upsert({ _id: result[i]._id }, result[i])
        }
        cb(null)
    });
}
