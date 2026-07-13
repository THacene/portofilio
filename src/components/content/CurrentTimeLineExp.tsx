import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
    return (
        <Timeline>
            <TimelineEvent>
                <TimelineEvent.Title>Virtual-Robotics-XR-Platform | Jan. 2026 - Jun. 2026</TimelineEvent.Title>
                <TimelineEvent.Description>
                    • Working on a Virtual Robotics XR Platform.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Computer Maintenance | juin. 2023 - sep. 2023</TimelineEvent.Title>
                <TimelineEvent.Description>
                 
                    • Hands-on experience as a computer maintenance technician
                    • Dealing with hardware issues.
                    • Discover the detailed electronic diagram of a motherboard.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Teaching Scratch | juin. 2023 - juil. 2023</TimelineEvent.Title>
                <TimelineEvent.Description>
                        • Teaching Scratch to children.          
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Mobile Development | juil. 2023 - sep. 2023</TimelineEvent.Title>
                <TimelineEvent.Description>
                    • Work on a commercial project.
                    • Uses Java language.            
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Web development | Sep. 2023 - Avril. 2024</TimelineEvent.Title>
                <TimelineEvent.Description>
                    • Working on a reporting project to manage the regions of Sonatrach.
                    • Using the Laravel framework with a MySQL database
                </TimelineEvent.Description>
            </TimelineEvent>

           

        </Timeline>
    );
}

export default CurrentTimeLineExp;
