<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import type { SwitchEmits, SwitchInstance, SwitchProps } from "./types";

defineOptions({ name: "ZcSwitch", inheritAttrs: false });

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  activeValue: true,
  inactiveValue: false,
});
const emits = defineEmits<SwitchEmits>();

const innerValue = ref(props.modelValue);
const inputRef = ref<HTMLInputElement | null>(null);
const checked = computed(() => innerValue.value === props.activeValue);

const focus: SwitchInstance["focus"] = () => {
  inputRef.value?.focus();
};

const handleChange = () => {
  if (props.disabled) return;

  const nextValue = checked.value ? props.inactiveValue : props.activeValue;
  innerValue.value = nextValue;
  emits("update:modelValue", nextValue);
  emits("change", nextValue);
};

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.checked = checked.value;
  }
});

watch(checked, (value) => {
  if (inputRef.value) {
    inputRef.value.checked = value;
  }
});

watch(
  () => props.modelValue,
  (value) => {
    innerValue.value = value;
  }
);

defineExpose<SwitchInstance>({
  focus,
  checked,
});
</script>

<template>
  <div
    class="er-switch"
    :class="{
      [`er-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
    @click="handleChange"
  >
    <input
      class="er-switch__input"
      type="checkbox"
      role="switch"
      ref="inputRef"
      :id="id"
      :name="name"
      :disabled="disabled"
      :checked="checked"
      @keydown.enter.prevent="handleChange"
    />
    <div class="er-switch__core">
      <div class="er-switch__core-inner">
        <span
          v-if="activeText || inactiveText"
          class="er-switch__core-inner-text"
        >
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="er-switch__core-action"></div>
    </div>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
