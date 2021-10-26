import request from "@/utils/request";
import AxiosMockAdapter from "axios-mock-adapter";

export function getProducts(data, isTest) {
  const apiUrl = "/api/Product";

  // 用來模擬API的資料，實際上線不會執行這段
  const mock = new AxiosMockAdapter(request);

  //模擬API回傳資料
  mock.onGet(apiUrl).reply(200, {
    "status": "success",
    "data": [
        {
            "productID": 2,
            "productName": "P-3",
            "desc": "P-3"
        },
        {
            "productID": 3,
            "productName": "冰機",
            "desc": "節能"
        },
        {
            "productID": 4,
            "productName": "PHM",
            "desc": "健康管理系統"
        },
        {
            "productID": 5,
            "productName": "P-Update-1008",
            "desc": "P-Update-1008"
        },
        {
            "productID": 7,
            "productName": "P-New",
            "desc": "P-New"
        },
        {
            "productID": 8,
            "productName": null,
            "desc": "P-New"
        },
        {
            "productID": 9,
            "productName": null,
            "desc": "P-New"
        },
        {
            "productID": 10,
            "productName": null,
            "desc": "P-New"
        },
        {
            "productID": 11,
            "productName": null,
            "desc": "P-New"
        }
    ],
    "message": null
});

  //如果不是測試模式就釋放mock，就會實際去呼叫API
  if (!isTest) {
    mock.restore();
  }

  return request({
    url: apiUrl,
    method: "post",
    data,
  });
}
