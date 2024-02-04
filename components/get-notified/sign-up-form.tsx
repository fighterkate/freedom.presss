'use client';

import cn from 'components/ui/cn';

export default function SignUpForm() {
  // yes, we can do the form validation using react-hook-form
  const onFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" className="w-full" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="fullname" className="text-dark font-semibold">
          Full Name
        </label>
        <input type="text" id="fullname" name="fullname" className="form-control form-control--rounded" />
      </div>
      <div>
        <div className="form-group">
          <label htmlFor="email" className="text-dark font-semibold">
            Email Address
          </label>
          <div className="flex items-stretch justify-between">
            <input type="email" id="email" name="email" className={cn('form-control', 'rounded-l-md')} />
            <button className="button button--primary w-[96px] rounded-r-md px-6 uppercase text-white" type="button">join</button>
          </div>
        </div>
      </div>
    </form>
  );
}
