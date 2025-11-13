import { useSlots, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as useAppConfig, t as tv } from './server.mjs';
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

const theme = {
  "slots": {
    "root": "my-5",
    "preview": "flex justify-center border border-muted relative p-4 rounded-md",
    "code": "[&>div>pre]:rounded-t-none [&>div]:my-0"
  },
  "variants": {
    "code": {
      "true": {
        "preview": "border-b-0 rounded-b-none"
      }
    }
  }
};
const _sfc_main = {
  __name: "ProseCodePreview",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.codePreview || {} })({ code: !!slots.code }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs))}><div class="${ssrRenderClass(ui.value.preview({ class: [props.ui?.preview] }))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (!!slots.code) {
        _push(`<div class="${ssrRenderClass(ui.value.code({ class: [props.ui?.code] }))}">`);
        ssrRenderSlot(_ctx.$slots, "code", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodePreview-CIlh95xY.mjs.map
