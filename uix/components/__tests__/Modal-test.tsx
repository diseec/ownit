import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import Modal from "../Modal";
import { Text } from "@/components/Wrapped";

describe("Modal", () => {
  it("opens when the trigger is clicked", () => {
    const { getByTestId, getByText } = render(
      <Modal trigger={<Text>Open Modal</Text>}>
        <Text>Modal Content</Text>
      </Modal>
    );

    fireEvent.press(getByText("Open Modal"));
    expect(getByTestId("modal")).toBeTruthy();
  });
});
