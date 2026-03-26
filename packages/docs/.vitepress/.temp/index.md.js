import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"zc-element","text":"高仿 ElementPlus 组件库","tagline":"基于 Vue3 + TypeScript 开发","actions":[{"theme":"brand","text":"快速开始","link":"/get-started"},{"theme":"alt","text":"查看组件","link":"/components/button"}]},"features":[{"title":"基础组件","details":"当前已支持 Button 组件。"},{"title":"表单组件","details":"当前已支持 Input、Switch 组件。"},{"title":"反馈与展示","details":"当前已支持 Alert、Collapse 组件。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
