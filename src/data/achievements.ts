// Shared types with other components
export interface Achievement {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  location?: string;
  organizer?: string;
  skills: string[];
  certification?: string;
  imageUrl: string;
  type: 'language' | 'design' | 'activity';
  link?: string;
  gallery?: string[];
}

export const achievements: Achievement[] = [
  
  
  // Activities - from the user's request
  {
    id: "n7sec-founder",
    title: "N7SEC Security Club Founder and Leader",
    description: "Founded and led N7SEC, a cybersecurity club dedicated to promoting security awareness and skills development.",
    longDescription: "Established N7SEC as a platform for students to learn about cybersecurity through workshops, competitions, and collaborative projects. Organized regular meetings, training sessions, and invited industry professionals to share insights. Built a community of security enthusiasts and fostered an environment of continuous learning and practical skill development.",
    date: "2023 - Present",
    location: "ENSET MOHAMMEDIA",
    skills: ["Leadership", "Cybersecurity", "Community Building", "Event Organization", "Technical Training"],
    imageUrl: "n7sec.jpg",
    type: 'activity'
  },
  {
    id: "n7chall-organizer",
    title: "N7CHALL CTF Organizer",
    description: "Organized and led the N7CHALL Capture The Flag competition, creating challenges and managing the event.",
    longDescription: "Spearheaded the organization of N7CHALL, a Capture The Flag competition designed to test and improve cybersecurity skills among students and professionals. Developed a diverse range of challenges across multiple security domains, implemented the competition infrastructure, and coordinated a team of volunteers. The event successfully attracted participants from various educational institutions and helped promote cybersecurity awareness and education.",
    date: "May 2025",
    location: "ENSET MOHAMMEDIA",
    organizer: "N7SEC",
    skills: ["Event Management", "Challenge Development", "Technical Infrastructure", "Community Engagement"],
    imageUrl: "n7chall.jpg",
    type: 'activity'
  },
  {
    id: "dgssi-ctf",
    title: "DGSSI CTF Participant",
    description: "Participated in the Moroccan General Directorate of Information Systems Security (DGSSI) Capture The Flag competition.",
    longDescription: "Competed in the national-level cybersecurity competition organized by DGSSI, tackling challenges in various security domains including cryptography, web exploitation, reverse engineering, and forensics. Collaborated with team members to solve complex problems under time constraints, applying practical security skills in a competitive environment.",
    date: "Mar 2024",
    location: "Morocco",
    organizer: "Moroccan General Directorate of Information Systems Security",
    skills: ["CTF", "Cybersecurity", "Problem Solving", "Cryptography", "Web Exploitation"],
    imageUrl: "dgssi.jpeg",
    type: 'activity',
    link: "https://www.dgssi.gov.ma/"
  },
  {
    id: "akasec-ctf",
    title: "AKASEC CTF Participant",
    description: "Participated in the AKASEC Capture The Flag competition, a national cybersecurity event.",
    longDescription: "Engaged in the AKASEC CTF competition, solving various cybersecurity challenges including network security, binary exploitation, reverse engineering, and cryptography. Demonstrated technical proficiency and analytical thinking skills while working under pressure in a competitive environment.",
    date: "Nov 2024",
    location: "Morocco",
    organizer: "AKASEC",
    skills: ["CTF", "Network Security", "Binary Exploitation", "Reverse Engineering"],
    imageUrl: "akasec.jpg",
    type: 'activity',
    link: "https://www.facebook.com/AkaSec.ma/"
  },
  {
    id: "dfir212-cte",
    title: "DFIR212 CTE Participant",
    description: "Participated in the DFIR212 Cyber Threat Exercise, focusing on digital forensics and incident response scenarios.",
    longDescription: "Took part in the specialized DFIR212 Cyber Threat Exercise, which simulated real-world incident response scenarios. Applied digital forensics techniques to analyze compromised systems, identify attack vectors, establish timelines, and develop remediation strategies. Practiced evidence collection and preservation while working within a team to resolve complex security incidents.",
    date: "Dec 2024",
    location: "RABAT",
    organizer: "DFIR212",
    skills: ["Digital Forensics", "Incident Response", "Threat Analysis", "Evidence Collection"],
    imageUrl: "dfir.jpeg",
    type: 'activity',
    link: "https://www.facebook.com/DFIR212/"
  },
  {
    id: "mcscv12-finalist",
    title: "MCSCv12 Finalist",
    description: "Reached the finals of the 12th edition of the Morocco Cyber Security Challenge (MCSCv12).",
    longDescription: "Qualified as a finalist in the prestigious Morocco Cyber Security Challenge (MCSCv12), competing against top cybersecurity talents from across the country. Demonstrated exceptional skills in various cybersecurity domains including web exploitation, cryptography, reverse engineering, and forensics. The competition tested both technical abilities and strategic thinking under pressure.",
    date: "Apr 2025",
    location: "ENSIAS RABAT",
    organizer: "mCrypt",
    skills: ["Advanced Cybersecurity", "Penetration Testing", "Security Analysis", "Problem Solving"],
    imageUrl: "mcsc.jpeg",
    type: 'activity',
    link: "https://www.facebook.com/MoroccoCyberSpaceChallenge/"
  }
];
