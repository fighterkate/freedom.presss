import { Facebook, Search, Twitch, Twitter } from 'lucide-react';
import Link from 'next/link';

import cn from 'components/ui/cn';
import Separator from 'components/ui/seperator';

const PageHeaderNavigation = () => {
  return (
    <>
      <div className={cn('flex flex-col md:flex-col-reverse md:items-center', 'md:gap-4')}>
        <div className={FLEX_GROUP_CLASS_NAMES}>
          <button className={cn('relative', 'mb-10 md:mb-0', 'flex justify-center')}>
            <input placeholder="Search..." className={cn('form-control form-control--rounded', 'w-full', 'md:hidden')} />
            <Search
              className={cn(
                'top-50%  absolute right-2 mt-2 md:static md:mt-0',
                'text-dark-3 md:text-dark-2 hover:text-link'
              )}
            />
          </button>
          <nav>
            <ul className={cn(FLEX_GROUP_CLASS_NAMES, 'flex-wrap')}>
              <li>
                <Link href="#" className={MAIN_LINK_CLASS_NAMES}>
                  News & advocacy
                </Link>
              </li>
              <li>
                <Link href="#" className={MAIN_LINK_CLASS_NAMES}>
                  Guides & tranings
                </Link>
              </li>
              <li>
                <Link href="#" className={MAIN_LINK_CLASS_NAMES}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Separator className="my-5 md:hidden" />
        <nav className={cn(FLEX_GROUP_CLASS_NAMES, 'max-w-[400px]')}>
          <ul className={FLEX_GROUP_CLASS_NAMES}>
            <Link href="#" className="button button--primary w-20">
              Donate
            </Link>
            <li>
              <Link href="#" className={LINK_CLASS_NAMES}>
                Store
              </Link>
            </li>
            <li>
              <Link href="#" className={LINK_CLASS_NAMES}>
                Jobs
              </Link>
            </li>
            <li>
              <Link href="#" className={LINK_CLASS_NAMES}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className={LINK_CLASS_NAMES}>
                About
              </Link>
            </li>
          </ul>
          <Separator className="my-5 md:hidden" />
          <ul className={cn(FLEX_GROUP_CLASS_NAMES, 'md:gap-2')}>
            <li className='flex items-center'>
              <Link href="#" className={cn(LINK_CLASS_NAMES, SOCIAL_MEDIA_LINK_CLASS_NAMES)}>
                <Twitter className="hover:text-link" />
                <span className="md:hidden">Twitter</span>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href="#" className={cn(LINK_CLASS_NAMES, '-ml-1 md:ml-0', SOCIAL_MEDIA_LINK_CLASS_NAMES)}>
                <Facebook className="hover:text-link" />
                <span className="md:hidden">Facebook</span>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href="#" className={cn(LINK_CLASS_NAMES, SOCIAL_MEDIA_LINK_CLASS_NAMES)}>
                <Twitch className="hover:text-link" />
                <span className="md:hidden">Twitch</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const FLEX_GROUP_CLASS_NAMES = 'flex flex-col md:flex-row md:items-center gap-2 md:gap-4';

const LINK_CLASS_NAMES = 'hover:text-link block';

const MAIN_LINK_CLASS_NAMES = cn(LINK_CLASS_NAMES, 'uppercase', 'whitespace-nowrap');

const SOCIAL_MEDIA_LINK_CLASS_NAMES = 'inline-flex items-center gap-2';

export default PageHeaderNavigation;
