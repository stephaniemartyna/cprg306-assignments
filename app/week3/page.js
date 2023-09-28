import ItemList from "./item-list";
import Link from 'next/link';

export default function Page() {
  return (
    <body className="min-h-screen bg-gradient-to-b from-gray-100 to-fuchsia-200">
    <div>
    <Link href="/" className='text-xs m-2 text-zinc-400'>Go to Home Page</Link>    
    <ItemList />
    </div>
    </body>
  );
}