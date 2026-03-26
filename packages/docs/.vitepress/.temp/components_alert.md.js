import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alert","description":"","frontmatter":{},"headers":[],"relativePath":"components/alert.md","filePath":"components/alert.md"}');
const _sfc_main = { name: "components/alert.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_zc_alert = resolveComponent("zc-alert");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alert" tabindex="-1">Alert <a class="header-anchor" href="#alert" aria-label="Permalink to &quot;Alert&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_zc_alert, {
    title: "Success Alert",
    type: "success",
    "show-icon": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_alert, {
    title: "Warning Alert",
    type: "warning",
    "show-icon": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_alert, {
    title: "Info Alert",
    type: "info",
    "show-icon": ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_alert, {
    title: "Danger Alert",
    type: "danger",
    "show-icon": ""
  }, null, _parent));
  _push(`<h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_zc_alert, {
    title: "With Description",
    description: "This is an alert with additional details.",
    type: "info",
    "show-icon": ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/alert.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alert as default
};
