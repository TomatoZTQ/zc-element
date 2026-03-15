import { makeInstaller } from '@zc-element/utils';
import components from './components';
import '@zc-element/theme/index.css'

const installer = makeInstaller(components);

export * from "@zc-element/components";
export default installer;