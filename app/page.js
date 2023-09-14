import Link from 'next/link';
import StudentInfo from './week2/StudentInfo';

export default function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week 2</Link>
    </div>
  );
}