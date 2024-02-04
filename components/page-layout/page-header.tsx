'use client';

import Link from 'next/link';
import { useState } from 'react';

import cn from 'components/ui/cn';
import useIsomorphicLayoutEffect from 'hooks/use-isomorphic-layout-effect';
import useMediaQuery from 'hooks/use-media-query';

import PageHeaderNavigation from './page-header-navigation';
import SideNavbar from './side-navbar';

export default function PageHeader() {
  const isAboveMobile = useMediaQuery('(min-width: 767px)');

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (isAboveMobile) {
      setIsSidebarVisible(false);
    }
  }, [isAboveMobile]);

  return (
    <header
      className={cn(
        'container',
        'w-full py-4',
        'flex items-center justify-between',
        'sticky top-0 z-50 md:static',
        'bg-white',
        { 'bg-transparent': isSidebarVisible }
      )}
    >
      <Link
        href="#"
        className={cn('h-[40px] w-[160px]', 'bg-stroke', 'text-dark', 'flex items-center justify-center')}
        role="button"
      >
        Logo
      </Link>
      {/* mobile version layout */}
      <SideNavbar onToggleVisibility={setIsSidebarVisible} isVisible={isSidebarVisible} />
      <div className="hidden md:block">
        <PageHeaderNavigation />
      </div>
    </header>
  );
}
