const HC=require('./HttpCommunication');
const crypto = require('crypto');
const md5 = crypto.createHash("md5");
async function toDB(event) {
    let action=event.action;
    let s_data=md5.update(event.s_data).digest('hex');
    let url='';
    switch (action) {
        case 'login':
            let loginRec=await HC.post(url,s_data);
            return loginRec;
            break;
    
        case 'submit':
            let SubmitRec=await HC.post(url,s_data);
            return SubmitRec;
            break;
    }
}
exports.toDB=toDB;