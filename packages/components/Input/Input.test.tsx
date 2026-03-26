import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "./Input.vue";

describe("Input.vue", () => {
  test("renders with classes, slots and input node", () => {
    const wrapper = mount(Input, {
      props: {
        type: "text",
        size: "small",
        modelValue: "test",
      },
      slots: {
        prepend: "prepend",
        prefix: "prefix",
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    expect(wrapper.classes()).toContain("er-input");
    expect(wrapper.classes()).toContain("er-input--small");
    expect(wrapper.classes()).toContain("er-input--text");
    expect(wrapper.classes()).toContain("is-prefix");
    expect(wrapper.classes()).toContain("is-prepend");

    expect(wrapper.find("input").exists()).toBeTruthy();
    expect(wrapper.get("input").attributes("type")).toBe("text");

    expect(wrapper.get(".er-input__prepend").text()).toBe("prepend");
    expect(wrapper.get(".er-input__prefix").text()).toBe("prefix");

    const textareaWrapper = mount(Input, {
      props: {
        type: "textarea",
        modelValue: "test",
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });
    expect(textareaWrapper.find("textarea").exists()).toBeTruthy();
  });

  test("works with v-model events", async () => {
    const wrapper: any = mount(Input, {
      props: {
        modelValue: "test",
        type: "text",
        "onUpdate:modelValue": (value: string) => wrapper.setProps({ modelValue: value }),
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    const input = wrapper.get("input");
    expect((input.element as HTMLInputElement).value).toBe("test");

    await input.setValue("test2");
    expect(wrapper.props("modelValue")).toBe("test2");
    expect((input.element as HTMLInputElement).value).toBe("test2");

    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted()).toHaveProperty("change");

    await wrapper.setProps({ modelValue: "test3" });
    expect((input.element as HTMLInputElement).value).toBe("test3");
  });

  test("supports clearable", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "test",
        clearable: true,
        type: "text",
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    expect(wrapper.find(".er-input__clear").exists()).toBeFalsy();

    const input = wrapper.get("input");
    await input.trigger("focus");
    expect(wrapper.find(".er-input__clear").exists()).toBeTruthy();

    await wrapper.get(".er-input__clear").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("clear");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted()).toHaveProperty("change");
  });

  test("supports password visibility toggle", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "",
        type: "password",
        showPassword: true,
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    const input = wrapper.get("input");
    expect((input.element as HTMLInputElement).type).toBe("password");

    await input.setValue("123");
    const eyeIcon = wrapper.find(".er-input__password");
    expect(eyeIcon.exists()).toBeTruthy();

    await eyeIcon.trigger("click");
    expect((input.element as HTMLInputElement).type).toBe("text");
  });
});
