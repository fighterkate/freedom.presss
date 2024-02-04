import cn from './ui/cn';

export default function DonateNow() {
  return (
    <div className={cn('py-6', 'border-stroke border-b')}>
      <h4 className="section-heading">Donate to Freedom of the Press Foundation</h4>
      <p className="my-4">
        Our work to protect journalists and whistleblowers requires your support. Please consider making a
        tax-deductible donation today.
      </p>
      <button className={cn('button button--primary button--rounded button--full-width', 'uppercase')}>
        donate now
      </button>
    </div>
  );
}
