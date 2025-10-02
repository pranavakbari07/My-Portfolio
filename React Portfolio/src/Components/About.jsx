import React from 'react'

export default function About() {
  return (
    <div className="h-auto text-white mx-40">
      <div class="py-10" id="about">
        <h1 class="text-4xl font-semibold">About</h1>
        <p class="mt-10 text-[18px] text-[#d4d4d4]">I am a passionate full-stack software developer with a deep-rooted
            love for crafting digital solutions that empower and inspire. My journey into the world of software
            development began with a solid foundation in computer science, which I acquired during my years of dedicated
            study at Ramrao Adik Institute of Technology, where I earned my Bachleor's in Computer Science degree.</p>
        <p class="mt-4 text-[18px] text-[#d4d4d4]">My educational journey provided me with a strong theoretical
            understanding, but it's my insatiable curiosity and relentless drive that have fueled my practical
            expertise. I thrive in the dynamic and ever-evolving tech landscape, constantly updating my skills to stay
            at the forefront of innovation. As a full-stack developer, I find joy in bringing ideas to life, from
            conceptualization to deployment. I revel in the challenge of seamlessly connecting the front-end user
            experience with the robust functionality of the back end. Whether I'm coding in Python, JavaScript, or
            diving into the intricacies of databases, I approach each project with enthusiasm and precision.</p>
        <p class="mt-4 text-[18px] text-[#d4d4d4]">When I'm not immersed in lines of code, you can find me exploring the
            latest tech trends, attending hackathons, or contributing to open-source projects. I believe that the tech
            world is a community, and I'm dedicated to giving back and sharing knowledge whenever I can.</p>

        <div class="flex justify-start ap-2 flex-wrap">
            <ul class="flex mt-8 gap-5 flex-wrap">
                <li
                    class="px-5 py-2 border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                    HTML
                </li>
                <li
                    class="px-5 py-2 border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                    CSS
                </li>
                <li
                    class="px-5 py-2 border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                    Media Query
                </li>
                <li
                    class="px-5 py-2 border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                    Bootstrap
                </li>
                <li
                    class="px-5 py-2 border border-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                    Tailwind CSS
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}
