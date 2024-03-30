import NotFound from "@/app/not-found";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { fetchUserById } from "@/lib/server-actions/user.actions";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getData(): Promise<User[]> {
  const response = await prisma.user.findMany({
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
  const data = await getData();

  return (
    <section className="space-y-3">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Admin</h1>
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users" className="px-16">Users</TabsTrigger>
          <TabsTrigger value="rrls" className="px-16">Rrls</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="rrls"></TabsContent>
      </Tabs>
    </section>
  );
};

export default page;
