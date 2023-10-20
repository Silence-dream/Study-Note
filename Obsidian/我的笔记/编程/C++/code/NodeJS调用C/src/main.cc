#include <napi.h>
Napi::String Hello(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  return Napi::String::New(env, "world"); // 返回一个js字符串
}
Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  // 公开hello方法
  exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, Hello));
  return exports;
}
NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
