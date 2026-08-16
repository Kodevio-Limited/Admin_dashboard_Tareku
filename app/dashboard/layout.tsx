'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen flex-col lg:ml-[255px]">
        <Header pathname={pathname} onMenuToggle={() => setSidebarOpen(true)} />
        <main className="flex min-h-[calc(100dvh-75px)] flex-1 flex-col gap-6 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}