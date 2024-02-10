import { useInView } from "react-intersection-observer";

const useAnimationInView = (options = {}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
    ...options,
  });

  return { ref, inView, entry };
};

export default useAnimationInView;
