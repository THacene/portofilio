'use client';

const ShowSkills = ({ skills }: { skills: string | string[] }) => {
  if (skills instanceof Array) {
    return (
      <>
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}
      </>
    );
  }

  return (
    <span className="skill-badge">
      {skills}
    </span>
  );
};

export default ShowSkills;