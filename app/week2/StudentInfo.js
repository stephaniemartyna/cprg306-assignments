import Link from 'next/link';

function StudentInfo() {
  const myName = 'Stephanie Martyna';
  const courseSection = 'CPRG 306 B';
  const githubRepo = 'https://github.com/stephaniemartyna/cprg306-assignments'

  return (
    <div>
      <p>
        Name: {myName}
      </p>
      <p>
        Course Section: {courseSection}
      </p>
      <p>
        <Link href="https://github.com/stephaniemartyna/cprg306-assignments"> {githubRepo} </Link>
      </p>
    </div>
  );
}

export default StudentInfo;
