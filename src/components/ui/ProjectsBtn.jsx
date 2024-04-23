import React from 'react'

const ProjectsBtn = () => {
    return (
        // <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md 
        // bg-neutral-950 px-6 font-medium text-neutral-200 duration-500"><div class="relative inline-flex 
        // -translate-x-0 items-center transition group-hover:-translate-x-6"><div class="absolute translate-x-0 
        // opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
        //         </div>
        //         <span class="pl-6">Hover</span>
        //         <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
        //             <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
        //                 <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        //             </svg>
        //         </div></div>
        //         </button>
 



<button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-16 py-3 font-medium font-ibm text-xl tracking-wide text-neutral-200 transition-all duration-500">
    <div class="flex -translate-x-0 items-center transition-all duration-300 group-hover:-translate-x-4">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
            {/* Horizontal Line  */}
            <line x1="10" y1="50" x2="90" y2="50" stroke="#d4d4d8" stroke-width="5"/>
            {/* Vertical Line */}
            <line x1="50" y1="10" x2="50" y2="90" stroke="#d4d4d8" stroke-width="5" />
            {/* Diagonal Line 1  */}
            <line x1="20" y1="20" x2="80" y2="80" stroke="#d4d4d8" stroke-width="5"/>
            {/* Diagonal Line 2  */}
            <line x1="80" y1="20" x2="20" y2="80" stroke="#d4d4d8" stroke-width="5"/>
        </svg>
        <span class="uppercase">
            My Work
        </span>
    </div>
    <div class="absolute right-0 translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
        <svg width="24" height="24" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </div>
</button>


   )
}

export default ProjectsBtn