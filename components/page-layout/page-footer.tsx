import cn from 'components/ui/cn';

export default function PageFooter() {
  return (
    <footer className={cn('py-6 xl:py-8', 'bg-dark-1', 'text-gray-1', 'leading-relaxed')}>
      <div className={cn('container mx-auto', 'grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8')}>
        <div className="h-full">
          <h6 className="text-gray">Freedom of the Press Foundation</h6>
          <address className="not-italic">
            49 Flatbush Avenue #1017
            <br />
            Brooklyn NY 11217
          </address>
        </div>
        <nav className="h-full">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>About Freedom of the Press</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
        <nav className="h-full">
          <ul>
            <li>Guides & Training</li>
            <li>Projects</li>
            <li>News and advocacy</li>
            <li>Press release</li>
            <li>Newsletter</li>
          </ul>
        </nav>
        <p className="h-full -mt-4 md:-mt-6 lg:mt-0">
          This work licensed under a{' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="text-link capitalize">
            Creative Commons 4.0 Attribution International{' '}
          </a>
          License
        </p>
      </div>
    </footer>
  );
}
