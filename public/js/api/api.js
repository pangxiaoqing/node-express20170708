/**
 * Created by pxq on 17-7-13.
 */

function Api () {
  //this.api();
}
Api.prototype = {
  constructor: Api,
  /*
   * 请求函数
   */
  api:function(opt,callback){
    var self = this;
    $.ajax({
      url:opt.url,
      type:opt.type || "GET",
      data:opt.data || {},
      dataType:opt.dataType || 'String',
      success:function(msg){
        callback.call(self,msg);
      },
      error:function(e,t){
        console.log(e,t);
      }
    });
  },
  getJSON:function(url,callback){
    var self = this;
    $.getJSON(url,function(res){
      callback.call(self,res);
    })
  }
}



 /* api: function (opt, storage, controls) {
    var self = this;
    return new Promise((reslove, reject) => {
        $.ajax({
        url: opt.url || "",
        data: opt.data || {},
        type: opt.method || "GET",
        datatype: "json",
        beforeSend: function(data) {
          if (opt.isAuth) {
            if(!Cookie.get("dinge")) {
              return reject({ errcode:100401, msg: "token为必传的参数，或token过期" });
            }
            data.setRequestHeader("authentication", Cookie.get("dinge"));
          }
          self.requestNum++;
          self.showLoading();
        },
        success: function (data) {
          reslove(data);
        },
        error: function(data) {
          let responseJSON;
          try {
            responseJSON = JSON.parse(data.response);
          } catch(e) {
            responseJSON = data.response;
          }
          reject(responseJSON);
        },
        complete: function(data) {
          let responseJSON;
          try {
            responseJSON = JSON.parse(data.response);
          } catch(e) {
            responseJSON = data.response;
          }
          let toSave = true;
          if (!storage) {
            toSave = false;
          }
          if(responseJSON.status == 1 && toSave) {
            var value;
            var local = JSON.parse(self.getStorage(storage));
            if(!controls) {
              value = responseJSON.data;
              if(Object.prototype.toString.call(value) == "[object Object]") {
                value = JSON.stringify(Object.assign({}, value, { timeStamp: Date.now() }));
              } else {
                value = JSON.stringify(Object.assign({}, {
                  timeStamp: Date.now(),
                  mes: value
                }));
              }
            }
            if(controls && controls.replace == true) {
              value = Object.assign({}, JSON.parse(self.getStorage(storage)), opt.data, {
                timeStamp: Date.now()
              });
              if (value.token) {
                delete value.token;
              }
              value = JSON.stringify(value);
            }
            if (controls && controls.delete) {
              if (opt.data.page == 1) {
                local.list = local.list.filter(function(v){
                  return v[ controls.delete ] != opt.data.id;
                });
                local.list.push(responseJSON.data);
                value = JSON.stringify(local);
              } else {
                value = JSON.stringify(local);
              }
            }
            self.setStorage(storage, value);
          }
          self.requestNum--;
          if (self.requestNum == 0) {
            self.closeLoading();
          }
        }
      });
  });*/
