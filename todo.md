1. 数据库修改
  - metrics_history删除ram字段，前端修改采用ram_used/ram_total计算ram占用率,保留两位小数百分比。
  - metrics_history删除disk字段，前端应该已修改。
  - install.sh install-alpine.sh install-openwrt.sh去掉这两个多余字段上报
  - schema.js, updateDatabase.js去掉这两个多余字段
  - metrics_history，country改成region字段，不需要数据迁移，直接删除和新增。数据上报，入库到region字段（兼容上报country和region），但返回一定要是region字段。
  - 注意不要引入bug
2. 加入一个版本号字段 -- 后期逻辑再理一下
3. 前端支持多apiBase, 并且同时调用并输出，如果多个，/admin前端关闭入口
