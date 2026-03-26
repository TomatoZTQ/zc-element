import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md"}');
const _sfc_main = { name: "components/collapse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_zc_collapse = resolveComponent("zc-collapse");
  const _component_zc_collapse_item = resolveComponent("zc-collapse-item");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="collapse" tabindex="-1">Collapse <a class="header-anchor" href="#collapse" aria-label="Permalink to &quot;Collapse&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_zc_collapse, { "model-value": ["a"] }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_zc_collapse_item, {
          name: "a",
          title: "Title A"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}>Content A</div>`);
            } else {
              return [
                createVNode("div", null, "Content A")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_zc_collapse_item, {
          name: "b",
          title: "Title B"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}>Content B</div>`);
            } else {
              return [
                createVNode("div", null, "Content B")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_zc_collapse_item, {
            name: "a",
            title: "Title A"
          }, {
            default: withCtx(() => [
              createVNode("div", null, "Content A")
            ]),
            _: 1
          }),
          createVNode(_component_zc_collapse_item, {
            name: "b",
            title: "Title B"
          }, {
            default: withCtx(() => [
              createVNode("div", null, "Content B")
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/collapse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  collapse as default
};
