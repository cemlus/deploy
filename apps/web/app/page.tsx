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

// generally the landing page tends to be a static page and therefore when it is being built, it fetches the data and generates the required html based off it. but when more data is added, the static page doesnt load the dynamic data again
// mainly because  Next.js loads server components DURING THE BUILD.