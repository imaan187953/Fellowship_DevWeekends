import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

describe("AddTodo", () => {
  const renderComponent = () => {
    const store = configureStore({
      reducer: {
        todos: todoReducer,
      },
    });

    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
  };

  it("should not add an empty todo", async () => {
    window.alert = vi.fn();

    renderComponent();

    await userEvent.click(
      screen.getByRole("button", { name: /add todo/i })
    );

    expect(window.alert).toHaveBeenCalled();
  });

  it("should not add whitespace only todo", async () => {
    window.alert = vi.fn();

    renderComponent();

    const input = screen.getByPlaceholderText(
      /enter a todo/i
    );

    await userEvent.type(input, "      ");

    await userEvent.click(
      screen.getByRole("button", { name: /add todo/i })
    );

    expect(window.alert).toHaveBeenCalled();
  });
});