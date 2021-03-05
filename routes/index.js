var express = require('express');
var router = express.Router();

const DB = require('../db/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	try{
		DB.findData('nem', 'user', null, function(result) {
      console.log('result', result);
      let userData = result;
      console.log('userData', typeof userData, userData.length, userData);

	  	res.render('index', { title: 'Express', user: {name: 'zhangsan', age: 20, gender: 'nv'}, userData: userData});
		});
	} catch(err) {
		console.log(err);
	}
});
/* GET list page. */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Express', user: {name: 'zhangsan', age: 20, gender: 'nv'} });
});



/* api */
/* 查询数据 */
router.get('/queryUser', function(req, res, next) {
  try{
    DB.findData('nem', 'user', null, function(result) {
      console.log('result', JSON.stringify(result));
      res.send({
        code: 1,
        data: {
          userData: result
        },
        message: 'success',
      });
    });
  } catch(err) {
    console.log(err);
  }
});

/* 删除数据 */
router.get('/deleteUser', function(req, res, next) {
  try{
    DB.deleteData('nem', 'user', {user_name: 'ccc'}, function(result) {
      console.log('result', JSON.stringify(result));
      res.send({
        code: 1,
        message: 'success',
      });
    });
  } catch(err) {
    console.log(err);
  }
});

/* 添加数据 */
router.get('/addUser', function(req, res, next) {
  try{
    DB.addData('nem', 'user', {user_id: '3', user_name: 'ccc', user_pwd: 'ccc' }, function(result) {
      DB.findData('nem', 'user', null, function(result) {
        console.log('result', result);
        res.send({
          code: 1,
          data: {
            userData: result
          },
          message: 'success',
        });
      });
    });
  } catch(err) {
    console.log(err);
  }
});

/* 修改数据 */
router.get('/updateUser', function(req, res, next) {
  try{
    DB.updateData('nem', 'user', {user_id: '3'}, {$set: {user_pwd: '333'}},function(result) {
      console.log('result', JSON.stringify(result));
      res.send({
        code: 1,
        message: 'success',
      });
    });
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;
