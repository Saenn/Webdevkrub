exports.createMember = function(data, callback) {
    global.db.task(t => {
        return t.oneOrNone('SELECT username FROM member WHERE username = $1', data.username)
            .then (member => {
                if (member == null) {
                    const query = 'INSERT INTO member (username, password, company, email) ' +
                                  'VALUES (${username}, ${password}, ${company}, ${email})'
                    
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


exports.announceCard = function(data, callback) {
        const query = 'insert into card (company,type,area,description)' + 
                      'values (${company},${type},${area},${description})'
        global.db.none(query,data)
            .then (response => {
                callback(null, response)
            })
            .catch (error => {
                callback(error, null)
            });
};


exports.getUser = function(data, callback) {
    global.db.oneOrNone('SELECT * FROM Member')
        .then (response => {
            if (response == null) callback(null, []);
            else callback(null, response);
        })
        .catch (error => {
            callback(error, null)
        });
};

exports.getAllCard = function(data,callback){
    global.db.any('select * from Card')
        .then(response => {
            callback(null,response);
        })
        .catch(error =>{
            callback(error,null);
        })
}