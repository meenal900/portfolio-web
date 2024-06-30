import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Hey there! I&apos;m Meenal Saini, currently pursuing B.Tech in Engineering at NIT Jalandhar, driven by a passion for AI, machine learning, and sustainable technology solutions.
            I&apos;ve navigated data as a Logistics Intern at AgroVita Foods, optimizing import costs, and explored energy harvesting research at IIT BHU. As a Project Manager Intern at Writo Pvt Ltd, I executed tech projects with precision.
            Known for innovating touchless technology, I&apos;ve developed an AI mouse that redefines user interaction. I&apos;ve also engineered a budget-friendly laser engraving machine and pioneered an LSTM-driven stock trend predictor.
            Moreover, I hold a Green Belt in Lean Six Sigma, committed to elevating quality and efficiency. Currently, at IIT Ropar, I&apos;m pioneering AI in real-time cancer detection.
            With expertise in Python, TensorFlow, and Power BI, let&apos;s innovate together for a brighter future!
            Empowering Tomorrow&apos;s Technology Today
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            12+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">Internship Experience</sub>
          </p>
        </ItemLayout>


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,anaconda,cpp,aws,flask,pytorch,tensorflow,css,git,github,arduino,firebase,heroku,opencv,html,ipfs,js,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,replit,sass,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
