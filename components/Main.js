import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Main() {
  return (
    <section class="text-black body-font lg:pt-20">
      <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div class="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>We are working on it...</span>
            {/* <br class="hidden lg:block"></br>
            ...stay tuned! */}
          </h1>
          <br></br>
          {/* <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            nine4 is a free to use template website for websites made with{" "}
            <a href="https://nextjs.org/" className="underline">
              Next.js
            </a>{" "}
            and styled with Tailwind CSS
          </p> */}
        </div>
      </div>
      <div class="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <img
          class="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="hero"
          src="./images/animation_logo_light_1024.gif"
        ></img>
        <h1 class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>...stay tuned!</span>
          </h1>
      </div>
    </section>
  );
}
