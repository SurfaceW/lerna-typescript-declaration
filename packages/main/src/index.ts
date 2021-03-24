import { DEMO_SDK } from 'arno-test-sdk';
import { extensionImpl } from 'arno-test-extension';

export default class MainApp {
  run() {
    console.log(extensionImpl.sayHello(), DEMO_SDK.addOne(22));
  }
}
