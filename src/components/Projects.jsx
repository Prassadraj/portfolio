import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [

  {
    title: "Asset Manager",
    url: "",
    image: "projects/asset.png",
    description: "IT asset lifecycle manager built with React, Node.js, and MySQL. Features real-time tracking, IP/MAC auto-discovery, and QR scanning.",
  },
  {
    title: "Gaming Booking",
    url: "https://jeronesports.vercel.app/",
    image: "projects/gaming_booking.png",
    description: "Real-time PlayStation gaming center booking platform built with Next.js, Firebase, and Tailwind CSS. Integrated Razorpay payment gateway and custom admin panel.",
  },
  {
    title: "Pearl Architects",
    url: "https://pearlarchitects.in/",
    image: "projects/architects_site.png",
    description: "Responsive architecture portfolio website built with Next.js and Tailwind CSS. Features custom animations, Nodemailer contact workflows, and SEO optimization.",
  },
  {
    title: "AI Voice Assistant",
    url: "https://ai-voice-deepgram.vercel.app/",
    image: "projects/voice_assistant.png",
    description: "AI-powered voice system using Next.js, Deepgram STT/TTS, and Groq LLM. Features real-time speech recognition, voice responses, and auto-silence detection.",
  },
  {
    title: "VFX Studio",
    url: "https://pixcellfactory.com/",
    image: "projects/vfx.png",
    description: "Interactive VFX portfolio with GSAP animations, Lenis smooth scrolling, Spline 3D models, and Swiper.js page-turning projects display.",
  },
  {
    title: "Sales Analytics",
    url: "",
    image: "projects/sales.png",
    description: "High-performance sales analytics dashboard. Features optimized state management, filter-based data views, and smooth rendering of large sales datasets.",
  },
  {
    title: "Ticket Manager",
    url: "",
    image: "projects/ticket.png",
    description: "IT service ticketing system built with React, Nodemailer, and REST APIs. Features interactive dashboards and optimized render performance.",
  },
  {
    title: "Healthcare Corp",
    url: "https://cpcdiagnostics.in/",
    image: "projects/loader.png",
    description: "Corporate website displaying products and services with Lenis smooth scrolling, responsive accessible frontend, and Resend contact form integrations.",
  },
  {
    title: "Interior Design",
    url: "https://tminteriors.in/",
    image: "projects/baking.png",
    description: "Visually rich grid-based website built with Payload CMS to showcase interior design projects. Features smooth scrolling and dynamic interactive elements.",
  },


  {
    title: "Chatterverse",
    url: "https://chatterverse.netlify.app/",
    image: "projects/chat.png",
    description: "Revolutionizing messaging with ReactJS, Firebase, and Zustand, ensuring secure authentication and organized chats.",
  },
  {
    title: "Stay finder",
    url: "https://stay-finder.netlify.app/",
    image: "projects/hotel.png",
    description: `A hotel booking platform built with React, Node.js, Express, MongoDB, JWT authentication, and an admin interface for CRUD operations`,
  },
  {
    title: "Page Turner",
    url: "https://page-turner-app.netlify.app/",
    image: "projects/pageturner.png",
    description: "Book management app with ReactJS frontend and Node.js backend, offering intuitive navigation and comprehensive book management.",
  },
  {
    title: "Fit or fat",
    url: "https://fitorfat.pages.dev/",
    image: "projects/gym.png",
    description: "I built a gym website offering personalized fitness programs and coaching with easy contact options.",
  },

];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });
  const hasUrl = Boolean(project.url);
  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={hasUrl ? () => window.open(project.url, "_blank") : undefined}
        onPointerOver={hasUrl ? () => (document.body.style.cursor = "pointer") : undefined}
        onPointerOut={hasUrl ? () => (document.body.style.cursor = "auto") : undefined}
        ref={background}
      >
        <planeGeometry args={[2.5, 2.9, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
        <meshBasicMaterial color="black" />
      </mesh>

      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.6}
        className="cursor-pointer"
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.1, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.14}
        position={[-1, -0.36, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(0);

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 3,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
