import { LandingPageComponent} from '@/components/landing-page';
import { TokenGate } from '@/components/TokenGate';
import { getSession } from '@/utils/session';
import Footer from "@/components/Footer"; // Adjust the import path based on your project structure

import Head from 'next/head';


/**
 * The revalidate property determine's the cache TTL for this page and
 * all fetches that occur within it. This value is in seconds.
 */
export const revalidate = 180;

async function Content({ searchParams }: { searchParams: SearchParams }) {
  const data = await getSession(searchParams);
  // Console log the data to see what's available
  // You can see these logs in the terminal where
  // you run `yarn dev`
  console.log({ data });
  return (

<main>

<h1
  style={{
    backgroundColor: '#14151A', // Adjusted to match the darker theme in the image
    color: '#ffffff', // White text for contrast
    padding: '5px 10px', // Add some spacing inside
    borderRadius: '2px', // Slight rounded edges to match the theme
    fontSize: '15px', // Adjusted font size to blend better
    fontFamily: "'Inter', sans-serif", // Clean, modern font
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
    position: 'absolute', // Make it fixed in the top-left corner
    top: '20px', // Distance from the top
    left: '20px', // Distance from the left
    zIndex: 9999, // Ensures it stays on top of other elements
    width: 'auto', // Automatically adjusts to fit content
  }}
>
  Hello & Welcome, &nbsp; &nbsp; <code>{data.client ? data.client.givenName : data.company?.name}</code>
</h1>
<LandingPageComponent/>  
<Footer /> {/* Add Footer here */}
    </main>
  );
}
export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <TokenGate searchParams={searchParams}>
      <Content searchParams={searchParams} />
    </TokenGate>
  );
}
