import React, { useState } from "react";
import { render, act, fireEvent } from "@testing-library/react-native";
import Skeleton from "@/components/Skeleton";
import { Text, Button } from "@/components/Wrapped";

describe("Skeleton", () => {
  it("shows loading state when `of` is undefined", () => {
    const { getByTestId } = render(<Skeleton.Bone of={undefined} />);

    expect(getByTestId("loading")).toBeTruthy();
  });

  it("shows children when `of` is defined", async () => {
    const { getByText } = render(
      <Skeleton.Bone of={true}>
        <Text>Test content</Text>
      </Skeleton.Bone>
    );

    await act(async () => {});

    expect(getByText("Test content")).toBeTruthy();
  });

  it("shows children when `of` changes from falsy to truthy", async () => {
    const TestComponent = () => {
      const [loading, setLoading] = useState(null);

      return (
        <>
          <Skeleton.Bone of={loading}>
            <Text>Test content</Text>
          </Skeleton.Bone>
          <Button title="Load" onPress={() => setLoading(true)} />
        </>
      );
    };

    const { getByText, getByTestId, queryByTestId } = render(<TestComponent />);

    // Initially, `of` is null, so the loading state should be shown
    expect(getByTestId("loading")).toBeTruthy();

    // Simulate a press on the "Load" button, which sets `loading` to true
    fireEvent.press(getByText("Load"));

    await act(async () => {});

    // Now, `of` is truthy, so the children should be shown
    expect(getByText("Test content")).toBeTruthy();
    // And the loading state should no longer be in the document
    expect(queryByTestId("loading")).toBeNull();
  });
});
