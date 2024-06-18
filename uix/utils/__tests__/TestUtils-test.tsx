import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { renderLoaded, waitFor } from "@/utils/testing";
import Skeleton from "@/components/Skeleton";
import { create, act } from "react-test-renderer";

describe("fetches data and updates the state without mocking", () => {
  // it("via react-test-renderer", async () => {
  //   global.fetch = fakeFetchResultDelayed({ title: "Test title" });
  //   let component;

  //   await act(async () => {
  //     component = create(<SimpleFetchComponent />);
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //   });

  //   expect(component.root.findByType("Text").props.children).toBe("Test title");
  // });

  // it("via `findByText` from @testing-library/react-native", async () => {
  //   global.fetch = fakeFetchResultDelayed({ title: "Test title" });
  //   const { findByText } = await render(<SimpleFetchComponent />);
  //   const element = await findByText("Test title", {}, { timeout: 1500 });
  //   expect(element).toBeTruthy();
  // });

  it("waits for data to fully load", async () => {
    global.fetch = fakeFetchResultDelayed({ title: "Test title" });
    const { getByTestId } = await renderLoaded(<SimpleFetchComponent />);
    expect(getByTestId("title").props.children).toBe("Test title");
  });

  const SimpleFetchComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const json = await response.json();
        setData(json);
      };

      fetchData();
    }, []);

    return (
      <Skeleton.Bone of={data?.title}>
        {(title) => <Text testID="title">{title}</Text>}
      </Skeleton.Bone>
    );
  };

  function fakeFetchResultDelayed(data) {
    return jest.fn(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                json: () => Promise.resolve(data),
              }),
            500
          )
        )
    );
    // return jest.fn().mockImplementation(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve(data),
    //   })
    // );
  }
});
