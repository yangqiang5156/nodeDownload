var request = require('request');
var fs = require('fs');

/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
function downloadFile(uri,filename,callback){
    var stream = fs.createWriteStream(filename);
    request(uri,{ timeout:10000}).on('error', (error) => {
		console.log('获取文件失败', uri);
	}).pipe(stream).on('close', callback);
 }

var arr = []
for(var i=0;i<77;i++){
	arr.push(i);
}
console.log(arr)
//http://img1.gtimg.com/19/1947/194721/19472182_980x1200_0.png
// var flist = [100,101,102,103,104,200,201,202,203,204,205,206,207,208,209,210,211,212,213,300,301,302,303,304,304,305,306,306,307,307,308,309,310,10,311,311,312,313,400,401,401,402,402,403,404,405,406,407,500,501,502,503,504,506,507,508,900,901,999];

//http://yxs-app.oss-cn-beijing.aliyuncs.com/lishanyou_17_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20170624-151143_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20180125-170319_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20180127-164042_54.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20180202-111641_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20171215-202103_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20171014-225955_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/20170909-120409_0.jpg
// http://yxs-app.oss-cn-beijing.aliyuncs.com/wujun-0.jpg    吴军未来世界
function forDownload(){	

	for (var i=0; i<arr.length; i++) {
		//var fileUrl  = 'http://img1.gtimg.com/19/1947/194721/194721' + arr[i] + '_980x1200_0.png';
		var fileUrl  = 'http://yxs-app.oss-cn-beijing.aliyuncs.com/wujun-' + arr[i] + '.jpg';
		var filename = '吴军未来世界/' +'wujun-'+ arr[i] + '.jpg';
		console.log('第'+i+'张');
		downloadFile(fileUrl, filename, function() {
		//console.log('第'+i+'张');
		})
	}
}

var arrErr = [
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_73.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_82.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_71.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_12.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_20.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_51.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_43.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_84.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_59.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_4.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_8.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_5.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_85.jpg',
'http://yxs-app.oss-cn-beijing.aliyuncs.com/20170924-104428_34.jpg'
]

function forErrorDown(){
	for (var i=0; i<arrErr.length; i++) {
		//var fileUrl  = 'http://img1.gtimg.com/19/1947/194721/194721' + arr[i] + '_980x1200_0.png';
		var fileUrl  =  arrErr[i] ;
		var filename = 'errFile/' + arrErr[i].split('/')[3];
		console.log('第'+i+'张');
		console.log(filename)
		downloadFile(fileUrl, filename, function() {
		//console.log('第'+i+'张');
		})
	}

}

//第一次下载
setTimeout(forDownload,5000);

//第二次重新下载失败的链接arrErr
//forErrorDown();