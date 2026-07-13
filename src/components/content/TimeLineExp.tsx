import classNames from 'classnames';
import AnimationContainer from '../utils/AnimationContainer';
import { TimelineEventProps } from '@/src/types';

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-2 gradient-text text-center lg:text-start">
        Experience
      </h2>
      <div className="section-divider"></div>

      <div className="glass-card p-6 lg:p-8">
        {children}
      </div>
    </AnimationContainer>
  );
};

export const TimelineEvent = ({ active, children, last }: TimelineEventProps) => {
  return (
    <div
      className={classNames('w-full flex justify-start gap-6 border-indigo-200', {
        'border-l-2': !last,
        'pb-10': !last,
      })}
    >
      <div className='relative'>
        <div
          className={classNames(
            'absolute top-[-2px] left-[-9px] w-4 h-4 rounded-full aspect-square',
            {
              'bg-gradient-to-r from-indigo-500 to-cyan-500': active,
              'bg-indigo-200': !active,
              'w-3 h-3': !active,
              'left-[-7px]': !active,
            }
          )}
        >
          {active && (
            <div
              className={classNames(
                'absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-indigo-400 animate-ping aspect-square'
              )}
            />
          )}
        </div>
      </div>
      <div className='mt-[-4px] flex flex-col gap-2'>{children}</div>
    </div>
  );
}

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => <p className='text-base font-semibold text-slate-700'>{children}</p>;

const TimelineEventDescription = ({ children }: { children: React.ReactNode }) => <p className='text-sm text-slate-500 leading-relaxed'>{children}</p>;

TimelineEvent.Title = TimelineEventTitle;

TimelineEvent.Description = TimelineEventDescription;