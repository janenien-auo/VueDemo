import request from "@/utils/request";
import AxiosMockAdapter from "axios-mock-adapter";

export function login(data, isTest) {
  const apiUrl = "/xxxx/login";

  // 用來模擬API的資料，實際上線不會執行這段
  const mock = new AxiosMockAdapter(request);

  //模擬API回傳資料
  mock.onPost(apiUrl).reply(200, {
    code: 200,
    status: "OK",
    errorCode: 0,
    description: "",
    data: {
      status: "Pass",
      errorMsg: "UAC-000: 通過(tcuac01)",
      authorityKey: "1O0906301F169837367232",
      userInfo: {
        userId: "janenienares",
        userName: "粘雅真",
        userEmail: "Jane.Nien@auo.com",
        userDeptID: "ADTEC2",
      },
    },
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
