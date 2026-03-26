import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import type { AlertType } from "./types";
import Alert from "./Alert.vue";
import Icon from "../Icon/Icon.vue";

describe("Alert.vue", () => {
  const title = "Test Alert";
  const description = "This is a test description";

  it("renders title and description", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        description,
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(description);
  });

  it.each([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["error", "circle-xmark"],
  ])("renders icon %s correctly", (type, iconName) => {
    const wrapper = mount(Alert, {
      props: {
        title,
        type: type as AlertType,
        showIcon: true,
        closable: false,
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBeTruthy();
    expect(icon.attributes("icon")).toBe(iconName);
  });

  it("emits close event", async () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        closable: true,
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    await wrapper.vm.close();
    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("supports center mode", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        center: true,
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    expect(wrapper.get(".er-alert").classes()).toContain("text-center");
  });

  it("supports open and close instance methods", async () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        closable: false,
      },
      global: {
        stubs: ["ZcIcon"],
      },
    });

    await wrapper.vm.close();
    expect(wrapper.find(".er-alert").attributes("style") ?? "").toContain("display: none;");

    await wrapper.vm.open();
    expect(wrapper.find(".er-alert").attributes("style") ?? "").not.toContain("display: none;");
  });
});
