import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, withAsyncContext, unref, withCtx, createVNode, useSlots, computed, mergeProps, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, toRaw, resolveComponent, defineAsyncComponent, h, getCurrentInstance, reactive, watch, Text, Comment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { d as useRoute, e as useAsyncData, f as createError, c as tryUseNuxtApp, u as useAppConfig, t as tv, _ as _sfc_main$p, b as _sfc_main$u, a as useRuntimeConfig } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './Separator-DSBDknrJ.mjs';
import { J as pascalCase, K as kebabCase, x as withoutTrailingSlash, h as destr } from '../nitro/nitro.mjs';
import { find, html } from 'property-information';
import { f as flatUnwrap, n as nodeTextContent } from './node-Ta6SvKQA.mjs';
import { toHast } from 'minimark/hast';
import { createReusableTemplate } from '@vueuse/core';
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
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';

const theme$1 = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$4 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.card || {} })({
      variant: props.variant
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: props.ui?.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: props.ui?.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function pick$1(obj, keys) {
  return keys.reduce((acc, key) => {
    const value = get(obj, key);
    if (value !== void 0) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function get(obj, key) {
  return key.split(".").reduce((acc, k) => acc && acc[k], obj);
}
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const specialParentTags = ["math", "svg"];
const proseComponentMap = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
const dangerousTags = ["script", "base"];
const _sfc_main$3 = defineComponent({
  name: "MDCRenderer",
  props: {
    /**
     * Content to render
     */
    body: {
      type: Object,
      required: true
    },
    /**
     * Document meta data
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class(es) to bind to the component
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: [String, Boolean],
      default: void 0
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  async setup(props) {
    const app = getCurrentInstance()?.appContext?.app;
    const $nuxt = app?.$nuxt;
    const route = $nuxt?.$route || $nuxt?._route;
    const { mdc } = $nuxt?.$config?.public || {};
    const tags = computed(() => ({
      ...mdc?.components?.prose && props.prose !== false ? proseComponentMap : {},
      ...mdc?.components?.map || {},
      ...toRaw(props.data?.mdc?.components || {}),
      ...props.components
    }));
    const contentKey = computed(() => {
      const components = (props.body?.children || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components)).sort().join(".");
    });
    const runtimeData = reactive({
      ...props.data
    });
    watch(() => props.data, (newData) => {
      Object.assign(runtimeData, newData);
    });
    await resolveContentComponents(props.body, { tags: tags.value });
    function updateRuntimeData(code, value) {
      const lastIndex = code.split(".").length - 1;
      return code.split(".").reduce((o, k, i) => {
        if (i == lastIndex && o) {
          o[k] = value;
          return o[k];
        }
        return typeof o === "object" ? o[k] : void 0;
      }, runtimeData);
    }
    return { tags, contentKey, route, runtimeData, updateRuntimeData };
  },
  render(ctx) {
    const { tags, tag, body, data, contentKey, route, unwrap, runtimeData, updateRuntimeData } = ctx;
    if (!body) {
      return null;
    }
    const meta = { ...data, tags, $route: route, runtimeData, updateRuntimeData };
    const component = tag !== false ? resolveComponentInstance(tag || meta.component?.name || meta.component || "div") : void 0;
    return component ? h(component, { ...meta.component?.props, class: ctx.class, ...this.$attrs, key: contentKey }, { default: defaultSlotRenderer }) : defaultSlotRenderer?.();
    function defaultSlotRenderer() {
      const defaultSlot = _renderSlots(body, h, { documentMeta: meta, parentScope: meta, resolveComponent: resolveComponentInstance });
      if (!defaultSlot?.default) {
        return null;
      }
      if (unwrap) {
        return flatUnwrap(
          defaultSlot.default(),
          typeof unwrap === "string" ? unwrap.split(" ") : ["*"]
        );
      }
      return defaultSlot.default();
    }
  }
});
function _renderNode(node, h2, options, keyInParent) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.type === "comment") {
    return h2(Comment, null, node.value);
  }
  const originalTag = node.tag;
  const renderTag = findMappedTag(node, documentMeta.tags);
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const _resolveComponent = isUnresolvableTag(renderTag) ? (component2) => component2 : resolveComponent2;
  if (dangerousTags.includes(renderTag)) {
    return h2(
      "pre",
      { class: "mdc-renderer-dangerous-tag" },
      "<" + renderTag + ">" + nodeTextContent(node) + "</" + renderTag + ">"
    );
  }
  const component = _resolveComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  if (keyInParent) {
    props.key = keyInParent;
  }
  return h2(
    component,
    props,
    _renderSlots(
      node,
      h2,
      {
        documentMeta,
        parentScope: { ...parentScope, ...props },
        resolveComponent: _resolveComponent
      }
    )
  );
}
function _renderSlots(node, h2, options) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].children.push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || { props: {}, children: [] };
    if (node2.type === "element") {
      data[slotName].props = node2.props;
      data[slotName].children.push(...node2.children || []);
    }
    return data;
  }, {
    [DEFAULT_SLOT]: { props: {}, children: [] }
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, { props, children: children2 }]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = (data = {}) => {
      const scopedProps = pick$1(data, Object.keys(props || {}));
      let vNodes = children2.map((child, index) => {
        return _renderNode(
          child,
          h2,
          {
            documentMeta,
            parentScope: { ...parentScope, ...scopedProps },
            resolveComponent: resolveComponent2
          },
          String(child.props?.key || index)
        );
      });
      if (props?.unwrap) {
        vNodes = flatUnwrap(vNodes, props.unwrap);
      }
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  const data = {
    ...documentMeta.runtimeData,
    ...parentScope,
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = node.props?.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (data2 && key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return void 0;
  }, data);
  const defaultValue = node.props?.defaultValue;
  return h2(Text, value ?? defaultValue ?? "");
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key)) {
      return propsToDataRxModel(key, value, data, documentMeta, { native: nativeInputs.includes(tag) });
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta, { native }) {
  const propName = key.match(/^v-model:([^=]+)/)?.[1] || "modelValue";
  const field = native ? "value" : propName;
  const event = native ? "onInput" : `onUpdate:${propName}`;
  data[field] = evalInContext(value, documentMeta.runtimeData);
  data[event] = (e) => {
    documentMeta.updateRuntimeData(value, native ? e.target?.value : e);
  };
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveComponentInstance = (component) => {
  if (typeof component === "string") {
    if (htmlTags.includes(component)) {
      return component;
    }
    const _component = resolveComponent(pascalCase(component), false);
    if (!component || _component?.name === "AsyncComponentWrapper") {
      return _component;
    }
    if (typeof _component === "string") {
      return _component;
    }
    if ("setup" in _component) {
      return defineAsyncComponent(() => new Promise((resolve) => resolve(_component)));
    }
    return _component;
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function isUnresolvableTag(tag) {
  return specialParentTags.includes(tag);
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && previousNode?.type === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  if (!body) {
    return;
  }
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    if (c?.render || c?.ssrRender || c?.__ssrInlineRender) {
      return;
    }
    const resolvedComponent = resolveComponentInstance(c);
    if (resolvedComponent?.__asyncLoader && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    const tag = node.tag;
    if (node.type === "text" || tag === "binding" || node.type === "comment") {
      return [];
    }
    const renderTag = findMappedTag(node, documentMeta.tags);
    if (isUnresolvableTag(renderTag)) {
      return [];
    }
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
function findMappedTag(node, tags) {
  const tag = node.tag;
  if (!tag || typeof node.props?.__ignoreMap !== "undefined") {
    return tag;
  }
  return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MDCRenderer = Object.assign(_sfc_main$3, { __name: "MDCRenderer" });
const globalComponents = ["ProseA", "ProseBlockquote", "ProseCode", "ProseEm", "ProseH1", "ProseH2", "ProseH3", "ProseH4", "ProseH5", "ProseH6", "ProseHr", "ProseImg", "ProseLi", "ProseOl", "ProseP", "ProsePre", "ProseScript", "ProseStrong", "ProseTable", "ProseTbody", "ProseTd", "ProseTh", "ProseThead", "ProseTr", "ProseUl", "ProseADVue", "ProseAccordionDVue", "ProseAccordion", "ProseAccordionItemDVue", "ProseAccordionItem", "ProseBadgeDVue", "ProseBadge", "ProseBlockquoteDVue", "ProseCalloutDVue", "ProseCallout", "ProseCardDVue", "ProseCard", "ProseCardGroupDVue", "ProseCardGroup", "ProseCodeDVue", "ProseCodeCollapseDVue", "ProseCodeCollapse", "ProseCodeGroupDVue", "ProseCodeGroup", "ProseCodeIconDVue", "ProseCodeIcon", "ProseCodePreviewDVue", "ProseCodePreview", "ProseCodeTreeDVue", "ProseCodeTree", "ProseCollapsibleDVue", "ProseCollapsible", "ProseEmDVue", "ProseFieldDVue", "ProseField", "ProseFieldGroupDVue", "ProseFieldGroup", "ProseH1DVue", "ProseH2DVue", "ProseH3DVue", "ProseH4DVue", "ProseHrDVue", "ProseIconDVue", "ProseIcon", "ProseImgDVue", "ProseKbdDVue", "ProseKbd", "ProseLiDVue", "ProseOlDVue", "ProsePDVue", "ProsePreDVue", "ProseScriptDVue", "ProseStepsDVue", "ProseSteps", "ProseStrongDVue", "ProseTableDVue", "ProseTabsDVue", "ProseTabs", "ProseTabsItemDVue", "ProseTabsItem", "ProseTbodyDVue", "ProseTdDVue", "ProseThDVue", "ProseTheadDVue", "ProseTrDVue", "ProseUlDVue", "ProseCautionDVue", "ProseCaution", "ProseNoteDVue", "ProseNote", "ProseTipDVue", "ProseTip", "ProseWarningDVue", "ProseWarning", "Icon"];
const localComponents = [];
const virtual_nuxt__2Fhome_2Fpeterh3g_2FmyGithub_2Fpeterh3gPages_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcontent_2Fcomponents = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  globalComponents,
  localComponents
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "ContentRenderer",
  __ssrInlineRender: true,
  props: {
    /**
     * Content to render
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(__props) {
    const renderFunctions = ["render", "ssrRender", "__ssrInlineRender"];
    const props = __props;
    const debug = globalThis._importMeta_.preview;
    const body = computed(() => {
      let body2 = props.value.body || props.value;
      if (props.excerpt && props.value.excerpt) {
        body2 = props.value.excerpt;
      }
      if (body2.type === "minimal" || body2.type === "minimark") {
        return toHast({ type: "minimark", value: body2.value });
      }
      return body2;
    });
    const isEmpty = computed(() => !body.value?.children?.length);
    const data = computed(() => {
      const { body: body2, excerpt, ...data2 } = props.value;
      return {
        ...data2,
        ...props.data
      };
    });
    const proseComponentMap2 = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
    const { mdc } = useRuntimeConfig().public || {};
    const propsDataMDC = computed(() => props.data.mdc);
    const tags = computed(() => ({
      ...mdc?.components?.prose && props.prose !== false ? proseComponentMap2 : {},
      ...mdc?.components?.map || {},
      ...toRaw(propsDataMDC.value?.components || {}),
      ...props.components
    }));
    const componentsMap = computed(() => {
      return body.value ? resolveContentComponents2(body.value, { tags: tags.value }) : {};
    });
    function resolveVueComponent(component) {
      let _component = component;
      if (typeof component === "string") {
        if (htmlTags.includes(component)) {
          return component;
        }
        if (globalComponents.includes(pascalCase(component))) {
          _component = resolveComponent(component, false);
        } else if (localComponents.includes(pascalCase(component))) {
          const loader = () => {
            return Promise.resolve().then(() => virtual_nuxt__2Fhome_2Fpeterh3g_2FmyGithub_2Fpeterh3gPages_2Fnode_modules_2F_cache_2Fnuxt_2F_nuxt_2Fcontent_2Fcomponents).then((m) => {
              const comp = m[pascalCase(component)];
              return comp ? comp() : void 0;
            });
          };
          _component = defineAsyncComponent(loader);
        }
        if (typeof _component === "string") {
          return _component;
        }
      }
      if (!_component) {
        return _component;
      }
      const componentObject = _component;
      if ("__asyncLoader" in componentObject) {
        return componentObject;
      }
      if ("setup" in componentObject) {
        return defineAsyncComponent(() => Promise.resolve(componentObject));
      }
      return componentObject;
    }
    function resolveContentComponents2(body2, meta) {
      if (!body2) {
        return;
      }
      const components = Array.from(new Set(loadComponents(body2, meta)));
      const result = {};
      for (const [tag, component] of components) {
        if (result[tag]) {
          continue;
        }
        if (typeof component === "object" && renderFunctions.some((fn) => Object.hasOwnProperty.call(component, fn))) {
          result[tag] = component;
          continue;
        }
        result[tag] = resolveVueComponent(component);
      }
      return result;
    }
    function loadComponents(node, documentMeta) {
      const tag = node.tag;
      if (node.type === "text" || tag === "binding" || node.type === "comment") {
        return [];
      }
      const renderTag = findMappedTag2(node, documentMeta.tags);
      const components2 = [];
      if (node.type !== "root" && !htmlTags.includes(renderTag)) {
        components2.push([tag, renderTag]);
      }
      for (const child of node.children || []) {
        components2.push(...loadComponents(child, documentMeta));
      }
      return components2;
    }
    function findMappedTag2(node, tags2) {
      const tag = node.tag;
      if (!tag || typeof node.props?.__ignoreMap !== "undefined") {
        return tag;
      }
      return tags2[tag] || tags2[pascalCase(tag)] || tags2[kebabCase(node.tag)] || tag;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (!isEmpty.value) {
        _push(ssrRenderComponent(MDCRenderer, mergeProps({
          body: body.value,
          data: data.value,
          class: props.class,
          tag: props.tag,
          prose: props.prose,
          unwrap: props.unwrap,
          components: componentsMap.value,
          "data-content-id": unref(debug) ? __props.value.id : void 0
        }, _attrs), null, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "empty", {
          body: body.value,
          data: data.value,
          dataContentId: unref(debug) ? __props.value.id : void 0
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "ContentRenderer" });
const theme = {
  "slots": {
    "root": "grid grid-cols-1 sm:grid-cols-2 gap-8",
    "link": [
      "group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary",
      "transition-colors"
    ],
    "linkLeading": [
      "inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50",
      "transition"
    ],
    "linkLeadingIcon": [
      "size-5 shrink-0 text-highlighted group-hover:text-primary",
      "transition-[color,translate]"
    ],
    "linkTitle": "font-medium text-[15px] text-highlighted mb-1 truncate",
    "linkDescription": "text-sm text-muted line-clamp-2"
  },
  "variants": {
    "direction": {
      "left": {
        "linkLeadingIcon": [
          "group-active:-translate-x-0.5"
        ]
      },
      "right": {
        "link": "text-right",
        "linkLeadingIcon": [
          "group-active:translate-x-0.5"
        ]
      }
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UContentSurround",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prevIcon: { type: [String, Object], required: false },
    nextIcon: { type: [String, Object], required: false },
    surround: { type: Array, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate({
      props: {
        link: Object,
        icon: String,
        direction: String
      }
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.contentSurround || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ link, icon, direction }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (link) {
              _push2(ssrRenderComponent(_sfc_main$p, {
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], direction })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "link", {
                      link,
                      ui: ui.value
                    }, () => {
                      _push3(`<div class="${ssrRenderClass(ui.value.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-leading", {
                        link,
                        ui: ui.value
                      }, () => {
                        _push3(ssrRenderComponent(_sfc_main$u, {
                          name: link.icon || icon,
                          class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })
                        }, null, _parent3, _scopeId2));
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div><p class="${ssrRenderClass(ui.value.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-title", {
                        link,
                        ui: ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(link.title)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p><p class="${ssrRenderClass(ui.value.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "link-description", {
                        link,
                        ui: ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(link.description)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</p>`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "link", {
                        link,
                        ui: ui.value
                      }, () => [
                        createVNode("div", {
                          class: ui.value.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] })
                        }, [
                          renderSlot(_ctx.$slots, "link-leading", {
                            link,
                            ui: ui.value
                          }, () => [
                            createVNode(_sfc_main$u, {
                              name: link.icon || icon,
                              class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })
                            }, null, 8, ["name", "class"])
                          ])
                        ], 2),
                        createVNode("p", {
                          class: ui.value.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] })
                        }, [
                          renderSlot(_ctx.$slots, "link-title", {
                            link,
                            ui: ui.value
                          }, () => [
                            createTextVNode(toDisplayString(link.title), 1)
                          ])
                        ], 2),
                        createVNode("p", {
                          class: ui.value.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] })
                        }, [
                          renderSlot(_ctx.$slots, "link-description", {
                            link,
                            ui: ui.value
                          }, () => [
                            createTextVNode(toDisplayString(link.description), 1)
                          ])
                        ], 2)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<span class="hidden lg:block"${_scopeId}> </span>`);
            }
          } else {
            return [
              link ? (openBlock(), createBlock(_sfc_main$p, {
                key: 0,
                to: link.path,
                raw: "",
                class: ui.value.link({ class: [props.ui?.link, link.ui?.link, link.class], direction })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "link", {
                    link,
                    ui: ui.value
                  }, () => [
                    createVNode("div", {
                      class: ui.value.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] })
                    }, [
                      renderSlot(_ctx.$slots, "link-leading", {
                        link,
                        ui: ui.value
                      }, () => [
                        createVNode(_sfc_main$u, {
                          name: link.icon || icon,
                          class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2),
                    createVNode("p", {
                      class: ui.value.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] })
                    }, [
                      renderSlot(_ctx.$slots, "link-title", {
                        link,
                        ui: ui.value
                      }, () => [
                        createTextVNode(toDisplayString(link.title), 1)
                      ])
                    ], 2),
                    createVNode("p", {
                      class: ui.value.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] })
                    }, [
                      renderSlot(_ctx.$slots, "link-description", {
                        link,
                        ui: ui.value
                      }, () => [
                        createTextVNode(toDisplayString(link.description), 1)
                      ])
                    ], 2)
                  ])
                ]),
                _: 2
              }, 1032, ["to", "class"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "hidden lg:block"
              }, " "))
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.surround) {
        _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: __props.as }, _ctx.$attrs, {
          class: ui.value.root({ class: [props.ui?.root, props.class] })
        }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[0],
                icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                direction: "left"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(ReuseLinkTemplate), {
                link: __props.surround[1],
                icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                direction: "right"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[0],
                  icon: __props.prevIcon || unref(appConfig).ui.icons.arrowLeft,
                  direction: "left"
                }, null, 8, ["link", "icon"]),
                createVNode(unref(ReuseLinkTemplate), {
                  link: __props.surround[1],
                  icon: __props.nextIcon || unref(appConfig).ui.icons.arrowRight,
                  direction: "right"
                }, null, 8, ["link", "icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/content/ContentSurround.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const checksums = {
  "content": "v3.5.0--aNYl5GSnT3zbGsW2wH1X4MI6m26xnVcaO_hJ7BPHpGY",
  "docs": "v3.5.0--T-w_prSRacm-_wUKqPr_LXIr4j9fK9AEN7NGVyx7Ae4"
};
const tables = {
  "content": "_content_content",
  "docs": "_content_docs",
  "info": "_content_info"
};
const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts?.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = opts?.limit || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    return (keys || []).filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
  };
}
async function generateNavigationTree(queryBuilder, extraFields = []) {
  const params = queryBuilder.__params;
  if (!params?.orderBy?.length) {
    queryBuilder = queryBuilder.order("stem", "ASC");
  }
  const collecitonItems = await queryBuilder.orWhere(
    (group) => group.where("navigation", "<>", "false").where("navigation", "IS NULL")
  ).select("navigation", "stem", "path", "title", "meta", ...extraFields || []).all();
  const { contents, configs } = collecitonItems.reduce((acc, c) => {
    if (String(c.stem).split("/").pop() === ".navigation") {
      c.title = c.title?.toLowerCase() === "navigation" ? "" : c.title;
      const key = c.path.split("/").slice(0, -1).join("/") || "/";
      acc.configs[key] = {
        ...c,
        ...c.body
      };
    } else {
      acc.contents.push(c);
    }
    return acc;
  }, { configs: {}, contents: [] });
  const pickConfigNavigationFields = (content) => ({
    ...pick(["title", ...extraFields])(content),
    ...content.meta,
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...extraFields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.reduce((nav2, content) => {
    const parts = content.path.substring(1).split("/");
    const idParts = content.stem.split("/");
    const isIndex = !!idParts[idParts.length - 1]?.match(/([1-9]\d*\.)?index/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      path: content2.path,
      stem: content2.stem,
      children: [],
      ...pickNavigationFields(content2)
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem.path];
      if (typeof dirConfig?.navigation !== "undefined" && dirConfig?.navigation === false) {
        return nav2;
      }
      if (content.path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      if (dirConfig) {
        Object.assign(
          navItem,
          pickConfigNavigationFields(dirConfig)
        );
      }
    }
    if (parts.length === 1) {
      const existed2 = nav2.find((item) => item.path === navItem.path && item.page === false);
      if (isIndex && existed2) {
        Object.assign(existed2, {
          page: void 0,
          children: [
            ...navItem.children || [],
            ...existed2.children || []
          ]
        });
      } else {
        nav2.push(navItem);
      }
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && conf.navigation === false) {
        return [];
      }
      let parent = nodes.find((n) => n.path === currentPathPart);
      if (!parent) {
        const navigationConfig = conf ? pickConfigNavigationFields(conf) : {};
        parent = {
          ...navigationConfig,
          title: navigationConfig.title || generateTitle(part),
          path: currentPathPart,
          stem: idParts.slice(0, i + 1).join("/"),
          children: [],
          page: false
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    const existed = siblings.find((item) => item.path === navItem.path && item.page === false);
    if (existed) {
      Object.assign(existed, {
        ...navItem,
        page: void 0,
        children: [
          ...navItem.children || [],
          ...existed.children || []
        ]
      });
    } else {
      siblings.push(navItem);
    }
    return nav2;
  }, []);
  return sortAndClear(nav);
}
function sortAndClear(nav) {
  const sorted = nav;
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
  }
  return nav;
}
function isObject(obj) {
  return obj !== null && Object.prototype.toString.call(obj) === "[object Object]";
}
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
async function generateItemSurround(queryBuilder, path, opts) {
  const { before = 1, after = 1, fields = [] } = {};
  const navigation = await generateNavigationTree(queryBuilder, fields);
  const flatData = flattedData(navigation);
  const index = flatData.findIndex((item) => item.path === path);
  const beforeItems = index === -1 ? [] : flatData.slice(index - before, index);
  const afterItems = index === -1 ? [] : flatData.slice(index + 1, index + after + 1);
  return [
    ...Array.from({ length: before }).fill(null).concat(beforeItems).slice(beforeItems.length),
    ...afterItems.concat(Array.from({ length: after }).fill(null)).slice(0, after)
  ];
}
function flattedData(data) {
  const flatData = data.flatMap((item) => {
    const children = item.children ? flattedData(item.children) : [];
    if (item.page === false || children.length && children.find((c) => c.path === item.path)) {
      return children;
    }
    return [{ ...item, children: void 0 }, ...children];
  });
  return flatData;
}
async function fetchQuery(event, collection, sql) {
  return await $fetch(`/__nuxt_content/${collection}/query`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    headers: {
      "content-type": "application/json",
      ...event?.node?.req?.headers?.cookie ? { cookie: event.node.req.headers.cookie } : {}
    },
    query: { v: checksums[String(collection)], t: void 0 },
    method: "POST",
    body: {
      sql
    }
  });
}
const queryCollection = (collection) => {
  const event = tryUseNuxtApp()?.ssrContext?.event;
  return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
function queryCollectionItemSurroundings(collection, path, opts) {
  return chainablePromise(collection, (qb) => generateItemSurround(qb, path));
}
async function executeContentQuery(event, collection, sql) {
  {
    return fetchQuery(event, String(collection), sql);
  }
}
function chainablePromise(collection, fn) {
  const queryBuilder = queryCollection(collection);
  const chainable = {
    where(field, operator, value) {
      queryBuilder.where(String(field), operator, value);
      return chainable;
    },
    andWhere(groupFactory) {
      queryBuilder.andWhere(groupFactory);
      return chainable;
    },
    orWhere(groupFactory) {
      queryBuilder.orWhere(groupFactory);
      return chainable;
    },
    order(field, direction) {
      queryBuilder.order(String(field), direction);
      return chainable;
    },
    then(onfulfilled, onrejected) {
      return fn(queryBuilder).then(onfulfilled, onrejected);
    },
    catch(onrejected) {
      return this.then(void 0, onrejected);
    },
    finally(onfinally) {
      return this.then(void 0, void 0).finally(onfinally);
    },
    get [Symbol.toStringTag]() {
      return "Promise";
    }
  };
  return chainable;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => {
      return queryCollection("content").path(route.path).first();
    }, "$BPopkF1nvN")), __temp = await __temp, __restore(), __temp);
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`${route.path}-surround`, () => {
      return queryCollectionItemSurroundings("content", route.path);
    })), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page Not Found"
      });
    }
    const appHeroProps = {
      title: page.value?.title || "No title provided",
      description: page.value?.description || "No description provided"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$4;
      const _component_UPageHero = _sfc_main$1$1;
      const _component_ContentRenderer = __nuxt_component_2;
      const _component_USeparator = _sfc_main$5;
      const _component_UContentSurround = _sfc_main$1;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UCard, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UPageHero, appHeroProps, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                value: unref(page).body
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_USeparator, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UPageHero, appHeroProps, null, 16),
                createVNode(_component_ContentRenderer, {
                  value: unref(page).body
                }, null, 8, ["value"]),
                createVNode(_component_USeparator),
                createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CdZC5szD.mjs.map
