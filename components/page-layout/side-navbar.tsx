'use-client';

import * as Portal from '@radix-ui/react-portal';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

import cn from 'components/ui/cn';
import useIsomorphicLayoutEffect from 'hooks/use-isomorphic-layout-effect';

import PageHeaderNavigation from './page-header-navigation';

export default function SideNavbar({ isVisible, onToggleVisibility }: SideNavbarProps) {
  const [container, setContainer] = useState<HTMLElement>();

  useIsomorphicLayoutEffect(() => {
    setContainer(document.body);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isVisible]);

  if (!container) return null;

  return (
    <>
      <button
        className={cn('button', 'md:hidden', 'relative z-50', 'h-10 w-10', 'bg-white', 'text-dark', 'rounded-sm')}
        onClick={onToggleVisibility.bind(null, !isVisible)}
      >
        {isVisible
          ? <X size={40} />
          :<AlignJustify size={40} />
        }
      </button>
      <Portal.Root container={container}>
        <div
          className={cn(
            // visit styles/utilities/drawer.css
            // Idealy, we should extract a drawer component
            'drawer drawer--left-in',
            'w-[72%] py-6',
            {
              'is-visible': isVisible,
            }
          )}
        >
          <div className="px-6">
            <PageHeaderNavigation />
          </div>
        </div>
        <button
          className={cn('overlay', {
            'left-[100%]': !isVisible,
          })}
          onClick={onToggleVisibility.bind(null, false)}
        />
      </Portal.Root>
    </>
  );
}

export interface SideNavbarProps {
  isVisible: boolean
  onToggleVisibility: (state: boolean) => void
}
