import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fetchUserById } from "@/lib/server-actions/user.actions";
import Logout from "./logout";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const UserNav = async ({ userId }: { userId: string }) => {
  const currentUser = await fetchUserById(userId);
  const username = currentUser.data?.email.charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-2">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <Logout />
          </TooltipTrigger>
          <TooltipContent>
            <p>Logout</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div>
        <p>{currentUser.data?.firstName}</p>
        <p className="text-xs font-normal text-slate-300">
          {currentUser.data?.studentId}
        </p>
      </div>
      <Avatar>
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserNav;
