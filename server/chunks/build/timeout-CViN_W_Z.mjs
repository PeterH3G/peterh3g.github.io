import { h as _export_sfc, r as __nuxt_component_0, s as _sfc_main$d, l as _sfc_main$o, q as _sfc_main$5, v as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './Separator-DSBDknrJ.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import 'reka-ui';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UApp = __nuxt_component_0;
  const _component_UHeader = _sfc_main$d;
  const _component_UButton = _sfc_main$o;
  const _component_UMain = _sfc_main$5;
  const _component_UPageHero = _sfc_main$1;
  const _component_USeparator = _sfc_main$2;
  const _component_AppFooter = __nuxt_component_6;
  _push(ssrRenderComponent(_component_UApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UHeader, null, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UButton, {
                to: "/",
                avatar: { src: "/avatar.png" },
                label: "PeterH3G",
                size: "md",
                color: "neutral",
                variant: "outline"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UButton, {
                  to: "/",
                  avatar: { src: "/avatar.png" },
                  label: "PeterH3G",
                  size: "md",
                  color: "neutral",
                  variant: "outline"
                })
              ];
            }
          }),
          right: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UButton, {
                to: "/",
                "leading-icon": "i-lucide-github",
                "trailing-icon": "i-lucide-external-link",
                label: "My GitHub Profile",
                size: "md",
                color: "neutral",
                variant: "link"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UButton, {
                  to: "/",
                  "leading-icon": "i-lucide-github",
                  "trailing-icon": "i-lucide-external-link",
                  label: "My GitHub Profile",
                  size: "md",
                  color: "neutral",
                  variant: "link"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UMain, { class: "flex flex-col justify-center items-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_UPageHero, {
                title: "Hello Universe!",
                class: "bg-accented/80 w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_UPageHero, {
                  title: "Hello Universe!",
                  class: "bg-accented/80 w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_USeparator, {
          avatar: {
            src: "/avatar.png"
          },
          type: "dashed",
          class: "h-px"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UHeader, null, {
            title: withCtx(() => [
              createVNode(_component_UButton, {
                to: "/",
                avatar: { src: "/avatar.png" },
                label: "PeterH3G",
                size: "md",
                color: "neutral",
                variant: "outline"
              })
            ]),
            right: withCtx(() => [
              createVNode(_component_UButton, {
                to: "/",
                "leading-icon": "i-lucide-github",
                "trailing-icon": "i-lucide-external-link",
                label: "My GitHub Profile",
                size: "md",
                color: "neutral",
                variant: "link"
              })
            ]),
            _: 1
          }),
          createVNode(_component_UMain, { class: "flex flex-col justify-center items-center" }, {
            default: withCtx(() => [
              createVNode(_component_UPageHero, {
                title: "Hello Universe!",
                class: "bg-accented/80 w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
              })
            ]),
            _: 1
          }),
          createVNode(_component_USeparator, {
            avatar: {
              src: "/avatar.png"
            },
            type: "dashed",
            class: "h-px"
          }),
          createVNode(_component_AppFooter)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/timeout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timeout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { timeout as default };
//# sourceMappingURL=timeout-CViN_W_Z.mjs.map
