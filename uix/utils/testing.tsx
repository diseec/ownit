import { render, waitFor, RenderOptions } from "@testing-library/react-native";
import { expect } from "@jest/globals";
import { store } from "@/hooks/stores";
import { Provider } from "react-redux";

async function renderLoaded(ui: React.ReactElement, options?: any) {
  const R = render(ui, { ...options });
  await waitFor(() => expect(R.queryByTestId("loading")).toBeNull());
  return R;
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...options,
  });

// re-export everything
export * from "@testing-library/react-native";
// override render method
export { customRender as render, renderLoaded, waitFor };
