let dataRole = [
  {
    "id": "r1",
    "name": "Quan tri vien",
    "description": "Toan quyen quan ly he thong",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r2",
    "name": "Bien tap vien",
    "description": "Quan ly noi dung va du lieu",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r3",
    "name": "Nguoi dung",
    "description": "Tai khoan nguoi dung thong thuong",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
];

let dataUser = [
  {
    "username": "nguyenvana",
    "password": "123456",
    "email": "vana@gmail.com",
    "fullName": "Nguyen Van A",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 15,
    "role": {
      "id": "r1",
      "name": "Quan tri vien",
      "description": "Toan quyen quan ly he thong"
    },
    "creationAt": "2026-03-04T08:10:00.000Z",
    "updatedAt": "2026-03-04T08:10:00.000Z"
  },
  {
    "username": "tranthib",
    "password": "123456",
    "email": "thib@gmail.com",
    "fullName": "Tran Thi B",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 7,
    "role": {
      "id": "r2",
      "name": "Bien tap vien",
      "description": "Quan ly noi dung va du lieu"
    },
    "creationAt": "2026-03-04T08:11:00.000Z",
    "updatedAt": "2026-03-04T08:11:00.000Z"
  },
  {
    "username": "levanc",
    "password": "123456",
    "email": "vanc@gmail.com",
    "fullName": "Le Van C",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 3,
    "role": {
      "id": "r3",
      "name": "Nguoi dung",
      "description": "Tai khoan nguoi dung thong thuong"
    },
    "creationAt": "2026-03-04T08:12:00.000Z",
    "updatedAt": "2026-03-04T08:12:00.000Z"
  },
  {
    "username": "phamthid",
    "password": "123456",
    "email": "thid@gmail.com",
    "fullName": "Pham Thi D",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": {
      "id": "r3",
      "name": "Nguoi dung",
      "description": "Tai khoan nguoi dung thong thuong"
    },
    "creationAt": "2026-03-04T08:13:00.000Z",
    "updatedAt": "2026-03-04T08:13:00.000Z"
  },
  {
    "username": "hoanganh",
    "password": "123456",
    "email": "anh@gmail.com",
    "fullName": "Hoang Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 2,
    "role": {
      "id": "r3",
      "name": "Nguoi dung",
      "description": "Tai khoan nguoi dung thong thuong"
    },
    "creationAt": "2026-03-04T08:14:00.000Z",
    "updatedAt": "2026-03-04T08:14:00.000Z"
  },
  {
    "username": "dangminh",
    "password": "123456",
    "email": "minh@gmail.com",
    "fullName": "Dang Minh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 9,
    "role": {
      "id": "r2",
      "name": "Bien tap vien",
      "description": "Quan ly noi dung va du lieu"
    },
    "creationAt": "2026-03-04T08:15:00.000Z",
    "updatedAt": "2026-03-04T08:15:00.000Z"
  },
  {
    "username": "phamkhoa",
    "password": "123456",
    "email": "khoa@gmail.com",
    "fullName": "Pham Quoc Khoa",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 1,
    "role": {
      "id": "r3",
      "name": "Nguoi dung",
      "description": "Tai khoan nguoi dung thong thuong"
    },
    "creationAt": "2026-03-04T08:16:00.000Z",
    "updatedAt": "2026-03-04T08:16:00.000Z"
  },
  {
    "username": "truonglinh",
    "password": "123456",
    "email": "linh@gmail.com",
    "fullName": "Truong Linh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": {
      "id": "r3",
      "name": "Nguoi dung",
      "description": "Tai khoan nguoi dung thong thuong"
    },
    "creationAt": "2026-03-04T08:17:00.000Z",
    "updatedAt": "2026-03-04T08:17:00.000Z"
  },
  {
    "username": "doquang",
    "password": "123456",
    "email": "quang@gmail.com",
    "fullName": "Do Quang",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 4,
    "role": {
      "id": "r2",
      "name": "Bien tap vien",
      "description": "Quan ly noi dung va du lieu"
    },
    "creationAt": "2026-03-04T08:18:00.000Z",
    "updatedAt": "2026-03-04T08:18:00.000Z"
  },
  {
    "username": "ngocanh",
    "password": "123456",
    "email": "ngocanh@gmail.com",
    "fullName": "Ngoc Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 6,
    "role": {
      "id": "r1",
      "name": "Quan tri vien",
      "description": "Toan quyen quan ly he thong"
    },
    "creationAt": "2026-03-04T08:19:00.000Z",
    "updatedAt": "2026-03-04T08:19:00.000Z"
  }
];

module.exports = {
  dataRole: dataRole,
  dataUser: dataUser
};
