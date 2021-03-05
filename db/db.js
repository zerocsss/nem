var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/nem'

// 查
exports.findData = (tableName, collectonName, wherestr=null, cb) => {
	MongoClient.connect(url, {useUnifiedTopology: true}).then(client => {
		var db = client.db(tableName);
		return db.collection(collectonName).find({wherestr}).toArray(function(err, result) {
			if(err) throw err;

      console.log(Date.now(), 'findData success');
			cb && cb(result);
      client.close();
		});
	}).catch(err =>{
		console.log('数据库连接失败', err);
	})
}

// 删
exports.deleteData = (tableName, collectonName, wherestr=null, cb) => {
  MongoClient.connect(url, {useUnifiedTopology: true}).then(client => {
    var db = client.db(tableName);
    var collection = db.collection(collectonName);
    collection.deleteOne(wherestr, function(err, result) {
      if(err) throw err;

      console.log(Date.now(), 'delete success');
      cb && cb(result);
      client.close();
    });
  }).catch(err =>{
    console.log('数据库连接失败', err);
  })
}

// 增
exports.addData = (tableName, collectonName, wherestr=null, cb) => {
  MongoClient.connect(url, {useUnifiedTopology: true}).then(client => {
    var db = client.db(tableName);
    var collection = db.collection(collectonName);
    collection.insertOne(wherestr, function(err, result) {
      if(err) throw err;

      console.log(Date.now(), 'add success');
      cb && cb(result);
      client.close();
    });
  }).catch(err =>{
    console.log('数据库连接失败', err);
  })
}

// 改
exports.updateData = (tableName, collectonName, wherestr=null, updateStr=null, cb) => {
  MongoClient.connect(url, {useUnifiedTopology: true}).then(client => {
    var db = client.db(tableName);
    var collection = db.collection(collectonName);
    collection.updateMany(wherestr, updateStr, function(err, result) {
      if(err) throw err;

      console.log(Date.now(), 'update success');
      cb && cb(result);
      client.close();
    });
  }).catch(err =>{
    console.log('数据库连接失败', err);
  })
}

