import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}');
const _sfc_main = { name: "components/input.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_zc_input = resolveComponent("zc-input");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_zc_input, { placeholder: "Please input" }, null, _parent));
  _push(`<h2 id="clearable" tabindex="-1">Clearable <a class="header-anchor" href="#clearable" aria-label="Permalink to &quot;Clearable&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_zc_input, {
    "model-value": "hello",
    clearable: "",
    placeholder: "Clear me"
  }, null, _parent));
  _push(`<h2 id="password" tabindex="-1">Password <a class="header-anchor" href="#password" aria-label="Permalink to &quot;Password&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_zc_input, {
    type: "password",
    "model-value": "123456",
    "show-password": ""
  }, null, _parent));
  _push(`<h2 id="textarea" tabindex="-1">Textarea <a class="header-anchor" href="#textarea" aria-label="Permalink to &quot;Textarea&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_zc_input, {
    type: "textarea",
    "model-value": "multi line text"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/input.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const input = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  input as default
};
