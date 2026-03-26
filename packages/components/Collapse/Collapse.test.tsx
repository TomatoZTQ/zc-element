import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import transitionEvents from "./transitionEvents";

describe("Collapse.vue", () => {
  test("renders basic structure", () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={["a"]}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["ZcIcon"],
        },
        attachTo: document.body,
      }
    );

    const headers = wrapper.findAll(".er-collapse-item__header");
    const contents = wrapper.findAll(".er-collapse-item__wapper");

    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);
    expect(headers[0].text()).toBe("title a");
    expect(headers[0].classes()).toContain("is-active");
    expect(contents[0].isVisible()).toBeTruthy();
    expect(contents[1].isVisible()).toBeFalsy();
  });

  test("toggles panel on click", async () => {
    const onChange = vi.fn();
    const wrapper = mount(
      () => (
        <Collapse modelValue={["a"]} {...{ onChange }}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["ZcIcon"],
        },
        attachTo: document.body,
      }
    );

    const headers = wrapper.findAll(".er-collapse-item__header");

    await headers[0].trigger("click");
    await headers[1].trigger("click");

    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenLastCalledWith(["b"]);
  });

  test("does not toggle disabled item", async () => {
    const onChange = vi.fn();
    const wrapper = mount(
      () => (
        <Collapse modelValue={["a"]} {...{ onChange }}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b" disabled>
            content b
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["ZcIcon"],
        },
      }
    );

    const headers = wrapper.findAll(".er-collapse-item__header");
    await headers[1].trigger("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  test("works in accordion mode", async () => {
    const onChange = vi.fn();
    const wrapper = mount(
      () => (
        <Collapse accordion modelValue={["a"]} {...{ onChange }}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["ZcIcon"],
        },
      }
    );

    const headers = wrapper.findAll(".er-collapse-item__header");
    await headers[1].trigger("click");

    expect(onChange).toHaveBeenCalledWith(["b"]);
    expect(headers[0].classes()).not.toContain("is-active");
    expect(headers[1].classes()).toContain("is-active");
  });

  test("warns when accordion receives multi active names", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    mount(
      () => (
        <Collapse accordion modelValue={["a", "b"]}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["ZcIcon"],
        },
      }
    );

    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });
});

describe("Collapse transition events", () => {
  const wrapper = mount(() => <div></div>);

  test("beforeEnter", () => {
    transitionEvents.beforeEnter(wrapper.element);
    expect(wrapper.element.style.height).toBe("0px");
    expect(wrapper.element.style.overflow).toBe("hidden");
  });

  test("enter", () => {
    transitionEvents.enter(wrapper.element);
    expect(wrapper.element.style.height).toBe(`${wrapper.element.scrollHeight}px`);
  });

  test("afterEnter", () => {
    transitionEvents.afterEnter(wrapper.element);
    expect(wrapper.element.style.height).toBe("");
    expect(wrapper.element.style.overflow).toBe("");
  });

  test("beforeLeave", () => {
    transitionEvents.beforeLeave(wrapper.element);
    expect(wrapper.element.style.height).toBe(`${wrapper.element.scrollHeight}px`);
    expect(wrapper.element.style.overflow).toBe("hidden");
  });

  test("leave", () => {
    transitionEvents.leave(wrapper.element);
    expect(wrapper.element.style.height).toBe("0px");
  });

  test("afterLeave", () => {
    transitionEvents.afterLeave(wrapper.element);
    expect(wrapper.element.style.height).toBe("");
    expect(wrapper.element.style.overflow).toBe("");
  });
});