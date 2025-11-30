import React from 'react';

const ScrollingText = () => {
  const achievements = [
    'College Fest Robo Race Winner',
    'Robo Line Follower Winner',
    'Robo Pick & Place Winner',
    'Open Source Contributor',
    'College Coding Club Member',
    'Tech Workshop Organizer',
    'Community Volunteer',
  ];

  // Repeat the achievements multiple times to ensure seamless scrolling without overlap
  const repeatedAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="animate-scroll flex items-center space-x-16 text-gray-300 text-sm md:text-base font-light whitespace-nowrap">
        {repeatedAchievements.map((achievement, index) => (
          <span
            key={index}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <span className="text-purple-400">✦</span>
            <span>{achievement}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
