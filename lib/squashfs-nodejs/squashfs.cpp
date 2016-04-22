#include <nan.h>
extern "C" {
 #include <unsquashfs.h>
}

void squashfs(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::New("Not implemented yet").ToLocalChecked());
}

void unsquashfs(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  if (info.Length() < 2) {
  Nan::ThrowTypeError("Wrong number of arguments");
  return;
}

 if (!info[0]->IsString() || !info[1]->IsString()) {
   Nan::ThrowTypeError("Wrong arguments");
   return;
 }

  std::string file = std::string(*(v8::String::Utf8Value) info[0]->ToString());
  std::string dest = std::string(*(v8::String::Utf8Value) info[1]->ToString());

  int err = toDir_unsquashfs((char*)file.c_str(), (char*)dest.c_str());

  info.GetReturnValue().Set(Nan::New(err));
}

void Init(v8::Local<v8::Object> exports) {
  exports->Set(Nan::New("squashfs").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(squashfs)->GetFunction());
  exports->Set(Nan::New("unsquashfs").ToLocalChecked(),
              Nan::New<v8::FunctionTemplate>(unsquashfs)->GetFunction());
}

NODE_MODULE(squashfs, Init)
