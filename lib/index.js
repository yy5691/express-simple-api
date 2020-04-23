import Router from '../routes/index'
import '../db/config'
import configs from '../utils/config'
const express = require('express');
const app = express();

// 挂载路由
Router(app);
// 配置
configs(app);


app.listen(3000, () => {
    console.log(`server is running at http://localhost:3000`)
})