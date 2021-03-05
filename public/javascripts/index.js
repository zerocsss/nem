// 删除用户
function deleteUser() {
  console.log('deleteUser');
  fetch('http://192.168.217.250:3000/deleteUser')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log('res', myJson);
    window.location.reload();
  }).catch(function(err) {
    console.log('err', err);
  });
};

// 添加用户
function addUser() {
  console.log('addUser');
  fetch('http://192.168.217.250:3000/addUser')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log('res', myJson);
  }).catch(function(err) {
    console.log('err', err);
  });
};

// 添加用户
function updateUser() {
  console.log('updateUser');
  fetch('http://192.168.217.250:3000/updateUser')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log('res', myJson);
  }).catch(function(err) {
    console.log('err', err);
  });
};

