import type { User } from "lucia"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/app/_components/ui/avatar"

import { ArrowRightFromLine } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuArrow,
} from "../ui/dropdown-menu"
import SignOutButton from "../SignOutButton"

const UserIcon: React.FC<{ user: User }> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={user.avatar_url}
            fetchPriority="high"
            alt="User Avatar"
          />
          <AvatarFallback className="text-nier-400">
            {user.name.split(" ").map((word) => word[0]?.toUpperCase())}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={10}
        side="bottom"
        collisionPadding={12}
        className="w-fit min-w-[10rem] max-w-xs bg-neutral-800 text-nier-400"
      >
        <DropdownMenuArrow />
        <DropdownMenuLabel className="w-fit">{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <SignOutButton unstyled className="w-full">
            <ArrowRightFromLine className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserIcon
