import tabContent from "./tab-content.json";
import { TabContent } from "./types";

const DELAY = 2000;

export const getTabContent = (): Promise<TabContent> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tabContent);
    }, DELAY);
  });
};
