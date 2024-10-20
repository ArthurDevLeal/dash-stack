import { NavBarIndex } from "./nav-bar-index";

export default function NavBar() {
  return (
    <NavBarIndex.Root>
      <div className="flex items-center justify-center">
        <NavBarIndex.Extra />
        <NavBarIndex.Search />
      </div>
      <div className="flex justify-center items-center">
        <NavBarIndex.Notification.Icon />
        <NavBarIndex.Profie.Picture />
        <div className="flex flex-col">
          <NavBarIndex.Profie.Name name="Arthur" />
          <NavBarIndex.Profie.Role role="Admin" />
        </div>
      </div>
    </NavBarIndex.Root>
  );
}
