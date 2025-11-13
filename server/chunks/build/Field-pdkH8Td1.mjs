import { useSlots, computed, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-Dymlno82.mjs';
import { r as renderSlot } from './slot-DBHCVgJm.mjs';
import { Primitive } from 'reka-ui';
import { u as useAppConfig, t as tv } from './server.mjs';
import './node-Ta6SvKQA.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'minimark/hast';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import 'reka-ui/namespaced';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "my-5",
    "container": "flex items-center gap-3 font-mono text-sm",
    "name": "font-semibold text-primary",
    "wrapper": "flex-1 flex items-center gap-1.5 text-xs",
    "required": "rounded-sm bg-error/10 text-error px-1.5 py-0.5",
    "type": "rounded-sm bg-elevated text-toned px-1.5 py-0.5",
    "description": "mt-3 text-muted text-sm [&_code]:text-xs/4"
  }
};
const _sfc_main = {
  __name: "ProseField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    description: { type: String, required: false },
    required: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.field || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            if (__props.name) {
              _push2(`<span class="${ssrRenderClass(ui.value.name({ class: props.ui?.name }))}"${_scopeId}>${ssrInterpolate(__props.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.type || __props.required) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.type) {
                _push2(`<span class="${ssrRenderClass(ui.value.type({ class: props.ui?.type }))}"${_scopeId}>${ssrInterpolate(__props.type)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.required) {
                _push2(`<span class="${ssrRenderClass(ui.value.required({ class: props.ui?.required }))}"${_scopeId}> required </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!!slots.default || __props.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: props.ui?.container })
              }, [
                __props.name ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ui.value.name({ class: props.ui?.name })
                }, toDisplayString(__props.name), 3)) : createCommentVNode("", true),
                __props.type || __props.required ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                }, [
                  __props.type ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.type({ class: props.ui?.type })
                  }, toDisplayString(__props.type), 3)) : createCommentVNode("", true),
                  __props.required ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.required({ class: props.ui?.required })
                  }, " required ", 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ], 2),
              !!slots.default || __props.description ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.description({ class: props.ui?.description })
              }, [
                renderSlot(_ctx.$slots, "default", { mdcUnwrap: "p" }, () => [
                  createTextVNode(toDisplayString(__props.description), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Field-pdkH8Td1.mjs.map
