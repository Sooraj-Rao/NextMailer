import { sideBarActiveItem } from "@/app/configs/constants";
import { useAtom } from "jotai";

export const useRouteChange = () => {
  const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem);
  return { activeRoute, setActiveRoute };
};
