exports.createAdmin = function(data, callback) {
    global.db.task(t => {
        console.log('kuy')
        return t.oneOrNone('SELECT id FROM AdminAccount WHERE username = $1', data.username)
            .then (admin => {
                if (admin == null) {
                    const query = 'INSERT INTO AdminAccount (username, password, f_name, l_name) ' +
                                  'VALUES (${username}, ${password}, ${f_name}, ${l_name})'
                    
                    return t.none(query, data)
                } else return [];
            });
    })
        .then (response => {
            callback(null, response)
        })
        .catch (error => {
            callback(error, null)
        });
};

exports.getUserByUsername = function(data, callback) {
    global.db.oneOrNone('SELECT * FROM AdminAccount WHERE username = $1', data.username)
        .then (response => {
            if (response == null) callback(null, []);
            else callback(null, response);
        })
        .catch (error => {
            callback(error, null)
        });
};
