"use client";
import { useUserAuth } from './_utils/auth-context';
import Link from 'next/link';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-fuchsia-200">
      <Link href="/" className="text-xs m-2 text-zinc-400">
        Go to Home Page
      </Link>

      <div className="ml-10 mt-4 w-68 max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="flex justify-center text-xl text-zinc-800 font-bold mb-4">
          Shopping List App
        </h1>
        <main className="mt-4 flex justify-center p-2 border-2 border-x-4 text-zinc-800">
          {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button onClick={handleSignIn}>Sign In With GitHub</button>
          )}
        </main>

        <div>
          {user && (
            <div>
              <p className="mt-7 text-center text-zinc-800">
                Welcome, {user.displayName} ({user.email})
              </p>
              <div className="mt-4 flex justify-center text-zinc-800 italic hover:underline">
                <Link href="./week8/shopping-list">
                  <p>View Shopping List...</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
