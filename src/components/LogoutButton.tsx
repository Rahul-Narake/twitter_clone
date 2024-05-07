'use client';
import { LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <div
      className="flex space-x-4 px-2 py-1 hover:cursor-pointer"
      onClick={async () => {
        await signOut();
      }}
    >
      <div className="flex text-xl text-slate-400">
        <LogOutIcon />
      </div>
      <p className="bolck text-xl text-slate-400">Logout</p>
    </div>
  );
}
