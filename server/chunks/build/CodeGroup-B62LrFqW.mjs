import { mergeModels, useSlots, useModel, computed, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui';
import { u as useAppConfig, t as tv } from './server.mjs';
import _sfc_main$1 from './CodeIcon-CmEInbpT.mjs';
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
    "root": "relative group *:not-first:!my-0 *:not-first:!static my-5",
    "list": "relative flex items-center gap-1 border border-muted bg-default border-b-0 rounded-t-md overflow-x-auto p-2",
    "indicator": "absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-elevated rounded-md shadow-xs",
    "trigger": [
      "relative inline-flex items-center gap-1.5 text-default data-[state=active]:text-highlighted hover:bg-elevated/50 px-2 py-1.5 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0",
    "triggerLabel": "truncate"
  }
};
const _sfc_main = {
  __name: "ProseCodeGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    defaultValue: { type: String, required: false, default: "0" },
    sync: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const model = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.codeGroup || {} })());
    const rerenderCount = ref(1);
    const items = computed(() => {
      rerenderCount.value;
      return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
    });
    function transformSlot(slot, index) {
      if (typeof slot.type === "symbol") {
        return slot.children?.map(transformSlot);
      }
      return {
        label: slot.props?.filename || slot.props?.label || `${index}`,
        icon: slot.props?.icon,
        component: slot
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "default-value": __props.defaultValue,
        "unmount-on-hide": false,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              class: ui.value.list({ class: props.ui?.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(items.value, (item, index) => {
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: String(index),
                      class: ui.value.trigger({ class: props.ui?.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="${ssrRenderClass(ui.value.triggerLabel({ class: props.ui?.triggerLabel }))}"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              icon: item.icon,
                              filename: item.label,
                              class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
                            }, null, 8, ["icon", "filename", "class"]),
                            createVNode("span", {
                              class: ui.value.triggerLabel({ class: props.ui?.triggerLabel })
                            }, toDisplayString(item.label), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: String(index),
                        class: ui.value.trigger({ class: props.ui?.trigger })
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            icon: item.icon,
                            filename: item.label,
                            class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
                          }, null, 8, ["icon", "filename", "class"]),
                          createVNode("span", {
                            class: ui.value.triggerLabel({ class: props.ui?.triggerLabel })
                          }, toDisplayString(item.label), 3)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(items.value, (item, index) => {
              _push2(ssrRenderComponent(unref(TabsContent), {
                key: index,
                value: String(index),
                "as-child": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                        "hide-header": "",
                        tabindex: "-1"
                      }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(unref(TabsList), {
                class: ui.value.list({ class: props.ui?.list })
              }, {
                default: withCtx(() => [
                  createVNode(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, null, 8, ["class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                    return openBlock(), createBlock(unref(TabsTrigger), {
                      key: index,
                      value: String(index),
                      class: ui.value.trigger({ class: props.ui?.trigger })
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          icon: item.icon,
                          filename: item.label,
                          class: ui.value.triggerIcon({ class: props.ui?.triggerIcon })
                        }, null, 8, ["icon", "filename", "class"]),
                        createVNode("span", {
                          class: ui.value.triggerLabel({ class: props.ui?.triggerLabel })
                        }, toDisplayString(item.label), 3)
                      ]),
                      _: 2
                    }, 1032, ["value", "class"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["class"]),
              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: String(index),
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.component), {
                      "hide-header": "",
                      tabindex: "-1"
                    }))
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeGroup-B62LrFqW.mjs.map
