## CodingWell

Created on Wed Dec 13 2017 16:37:03 GMT+0800

Prepare for
Develop a CMS based on Node

```shell
$ git clone https://github.com/Coding-Well/CodingWell.git

$ cd CodingWell

$ npm i

$ yarn start

```
## 目录结构
```
CodingWell/
   |
   ├──public/
   |
   ├──server/
   │   │
   │   │──index.js               * 后端 node 服务启动文件
   │
   ├──src/
   │   │
   │   │──Auth/
   │   │   │
   │   │   └──Login.js           * 登录页文件
   |   │
   │   │──static/                * 前端所需静态资源目录
   │   │   │
   │   │   │──bg.gif
   │   │   │
   │   │   └──welcome.css
   |   │
   │   │──Welcome/
   │   │   │
   │   │   └──Welcome.js         * 欢迎页
   |   │
   │   │──index.css
   |   │
   │   │──index.js
   |   │
   │   │──registerServiceWorker.js
   |   │
   │   └──Routes.js
   │
   └──package.json
```

Add NodeLayer modules

Add Login page

Add middleware
