
import { Request, Headers } from 'undici';


if (typeof globalThis.Request === 'undefined') {
  globalThis.Request = Request;
}

if (typeof globalThis.Headers === 'undefined') {
  globalThis.Headers = Headers;
}

