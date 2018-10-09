var exec = require('cordova/exec');
var cordova = require('cordova');

var QRScanreceiver = function(){
    this.data = null;
    cordova.addWindowEventHandler('getqrdata').onHasSubscribersChange = QRScanreceiver.onHasSubscribersChange;

}

QRScanreceiver.onHasSubscribersChange = function(){
    exec(qrscanreceiver._listen,qrscanreceiver._error,"qrscanreceiver","start",[]);
}

QRScanreceiver.prototype._listen = function(info){
    if(info){
        cordova.fireWindowEvent('getqrdata',info);
        qrscanreceiver.data = info.data;
    }
}

QRScanreceiver.prototype._error = function(e){
    console.log('插件初始化错误，详情: ' + e);
}

var qrscanreceiver = QRScanreceiver();

module.exports = qrscanreceiver;