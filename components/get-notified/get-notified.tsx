import cn from 'components/ui/cn';

import SignUpForm from './sign-up-form';

export default function GetNotified() {
  return (
    <div className={cn('border-stroke  border-b', 'w-full py-6 md:pt-0')}>
      <h4 className="section-heading">GET NOTIFIED. TAKE ACTION.</h4>
      <p className="mt-2 mb-4">
        Threats to press freedom around the world are at an all-time high. Sign up to stay up to date and take action to
        protect journalists and whistleblowers everywhere.
      </p>
      <SignUpForm />
    </div>
  );
}
