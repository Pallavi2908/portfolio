import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";
import { usePrevNextButtons } from "../hooks/usePrevNextButtons";
import { Link } from "react-router-dom";
import SocialBtn from "./SocialBtn";
import { FiGithub, FiGlobe } from "react-icons/fi";
import projectSlides from "../data/projectData";

import { useDotButton } from "../hooks/useDotButton"; // ✅ this is the new location
import Autoplay from "embla-carousel-autoplay";

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = (props) => {
  const slides = [0, 1, 2, 3];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, // you can add your options
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const { options } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `translateX(${translate}%)`;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, setTweenFactor, setTweenNodes]);

  return (
    <div className="relative embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projectSlides.map((slide) => (
            <div className="embla__slide h-[350px]" key={slide.id}>
              <div className="relative block group overflow-hidden rounded-4xl border-1 bg-red-400 border-white">
                <Link to={`/`}>
                  <img
                    className="embla__slide__img object-cover w-full h-full rounded-3xl"
                    src={slide.image}
                    alt={slide.title}
                  />
                </Link>

                {/* Bottom-half translucent overlay */}
                <div className="absolute bottom-0 right-0 md:w-2/3 h-2/3 md:h-full bg-primary/80 flex flex-col justify-evenly p-4 transition-opacity duration-300 group-hover:bg-opacity-80">
                  <h3 className="text-body md:px-1 px-6 font-heading text-sm md:text-2xl tracking-widest font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-white tracking-wide font-body px-6 pb-1 md:px-2 md:text-sm text-[12px]">
                    {slide.description}
                  </p>

                  {/* Buttons NOT inside <Link> */}
                  <div className="flex md:gap-4 justify-evenly md:items-center md:px-0 ">
                    {slide.github && (
                      <a
                        href={slide.github}
                        target="_blank"
                        rel="noopener noreferrer transition duration-300 hover:brightness-125 hover:drop-shadow-glow cursor-pointer"
                      >
                        <SocialBtn
                          label={
                            <span className="hidden md:inline">
                              GitHub Repo
                            </span>
                          }
                          icon={FiGithub}
                          className="  w-max underline"
                        />
                      </a>
                    )}
                    {slide.live && (
                      <a
                        href={slide.live}
                        target="_blank"
                        rel="noopener noreferrer transition duration-300 hover:brightness-125 hover:drop-shadow-glow cursor-pointer"
                      >
                        <SocialBtn
                          label={
                            <span className="hidden md:inline">Live Site</span>
                          }
                          icon={FiGlobe}
                          className="w-max underline"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
