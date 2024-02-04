import { ChevronRight, Rss } from 'lucide-react';
import Link from 'next/link';

import cn from 'components/ui/cn';

import NewsBlock, { INews } from './news-block';

export default function RecentNews({ rencentNews }: RecentNewsProps) {
  return (
    <div className='mb-12'>
      <h2 className={cn('section-heading mb-4 flex items-center gap-2')}>
        <span>Recent News</span> <Rss size={16} role="button" className="text-dark" />
      </h2>
      <ul className='-mt-2'>
        {rencentNews.map((newsItem) => (
          <li key={newsItem.slug} className="border-stroke border-b py-6 first:pt-0">
            <NewsBlock {...newsItem} />
          </li>
        ))}
      </ul>
      <div className="my-12 text-center">
        <Link href="#" className="text-link inline-flex items-center uppercase hover:underline">
          <span>more news</span>
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}

export interface RecentNewsProps {
  rencentNews: INews[];
}
