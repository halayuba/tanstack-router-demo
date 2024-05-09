import { Link } from '@tanstack/react-router'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react'
// import "./logo_iskanat.svg";
import { Search } from 'lucide-react'

export default function NavbarLayout() {
  const activeClass = {
    className: 'font-bold underline text-fuchsia-600',
  }
  return (
    <Navbar isBordered className="m-0 h-24 p-0">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <img
            src="/logo_iskanat.svg"
            className="h-auto w-24 object-cover"
            alt="Logo"
          />
          <p className="hidden font-bold text-inherit sm:block">ISKANAT</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-3 sm:flex">
          <NavbarItem>
            <Link to="/" activeProps={activeClass}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/profile" activeProps={activeClass}>
              {({ isActive }) => <>Profile {isActive && '*'}</>}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/products" activeProps={activeClass}>
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/search"
              activeProps={activeClass}
              search={{
                query: 'hala yuba',
                hasDiscount: true,
                categories: ['Books', 'Clothing'],
                limit: 6,
              }}
            >
              Search
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link
              to="/products/$id"
              params={{ id: "2" }}
              activeProps={activeClass}
            >
              Products
            </Link>
          </NavbarItem> */}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<Search size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="/DeadSea_avatar.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
