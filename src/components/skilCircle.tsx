// // SkillsDisplay.tsx

// import React from 'react';

// import { Box, Typography, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// import { styled, keyframes } from '@mui/system';
 
// // Import icons from react-icons

// // You'll need to install react-icons: npm install react-icons

// import { FaJsSquare, FaReact, FaAws, FaDocker, FaLinux, FaGithub, FaNodeJs, FaPencilAlt, FaGitAlt } from 'react-icons/fa';

// import { SiMongodb, SiMysql, SiDjango, SiExpress, SiKubernetes, SiCanva } from 'react-icons/si';
 
// // Define the shape of a skill object

// interface Skill {

//   icon: React.ElementType; // Type for the React component (icon)

//   color: string;

//   name: string;

// }
 
// // Data for your skills

// const innerCircleSkills: Skill[] = [

//   { icon: FaJsSquare, color: '#F7DF1E', name: 'JavaScript' },

//   { icon: FaReact, color: '#61DAFB', name: 'React' },

//   { icon: FaDocker, color: '#2496ED', name: 'Docker' },

//   { icon: FaLinux, color: '#FCC624', name: 'Linux' },

//   { icon: SiExpress, color: '#FFFFFF', name: 'Express.js' }, // White for Express.js logo

// ];
 
// const outerCircleSkills: Skill[] = [

//   { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },

//   { icon: FaGithub, color: '#181717', name: 'GitHub' },

//   { icon: SiDjango, color: '#092E20', name: 'Django' },

//   { icon: SiMysql, color: '#4479A1', name: 'MySQL' },

//   { icon: SiCanva, color: '#00C4CC', name: 'Canva' },

//   { icon: FaAws, color: '#FF9900', name: 'AWS' },

//   { icon: FaNodeJs, color: '#339933', name: 'Node.js' },

//   { icon: SiKubernetes, color: '#326CE5', name: 'PowerApps' },

//   { icon: FaPencilAlt, color: '#A0A0A0', name: 'Pencil' }, // Placeholder for the pencil icon (using a generic one)

//   { icon: FaGitAlt, color: '#F05032', name: 'Git' }

// ];
 
// // Define keyframes for animations

// const rotateClockwise = keyframes`

//   from {

//     transform: rotate(0deg);

//   }

//   to {

//     transform: rotate(360deg);

//   }

// `;
 
// const rotateAntiClockwise = keyframes`

//   from {

//     transform: rotate(0deg);

//   }

//   to {

//     transform: rotate(-360deg);

//   }

// `;
 
// // Styled components for the circles and icons

// const OuterCircle = styled(Box)(({ theme }) => ({

//   width: '600px', // Adjust size as needed

//   height: '600px',

//   borderRadius: '50%',

//   border: '2px dashed rgba(255, 255, 255, 0.3)', // Example dashed border

//   display: 'flex',

//   justifyContent: 'center',

//   alignItems: 'center',

//   position: 'relative',

//   animation: `${rotateClockwise} 30s linear infinite`, // Animation for outer circle

// }));
 
// const InnerCircle = styled(Box)(({ theme }) => ({

//   width: '350px', // Adjust size as needed

//   height: '350px',

//   borderRadius: '50%',

//   border: '2px dashed rgba(255, 255, 255, 0.3)', // Example dashed border

//   display: 'flex',

//   justifyContent: 'center',

//   alignItems: 'center',

//   position: 'absolute',

//   animation: `${rotateAntiClockwise} 20s linear infinite`, // Animation for inner circle

// }));
 
// const SkillsText = styled(Typography)(({ theme }) => ({

//   fontSize: '4rem',

//   fontWeight: 'bold',

//   color: 'white',

//   position: 'absolute',

//   zIndex: 3, // Ensure text is above circles

//   userSelect: 'none', // Prevent text selection

// }));
 
// interface IconContainerProps {

//   angle: number;

//   isOuter: boolean;

// }
 
// // Icon Container that counter-rotates to keep icons upright

// const IconContainer = styled(Box)<IconContainerProps>(({ angle, isOuter }) => ({

//   position: 'absolute',

//   // Calculate position on the circle

//   // Radius values (e.g., 280, 160) should be half the circle's width minus half the icon container's width (50px / 2 = 25px)

//   // Outer circle radius: (600/2) - 25 = 300 - 25 = 275. Using 280 for slight offset.

