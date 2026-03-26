<script setup lang="ts">
import { provide, ref, watch } from "vue";
import type { CollapseEmits, CollapseItemName, CollapseProps } from "./types";
import { COLLAPSE_CTX_KEY } from "./constants";

const COMPONENT_NAME = "ZcCollapse";

defineOptions({
  name: COMPONENT_NAME,
});

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: () => [],
  accordion: false,
});
const emits = defineEmits<CollapseEmits>();

const activeNames = ref<CollapseItemName[]>([...(props.modelValue ?? [])]);

if (props.accordion && activeNames.value.length > 1) {
  console.warn(new Error(`[${COMPONENT_NAME}] accordion mode should only have one active item`));
}

const updateActiveNames = (value: CollapseItemName[]) => {
  activeNames.value = value;
  emits("update:modelValue", value);
  emits("change", value);
};

const handleItemClick = (item: CollapseItemName) => {
  const nextActiveNames = [...activeNames.value];

  if (props.accordion) {
    updateActiveNames([nextActiveNames[0] === item ? "" : item]);
    return;
  }

  const index = nextActiveNames.indexOf(item);
  if (index > -1) {
    nextActiveNames.splice(index, 1);
  } else {
    nextActiveNames.push(item);
  }
  updateActiveNames(nextActiveNames);
};

watch(
  () => props.modelValue,
  (value) => {
    activeNames.value = [...(value ?? [])];
  }
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
