var express = require('express');
var router = express.Router();
let { dataRole, dataUser } = require('../utils/identityData');

function getRoleById(id) {
  return dataRole.find(function (item) {
    return item.id === id && !item.isDeleted;
  });
}

router.get('/', function (req, res) {
  let result = dataUser.filter(function (item) {
    return !item.isDeleted;
  });
  res.send(result);
});

router.get('/:username', function (req, res) {
  let username = req.params.username;
  let user = dataUser.find(function (item) {
    return item.username === username && !item.isDeleted;
  });

  if (!user) {
    res.status(404).send({ message: 'USERNAME NOT FOUND' });
    return;
  }

  res.send(user);
});

router.post('/', function (req, res) {
  let existed = dataUser.find(function (item) {
    return item.username === req.body.username && !item.isDeleted;
  });

  if (existed) {
    res.status(400).send({ message: 'USERNAME ALREADY EXISTS' });
    return;
  }

  let role = getRoleById(req.body.roleId);
  if (!role) {
    res.status(404).send({ message: 'ID ROLE NOT FOUND' });
    return;
  }

  let now = new Date();
  let newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName,
    avatarUrl: req.body.avatarUrl,
    status: req.body.status,
    loginCount: req.body.loginCount || 0,
    role: {
      id: role.id,
      name: role.name,
      description: role.description
    },
    creationAt: now,
    updatedAt: now
  };

  dataUser.push(newUser);
  res.send(newUser);
});

router.put('/:username', function (req, res) {
  let username = req.params.username;
  let user = dataUser.find(function (item) {
    return item.username === username && !item.isDeleted;
  });

  if (!user) {
    res.status(404).send({ message: 'USERNAME NOT FOUND' });
    return;
  }

  let keys = Object.keys(req.body);
  for (const key of keys) {
    if (key === 'roleId') {
      continue;
    }
    if (user[key] !== undefined) {
      user[key] = req.body[key];
    }
  }

  if (req.body.roleId !== undefined) {
    let role = getRoleById(req.body.roleId);
    if (!role) {
      res.status(404).send({ message: 'ID ROLE NOT FOUND' });
      return;
    }

    user.role = {
      id: role.id,
      name: role.name,
      description: role.description
    };
  }

  user.updatedAt = new Date();
  res.send(user);
});

router.delete('/:username', function (req, res) {
  let username = req.params.username;
  let user = dataUser.find(function (item) {
    return item.username === username && !item.isDeleted;
  });

  if (!user) {
    res.status(404).send({ message: 'USERNAME NOT FOUND' });
    return;
  }

  user.isDeleted = true;
  user.updatedAt = new Date();
  res.send(user);
});

module.exports = router;
