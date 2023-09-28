import Link from 'next/link';

export default function StudentInfo() {
  const myName = 'Stephanie Martyna';
  const courseSection = 'CPRG 306 B';
  const githubRepo = 'https://github.com/stephaniemartyna/cprg306-assignments'

  return (
    <div className='text-sm'>
      <p>
        Name: {myName}
      </p>
      <p>
        Course Section: {courseSection}
      </p>
      <p>
        <Link href="https://github.com/stephaniemartyna/cprg306-assignments" className='italic-sm'> {githubRepo} </Link>
      </p>
    </div>
  );
}