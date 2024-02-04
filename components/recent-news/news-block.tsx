import Link from 'next/link';

import cn from 'components/ui/cn';

export default function NewsBlock({ ...news }: INews) {
  return (
    <article className="flex flex-col gap-4 xl:flex-row">
      <Link href="#" className={cn('block hover:opacity-90', 'lg:grow  xl:w-[42%]')}>
        <img alt={news.title} src={news.imgUrl} />
      </Link>
      <div className="md:-mt-2 xl:w-[58%]  xl:grow">
        <Link
          href="#"
          className={cn(
            'text-dark',
            ' text-2xl  2xl:text-3xl',
            'ff-din font-semibold leading-[1.2]',
            'hover:decoration-dark hover:underline',
            'block mb-3'
          )}
        >
          {news.title}
        </Link>
        {news.summary && <p className="text--easyish-reading mb-2">{news.summary}</p>}
      </div>
    </article>
  );
}

export interface INews {
  imgUrl: string
  slug: string
  summary?: string
  title: string
}
