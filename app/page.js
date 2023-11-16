import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function HomePage() {
  return (
    <body className="min-h-screen bg-gradient-to-b from-gray-100 to-fuchsia-200 text-zinc-700">
    <div className='m-2'>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <p className='text-sm mt-4'><Link href="/week2">Week 2</Link></p>
      <p className='text-sm'><Link href="/week3">Week 3</Link></p>
      <p className='text-sm'><Link href="/week4">Week 4</Link></p>
      <p className='text-sm'><Link href="/week5">Week 5</Link></p>
      <p className='text-sm'><Link href="/week6">Week 6</Link></p>
      <p className='text-sm'><Link href="/week7">Week 7</Link></p>
      <p className='text-sm'><Link href="/week8">Week 8</Link></p>
      <p className='text-sm'><Link href="/week10">Week 10</Link></p>


    </div>
    </body>
  );
}