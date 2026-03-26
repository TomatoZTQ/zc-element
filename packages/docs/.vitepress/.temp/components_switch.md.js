import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}');
const _sfc_main = { name: "components/switch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_zc_switch = resolveComponent("zc-switch");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="switch" tabindex="-1">Switch <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;Switch&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_zc_switch, { "model-value": true }, null, _parent));
  _push(ssrRenderComponent(_component_zc_switch, { "model-value": false }, null, _parent));
  _push(`<h2 id="with-text" tabindex="-1">With Text <a class="header-anchor" href="#with-text" aria-label="Permalink to &quot;With Text&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_zc_switch, {
    "model-value": true,
    "active-text": "ON",
    "inactive-text": "OFF"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/switch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _switch as default
};
