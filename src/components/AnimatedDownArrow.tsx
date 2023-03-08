import { domAnimation, LazyMotion, m } from "framer-motion";

export default function AnimatedDownArrow(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={{ y: [-280, -260, -280] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          mass: 2,
          stiffness: 10,
          bounce: 1,
        }}
        className=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </m.div>
    </LazyMotion>
  );
}
