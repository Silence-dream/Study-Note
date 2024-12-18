define({ "api": [
  {
    "type": "post",
    "url": "/admin_login/",
    "title": "用户登录",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account",
            "description": "<p>账号（手机号）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>详细信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码（1：登录成功，2：密码或账号错误，3：参数验证失败）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "is_admin",
            "description": "<p>（身份标识：-1普通注册，0球员，1及以上，代表创建的球队个数）.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功时返回:",
          "content": "{\n\"msg\": \"登录成功\",\n\"status\": 1,\n\"data\": {\n\"user_id\": 4,\n\"is_admin\": 2\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码（1：登录成功，2：密码或账号错误，3：参数验证失败）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误时返回:",
          "content": "{\n code:500,\n msg:\"错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "public/api/app.js",
    "groupTitle": "admin",
    "name": "PostAdmin_login"
  },
  {
    "type": "post",
    "url": "/time/",
    "title": "时间",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account",
            "description": "<p>账号（手机号）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>详细信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码（1：登录成功，2：密码或账号错误，3：参数验证失  败）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "is_admin",
            "description": "<p>（身份标识：-1普通注册，0球员，1及以上，代表创建的球队个数）.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功时返回:",
          "content": "{\n\"msg\": \"登录成功\",\n\"status\": 1,\n\"data\": {\n\"user_id\": 4,\n\"is_admin\": 2\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "public/api/ex.js",
    "groupTitle": "admin",
    "name": "PostTime"
  },
  {
    "type": "post",
    "url": "/ss/",
    "title": "时间",
    "group": "员工信息接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account",
            "description": "<p>账号（手机号）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>详细信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码（1：登录成功，2：密码或账号错误，3：参数验证失  败）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "is_admin",
            "description": "<p>（身份标识：-1普通注册，0球员，1及以上，代表创建的球队个数）.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功时返回:",
          "content": "{\n\"msg\": \"登录成功\",\n\"status\": 1,\n\"data\": {\n\"user_id\": 4,\n\"is_admin\": 2\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "public/api/t.js",
    "groupTitle": "员工信息接口",
    "name": "PostSs"
  }
] });
