import { NavBarExtra } from "./nav-bar-extra";
import NavBarRoot from "./nav-bar-root";
import NavBarSearch from "./nav-bar-search";
import NavBarNotification from "./notifications/nav-bar-notification";
import { NavBarProfileName } from "./profile/nav-bar-profile-name";
import { NavBarProfilePicture } from "./profile/nav-bar-profile-picture";
import { NavBarProfileRole } from "./profile/nav-bar-profile-role";

export const NavBarIndex = {
  Root: NavBarRoot,
  Extra: NavBarExtra,
  Search: NavBarSearch,
  Notification: {
    Icon: NavBarNotification,
  },
  Profie: {
    Picture: NavBarProfilePicture,
    Name: NavBarProfileName,
    Role: NavBarProfileRole,
  },
};
