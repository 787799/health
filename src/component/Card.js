export default function Cards({heading,paragraph}) {
  return (
    <div class="max-w-60 flex justify-center hover:bg-[#67D7C1] items-center flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="w-20 h-20 bg-gray-200 rounded-full justify-center mb-4 flex items-center">
        <svg
          class="w-7 h-7  "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
        </svg>
      </div>

      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {heading}
        </h5>
      </a>
      <p class="mb-3 text-center font-normal text-gray-500 dark:text-gray-400">
       {paragraph}
      </p>
    </div>
  );
}


export const CardData = [
    {
        Img:"",
        heading:"24 Hours Service",
        
        paragraph:"Providing unwavering support around the clock our  24-hours service enhansiv",
    },
    {
        Img:"",
        heading:"Qualified Doctor",
        paragraph:"A qualified doctor prossesses a understanding of medical science",
    },

    {
        Img:"",
        heading:"Emergency Care",
        paragraph:"Its timely intervention plays a crucial role in stabilizing patients and saving lives.",
    },
    {
        Img:"",
        heading:"Operation Theater",
        paragraph:"It is equipped with specialized tools and technology to ensure the safty.",
    }
]

export function TeamCard() {
  return (
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Natalie Paisley
        </h4>
        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          CEO / Co-Founder
        </p>
      </div>
      <div class="flex justify-center p-6 pt-2 gap-7">
        <a
          href="#facebook"
          class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
        >
          <i class="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a
          href="#twitter"
          class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
        >
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="#instagram"
          class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
        >
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
