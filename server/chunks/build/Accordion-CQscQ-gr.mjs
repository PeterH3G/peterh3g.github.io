import { useSlots, computed, ref, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, renderSlot, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useAppConfig, t as tv, j as transformUI, b as _sfc_main$u, i as get } from './server.mjs';
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
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

const theme$1 = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: [String, Object], required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.accordion || {} })({
      disabled: props.disabled
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        type: __props.type,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: item.value || String(index),
                disabled: item.disabled,
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$u, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: [props.ui?.label, item.ui?.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  _push5(ssrRenderComponent(_sfc_main$u, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$u, {
                                      key: 0,
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ]),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    createVNode(_sfc_main$u, {
                                      name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                      class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                    }, null, 8, ["name", "class"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$u, {
                                    key: 0,
                                    name: item.icon,
                                    class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ]),
                                unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                                }, [
                                  renderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  createVNode(_sfc_main$u, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => {
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: [props.ui?.body, item.ui?.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                createVNode("div", {
                                  class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    createTextVNode(toDisplayString(item.content), 1)
                                  ])
                                ], 2)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "leading", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                item.icon ? (openBlock(), createBlock(_sfc_main$u, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ]),
                              unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                              }, [
                                renderSlot(_ctx.$slots, "default", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "trailing", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                createVNode(_sfc_main$u, {
                                  name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                  class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                }, null, 8, ["name", "class"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => [
                            createVNode("div", {
                              class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                createTextVNode(toDisplayString(item.content), 1)
                              ])
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: item.value || String(index),
                  disabled: item.disabled,
                  class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
                }, {
                  default: withCtx(({ open }) => [
                    createVNode(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AccordionTrigger), {
                          class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$u, {
                                key: 0,
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index,
                                open
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              createVNode(_sfc_main$u, {
                                name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                              }, null, 8, ["name", "class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 0,
                      class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          open,
                          ui: ui.value
                        }, () => [
                          createVNode("div", {
                            class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                          }, [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              createTextVNode(toDisplayString(item.content), 1)
                            ])
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "my-5",
    "trigger": "text-base"
  }
};
const _sfc_main = {
  __name: "ProseAccordion",
  __ssrInlineRender: true,
  props: {
    type: { type: String, required: false, default: "multiple" },
    class: { type: null, required: false },
    ui: { type: void 0, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.accordion || {} }));
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
        index,
        label: slot.props?.label || `${index}`,
        description: slot.props?.description,
        icon: slot.props?.icon,
        component: slot
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        type: __props.type,
        items: items.value,
        "unmount-on-hide": false,
        class: props.class,
        ui: unref(transformUI)(ui.value(), props.ui)
      }, _attrs), {
        content: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.component), null, null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(item.component)))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Accordion-CQscQ-gr.mjs.map