//   // Inner circle radius: (350/2) - 25 = 175 - 25 = 150. Using 160 for slight offset.

//   left: `calc(50% + ${Math.cos(angle * (Math.PI / 180)) * (isOuter ? 300 : 176)}px)`,

//   top: `calc(50% + ${Math.sin(angle * (Math.PI / 180)) * (isOuter ? 300 : 176)}px)`,

//   transform: `translate(-50%, -50%)`, // Center the icon container itself
 
//   // This nested transform is to counteract the parent's rotation.

//   // The value 'angle' here refers to the angle used for positioning.

//   // For the outer circle, the parent rotates clockwise, so we need to rotate the icon counter-clockwise by its *original* angle.

//   // For the inner circle, the parent rotates counter-clockwise, so we need to rotate the icon clockwise by its *original* angle.

//   '& > div': { // Select the direct child which is the SkillIcon

//     transform: `rotate(${isOuter ? -angle : angle}deg) rotateZ(0deg)`, // Counter-rotate the icon itself

//     transformOrigin: 'center', // Ensure rotation is from the center of the icon

//   },
 
//   zIndex: 2,

//   display: 'flex',

//   justifyContent: 'center',

//   alignItems: 'center',

//   width: '50px', // Icon container size

//   height: '50px', // Icon container size

//   backgroundColor: '#282C34', 

//   borderRadius: '50%',

//   border: '1px solid rgba(255, 255, 255, 0.2)',

// }));
 
// const SkillIcon = styled(Box)<{ iconColor: string }>(({ iconColor }) => ({

//     fontSize: '2.5rem', // Size of the actual icon

//     color: iconColor, // Use icon-specific color

//     display: 'flex', // Use flex to center the icon inside its box

//     alignItems: 'center',

//     justifyContent: 'center',

// }));
 
// const darkTheme = createTheme({

//   palette: {

//     mode: 'dark', // Set dark mode for overall theme

//   },

//   typography: {

//     fontFamily: 'Montserrat, sans-serif', // Example: Use a modern font

//   }

// });
 
// const SkillsDisplay: React.FC = () => {

//   // Function to render icons distributed evenly on a circle

//   const renderIcons = (skills: Skill[], isOuter: boolean) => {

//     const totalSkills = skills.length;

//     return skills.map((skill, index) => {

//       const angle = (360 / totalSkills) * index;

//       const IconComponent = skill.icon; // Get the component from the data
 
//       return (
// <IconContainer key={skill.name} angle={angle} isOuter={isOuter}>
// <SkillIcon iconColor={skill.color}>
// <IconComponent />
// </SkillIcon>
// </IconContainer>

//       );

//     });

//   };
 
//   return (
// <ThemeProvider theme={darkTheme}>
// <CssBaseline /> {/* Apply consistent CSS baseline */}
// <Box

//         sx={{

//           display: 'flex',

//           justifyContent: 'center',

//           alignItems: 'center',

//           minHeight: '100vh', // Take full viewport height

//           backgroundColor: 'transparent', // Use transparent background to see the gradient

//           position: 'relative',

//           overflow: 'hidden', // Hide overflow from icons slightly outside

//           fontFamily: 'Montserrat, sans-serif', // Ensure font is applied to the root container

//         }}
// >
// <SkillsText>SKILLS</SkillsText>
 
//         <OuterCircle>

//           {renderIcons(outerCircleSkills, true)}
// <InnerCircle>

//             {renderIcons(innerCircleSkills, false)}
// </InnerCircle>
// </OuterCircle>
// </Box>
// </ThemeProvider>

//   );

// };
 
// export default SkillsDisplay;


// SkillsDisplay.tsx

import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled, keyframes } from '@mui/system';

import {
  FaJsSquare, FaReact, FaAws, FaDocker, FaLinux,
  FaGithub, FaNodeJs, FaPencilAlt, FaGitAlt
} from 'react-icons/fa';

import {
  SiMongodb, SiMysql, SiDjango, SiExpress, SiKubernetes, SiCanva
} from 'react-icons/si';

interface Skill {
  icon: React.ElementType;
  color: string;
  name: string;
}

const innerCircleSkills: Skill[] = [
  { icon: FaJsSquare, color: '#F7DF1E', name: 'JavaScript' },
  { icon: FaReact, color: '#61DAFB', name: 'React' },
  { icon: FaDocker, color: '#2496ED', name: 'Docker' },
  { icon: FaLinux, color: '#FCC624', name: 'Linux' },
  { icon: SiExpress, color: '#FFFFFF', name: 'Express.js' },
];

