'use client';
import AboutMe from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';
import LeftInfo from './components/leftInfo';
import RightInfo from './components/rightInfo';

export default function App() {
    return (
        <div className="flex flex-row flex-wrap w-full h-auto justify-center items-center">
            <LeftInfo/>
            <div className='flex flex-col w-1/2 h-96 my-64 justify-center items-start text-white'>
                <span className='flex flex-row justify-start items-center w-full h-auto text-2xl font-semibold mb-5 text-left text-[#2E28A0]'>Hi, my name is</span>
                <span className='flex flex-row justify-start items-center w-full h-auto text-8xl font-black mb-5 text-left'>Estiven Muñoz</span>
                <span className='flex flex-row justify-start items-center w-full h-auto text-7xl font-black mb-5 text-left'>I build things for the web.</span>
                <span className='flex flex-row justify-start items-center w-3/4 h-auto text-xl font-semibold mt-5 text-left leading-10'>
                    I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs.
                </span>
            </div>
            <RightInfo/>
        </div>
    );
}