import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Icon","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md"}');
const _sfc_main = { name: "components/icon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_zc_icon = resolveComponent("zc-icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;Icon&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_zc_icon, { icon: "user" }, null, _parent));
  _push(ssrRenderComponent(_component_zc_icon, { icon: "star" }, null, _parent));
  _push(ssrRenderComponent(_component_zc_icon, { icon: "heart" }, null, _parent));
  _push(ssrRenderComponent(_component_zc_icon, {
    icon: "circle-info",
    type: "info"
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_icon, {
    icon: "check-circle",
    type: "success"
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_icon, {
    icon: "circle-exclamation",
    type: "warning"
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_icon, {
    icon: "circle-xmark",
    type: "danger"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  icon as default
};