const outerCircleSkills: Skill[] = [
  { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { icon: FaGithub, color: '#181717', name: 'GitHub' },
  { icon: SiDjango, color: '#092E20', name: 'Django' },
  { icon: SiMysql, color: '#4479A1', name: 'MySQL' },
  { icon: SiCanva, color: '#00C4CC', name: 'Canva' },
  { icon: FaAws, color: '#FF9900', name: 'AWS' },
  { icon: FaNodeJs, color: '#339933', name: 'Node.js' },
  { icon: SiKubernetes, color: '#326CE5', name: 'PowerApps' },
  { icon: FaPencilAlt, color: '#A0A0A0', name: 'Pencil' },
  { icon: FaGitAlt, color: '#F05032', name: 'Git' }
];

const rotateClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const rotateAntiClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const OuterCircle = styled(Box)(() => ({
  width: 'min(90vw, 500px)',
  height: 'min(90vw, 500px)',
  borderRadius: '50%',
  border: '2px dashed rgba(255, 255, 255, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  animation: `${rotateClockwise} 30s linear infinite`,
  m:  2,
}));

const InnerCircle = styled(Box)(() => ({
  width: 'min(50vw, 300px)',
  height: 'min(50vw, 300px)',
  borderRadius: '50%',
  border: '2px dashed rgba(255, 255, 255, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  animation: `${rotateAntiClockwise} 20s linear infinite`,
}));

const SkillsText = styled(Typography)(() => ({
  fontSize: 'clamp(2rem, 5vw, 4rem)',
  fontWeight: 'bold',
  color: 'white',
  position: 'absolute',
  zIndex: 3,
  userSelect: 'none',
}));

interface IconContainerProps {
  angle: number;
  isOuter: boolean;
}

const IconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'angle' && prop !== 'isOuter',
})<IconContainerProps>(({ angle, isOuter }) => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  '& > div': {
    transform: `rotate(${isOuter ? -angle : angle}deg)`,
    transformOrigin: 'center',
  },
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'clamp(35px, 5vw, 50px)',
  height: 'clamp(35px, 5vw, 50px)',
  borderRadius: '50%',
  border: '1px solid rgba(255, 255, 255, 0.2)',
}));

const SkillIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'iconColor',
})<{ iconColor: string }>(({ iconColor }) => ({
  fontSize: '1.8rem',
  color: iconColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const darkTheme = createTheme({
  palette: { mode: 'dark' },
  typography: { fontFamily: 'Montserrat, sans-serif' },
});

const SkillsDisplay: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [outerRadius, setOuterRadius] = useState(0);
  const [innerRadius, setInnerRadius] = useState(0);

  useLayoutEffect(() => {
    const resize = () => {
      if (outerRef.current && innerRef.current) {
        setOuterRadius(outerRef.current.offsetWidth / 2 - 2);
        setInnerRadius(innerRef.current.offsetWidth / 2 - 2);
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const renderIcons = (skills: Skill[], isOuter: boolean) => {
    const totalSkills = skills.length;
    const radius = isOuter ? outerRadius : innerRadius;

    return skills.map((skill, index) => {
      const angle = (360 / totalSkills) * index;
      const IconComponent = skill.icon;

      const left = `calc(50% + ${Math.cos(angle * (Math.PI / 180)) * radius}px)`;
      const top = `calc(50% + ${Math.sin(angle * (Math.PI / 180)) * radius}px)`;

      return (
        <IconContainer
          key={skill.name}
          angle={angle}
          isOuter={isOuter}
          sx={{ left, top }}
        >
          <SkillIcon iconColor={skill.color}>
            <IconComponent />
          </SkillIcon>
        </IconContainer>
      );
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: 'transparent',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Montserrat, sans-serif',
          p:4
        }}
      >
        <SkillsText>SKILLS</SkillsText>
        <OuterCircle ref={outerRef}>
          {renderIcons(outerCircleSkills, true)}
          <InnerCircle ref={innerRef}>
            {renderIcons(innerCircleSkills, false)}
          </InnerCircle>
        </OuterCircle>
      </Box>
    </ThemeProvider>
  );
};

export default SkillsDisplay;

 