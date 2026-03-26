import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}');
const _sfc_main = { name: "components/button.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_zc_button = resolveComponent("zc-button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="button" tabindex="-1">Button <a class="header-anchor" href="#button" aria-label="Permalink to &quot;Button&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_zc_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Default`);
      } else {
        return [
          createTextVNode("Default")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_zc_button, { type: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Primary`);
      } else {
        return [
          createTextVNode("Primary")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_zc_button, { type: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Success`);
      } else {
        return [
          createTextVNode("Success")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_zc_button, { type: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Warning`);
      } else {
        return [
          createTextVNode("Warning")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_zc_button, { type: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Info`);
      } else {
        return [
          createTextVNode("Info")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="states" tabindex="-1">States <a class="header-anchor" href="#states" aria-label="Permalink to &quot;States&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_zc_button, {
    plain: "",
    type: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Plain`);
      } else {
        return [
          createTextVNode("Plain")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_zc_button, {
    round: "",
    type: "success"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Round`);
      } else {
        return [
          createTextVNode("Round")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_zc_button, {
    circle: "",
    type: "warning",
    icon: "star"
  }, null, _parent));
  _push(ssrRenderComponent(_component_zc_button, {
    loading: "",
    type: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Loading`);
      } else {
        return [
          createTextVNode("Loading")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  button as default
};
