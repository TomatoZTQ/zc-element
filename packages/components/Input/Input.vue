<script setup lang="ts">
import { computed, nextTick, ref, shallowRef, useAttrs, watch } from "vue";
import { noop } from "lodash-es";
import type { InputEmits, InputInstance, InputProps } from "./types";
import ZcIcon from "../Icon/Icon.vue";

defineOptions({
  name: "ZcInput",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: "",
  type: "text",
  autocomplete: "off",
});
const emits = defineEmits<InputEmits>();

const attrs = useAttrs();
const innerValue = ref(props.modelValue);
const passwordVisible = ref(false);
const isFocused = ref(false);

const inputRef = shallowRef<HTMLInputElement>();
const textareaRef = shallowRef<HTMLTextAreaElement>();

const mergedRef = computed(() => inputRef.value || textareaRef.value);

const showClear = computed(
  () =>
    props.clearable &&
    props.type !== "textarea" &&
    !!innerValue.value &&
    !props.disabled &&
    isFocused.value
);

const showPasswordArea = computed(
  () =>
    props.type === "password" &&
    props.showPassword &&
    !props.disabled &&
    !!innerValue.value
);

const clear: InputInstance["clear"] = () => {
  innerValue.value = "";
  emits("update:modelValue", "");
  emits("input", "");
  emits("change", "");
  emits("clear");
};

const focus: InputInstance["focus"] = async () => {
  await nextTick();
  mergedRef.value?.focus();
};

const blur: InputInstance["blur"] = () => {
  mergedRef.value?.blur();
};

const select: InputInstance["select"] = () => {
  mergedRef.value?.select();
};

const handleInput = () => {
  emits("update:modelValue", innerValue.value);
  emits("input", innerValue.value);
};

const handleChange = () => {
  emits("change", innerValue.value);
};

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true;
  emits("focus", event);
};

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false;
  emits("blur", event);
};

const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);

defineExpose<InputInstance>({
  ref: mergedRef,
  focus,
  blur,
  select,
  clear,
});
</script>

<template>
  <div
    class="er-input"
    :class="{
      [`er-input--${type}`]: type,
      [`er-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocused,
    }"
  >
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="er-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="er-input__wrapper">
        <span v-if="$slots.prefix" class="er-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="er-input__inner"
          ref="inputRef"
          :id="id"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          v-bind="attrs"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <span
          v-if="$slots.suffix || showClear || showPasswordArea"
          class="er-input__suffix"
        >
          <slot name="suffix"></slot>
          <ZcIcon
            v-if="showClear"
            icon="circle-xmark"
            class="er-input__clear"
            @click="clear"
            @mousedown.prevent="noop"
          />
          <ZcIcon
            v-if="showPasswordArea && passwordVisible"
            icon="eye"
            class="er-input__password"
            @click="togglePasswordVisible"
          />
          <ZcIcon
            v-if="showPasswordArea && !passwordVisible"
            icon="eye-slash"
            class="er-input__password"
            @click="togglePasswordVisible"
          />
        </span>
      </div>
      <div v-if="$slots.append" class="er-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <template v-else>
      <textarea
        class="er-textarea__wrapper"
        ref="textareaRef"
        :id="id"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        v-bind="attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
