---
sidebar_position: 3
---

# FAQ

Frequently asked questions and basic How-to guides.

## Error: The specified module could not be found.

How to fix the following the problem:
![image](/img/API-missing-module.png)

Head to the `...\API-server\backend\node_modules\@tensorflow\tfjs-node\lib` folder and copy the .dll file from folder `napi-v9` to `napi-v8`.