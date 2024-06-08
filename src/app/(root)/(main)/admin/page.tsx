import NotFound from "@/app/not-found";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { fetchUserById } from "@/lib/server-actions/user.actions";
import { Rrl, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { UserDataTable } from "../../../../components/table/user-data-table";
import { userColumns } from "../../../../components/table/user-columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RrlDataTable } from "@/components/table/rrl-data-table";
import { rrlColumns } from "@/components/table/rrl-columns";

async function getUsersData(): Promise<User[]> {
  const response = await prisma.user.findMany({
    where: {
      deleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response;
}

async function getRrlsData(): Promise<Rrl[]> {
  const response = await prisma.rrl.findMany({
    where: {
      deleted: false,
    },
    orderBy: {
      id: "desc",
    },
  });

  return response;
}

const page = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = await fetchUserById(session!.user.id);

  if (currentUser.data?.role !== "Admin") return <NotFound />;
  const usersData = await getUsersData();
  const rrlsData = await getRrlsData();

  return (
    <section className="space-y-3">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Admin</h1>
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users" className="px-16">
            Users
          </TabsTrigger>
          <TabsTrigger value="rrls" className="px-16">
            Rrls
          </TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserDataTable columns={userColumns} data={usersData} />
        </TabsContent>
        <TabsContent value="rrls">
          <RrlDataTable columns={rrlColumns} data={rrlsData} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
