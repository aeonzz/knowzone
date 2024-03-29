import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { fetchUserById } from "@/lib/server-actions/user.actions";
import { getServerSession } from "next-auth";
import Logout from "./logout";

const UserNav = async ({ userId }: { userId: string }) => {
  const currentUser = await fetchUserById(userId);
  const username = currentUser.data?.email.charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-2">
      <Logout />
      <div>
        <p>{currentUser.data?.firstName}</p>
      </div>
      <Avatar>
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserNav;
