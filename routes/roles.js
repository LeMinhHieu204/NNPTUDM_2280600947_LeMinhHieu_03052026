var express = require('express');
var router = express.Router();
let { dataRole, dataUser } = require('../utils/identityData');

function getNextRoleId() {
  let ids = dataRole.map(function (item) {
    return Number.parseInt(String(item.id).replace('r', ''), 10);
  }).filter(function (n) {
    return !Number.isNaN(n);
  });

  let maxId = ids.length ? Math.max(...ids) : 0;
  return 'r' + (maxId + 1);
}

router.get('/', function (req, res) {
  let result = dataRole.filter(function (item) {
    return !item.isDeleted;
  });
  res.send(result);
});

router.get('/:id/users', function (req, res) {
  let id = req.params.id;
  let role = dataRole.find(function (item) {
    return item.id === id && !item.isDeleted;
  });

  if (!role) {
    res.status(404).send({ message: 'ID ROLE NOT FOUND' });
    return;
  }

  let usersInRole = dataUser.filter(function (user) {
    return !user.isDeleted && user.role && user.role.id === id;
  });

  res.send(usersInRole);
});

router.get('/:id', function (req, res) {
  let id = req.params.id;
  let result = dataRole.find(function (item) {
    return item.id === id && !item.isDeleted;
  });

  if (!result) {
    res.status(404).send({ message: 'ID ROLE NOT FOUND' });
    return;
  }

  res.send(result);
});

router.post('/', function (req, res) {
  let now = new Date();
  let newRole = {
    id: getNextRoleId(),
    name: req.body.name,
    description: req.body.description,
    creationAt: now,
    updatedAt: now
  };

  dataRole.push(newRole);
  res.send(newRole);
});

router.put('/:id', function (req, res) {
  let id = req.params.id;
  let role = dataRole.find(function (item) {
    return item.id === id && !item.isDeleted;
  });

  if (!role) {
    res.status(404).send({ message: 'ID ROLE NOT FOUND' });
    return;
  }

  let keys = Object.keys(req.body);
  for (const key of keys) {
    if (role[key] !== undefined) {
      role[key] = req.body[key];
    }
  }
  role.updatedAt = new Date();

  dataUser.forEach(function (user) {
    if (!user.isDeleted && user.role && user.role.id === id) {
      user.role = {
        id: role.id,
        name: role.name,
        description: role.description
      };
      user.updatedAt = new Date();
    }
  });

  res.send(role);
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  let role = dataRole.find(function (item) {
    return item.id === id && !item.isDeleted;
  });

  if (!role) {
    res.status(404).send({ message: 'ID ROLE NOT FOUND' });
    return;
  }

  role.isDeleted = true;
  role.updatedAt = new Date();
  res.send(role);
});

module.exports = router;
