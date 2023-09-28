import StudentInfo from '../StudentInfo';
import Link from 'next/link';

export default function Week2Page() {
  return (
    <div>
      <h1>My Shopping List</h1>
      <StudentInfo />
      <Link href="/" className='text-xs'>Go to Home Page</Link>
    </div>
  );
}