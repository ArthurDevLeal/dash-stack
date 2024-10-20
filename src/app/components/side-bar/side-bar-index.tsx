import SideBarItemName from "./item/sibe-bar-item-name";
import SideBarItemIcon from "./item/side-bar-item-icon";
import SideBarItemRoot from "./item/side-bar-item-root";
import SideBarRoot from "./side-bar-root";
import { SideBarSectionName } from "./side-bar-section-name";
import { SideBarLogo } from "./side-bar-logo";
import SideBarDivision from "./side-bar-division";

export const SideBarIndex = {
  Root: SideBarRoot,
  Division: SideBarDivision,
  SectionName: SideBarSectionName,
  Logo: SideBarLogo,
  Item: {
    Root: SideBarItemRoot,
    Name: SideBarItemName,
    Icon: SideBarItemIcon,
  },
};
