import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60 // revalidate every 60 seconds
// or
// this forces the page to be dynamic so that data is fetched on every request
export const dynamic = 'force-dynamic'
