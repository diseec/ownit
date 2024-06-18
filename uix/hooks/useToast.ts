import Clocks from "@/constants/Clocks";
import { __, __c } from "@/utils/translation";
import Toast from "react-native-root-toast";

export default function useToast(
  message: string,
  params?: Record<string, string>
) {
  message = __c(message, params);
  let duration = message.length * Clocks.duration.fastest;

  Toast.show(message, {
    duration: duration,
  });

  // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
  //   setTimeout(function hideToast() {
  //     Toast.hide(toast);
  //   }, Clocks.duration.slowest);
}
