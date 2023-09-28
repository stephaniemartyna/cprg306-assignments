import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function HomePage() {
  return (
    <div className='m-2'>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <p className='text-sm'><Link href="/week2">Week 2</Link></p>
      <p className='text-sm'><Link href="/week3">Week 3</Link></p>
    </div>
  );
}