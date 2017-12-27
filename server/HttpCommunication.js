const http=require('http');
const qs=require('querystring');
const request=require('request');
function post(url,s_data) {
    return new Promise((resolve,reject)=>{
        let option={
            url:url,
            post_data:qs.stringify(s_data)
        }
        let returnData=request.post(option,function (err,response,body) {
            if (!err&&response.statusCode==200) {
                if (body!=='null') {
                    console.log('post_requestBody is Null');
                    try {
                        result=JSON.parse(body);
                    } catch (error) {
                        result='null';
                        console.log('POST_ERROR:'+error);
                    }
                       resolve(result);
                 }
            }
        });
    });
}
function get(url) {
    return new Promise((resolve,reject)=>{
      let returnData=request.get(url,function (err,response,body) {
           if (!err&&response.statusCode==200) {
                if (body!=='null') {
                    console.log('get_requestBody is Null');
                    try {
                        result=JSON.parse(body);
                    } catch (error) {
                        result='null';
                        console.log('GET_ERROR:'+error);
                    }
                       resolve(result);
                 }
            }
      });
    });
}
exports.post=post;
exports.get=get;