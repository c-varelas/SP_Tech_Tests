const fs = require('fs');

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if(err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object)
        } catch (error) {
            return cb && cb(err);
        }
    });

}

jsonReader("./user.json", (err, user) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(user.address.city);
});
