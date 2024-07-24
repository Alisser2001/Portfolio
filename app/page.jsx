'use client';
import AboutMe from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';
import LeftInfo from './components/leftInfo';
import RightInfo from './components/rightInfo';

export default function App() {
    return (
        <div className="flex flex-col w-full h-auto justify-center items-center relative">
            <section className='flex flex-col w-1/2 h-screen text-white justify-center items-start' id='hero'>
                <p className='flex flex-row justify-start items-center w-full h-auto text-2xl font-semibold mb-5 text-left text-[#2E28A0]'>Hi, my name is</p>
                <p className='flex flex-row justify-start items-center w-full h-auto text-8xl font-black mb-5 text-left'>Estiven Muñoz</p>
                <p className='flex flex-row justify-start items-center w-full h-auto text-7xl font-black mb-5 text-left'>I build things for the web.</p>
                <p className='flex flex-row justify-start items-center w-3/4 h-auto text-xl font-semibold mt-5 text-left leading-10'>
                    I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs.
                </p>
            </section>
            <section className='flex flex-col w-1/2 h-screen justify-center items-start text-white' id='about'>
                <div className='flex flex-row w-full h-auto justify-end items-center px-10 mb-32'>
                    <div className='h-1 w-2/3 bg-[#2E28A0] mr-5'></div>
                    <h1 className='font-bold text-4xl w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>01.</span> About Me</h1>
                </div>
                <div className='flex flex-row w-full h-auto justify-between items-center'>
                    <p className='flex flex-col justify-start items-center w-1/2 h-auto leading-8 text-lg font-medium'>I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs. <br /><br /> I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs.</p>
                    <img src='/perfil.png' alt="profile" className='w-96 h-96 rounded-full' />
                </div>
                <ul className='flex flex-row flex-wrap w-full h-auto mt-5 justify-between items-center'>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Javascript</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Typescript</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Python</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Java</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>ReactJs</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Tailwind</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>CSS</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>NextJs</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>ViteJs</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Redux</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>NodeJs</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Express</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>NestJs</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>TypeORM</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>SpringBoot</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>SpringDataJDBC</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Sequelize</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>FastAPI</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Git</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>MySQL</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>PosgreSQL</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>SQLServer</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>MongoDB</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>GCP</li>
                    <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>AWS (S3, EC2)</li>
                </ul>
            </section>
            <section className='flex flex-col w-1/2 h-screen justify-center items-start text-white' id='work'>
                <div className='flex flex-row w-full h-auto justify-end items-center px-10 mb-32'>
                    <h1 className='font-bold text-4xl w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>02.</span> My Work</h1>
                    <div className='h-1 w-2/3 bg-[#2E28A0] ml-5'></div>
                </div>
            </section>
            <section className='flex flex-col w-1/2 h-screen justify-center items-start text-white' id='experience'>
                <div className='flex flex-row w-full h-auto justify-end items-center px-10 mb-32'>
                    <div className='h-1 w-1/2 bg-[#2E28A0] ml-5'></div>
                    <h1 className='font-bold text-4xl w-1/2 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>03.</span> Where I’ve Worked</h1>
                </div>
            </section>
            <section className='flex flex-col w-1/2 h-screen justify-center items-start text-white' id='contact'>
                <div className='flex flex-row w-full h-auto justify-end items-center px-10 mb-32'>
                    <h1 className='font-bold text-4xl w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>04.</span> Say Hello</h1>
                    <div className='h-1 w-2/3 bg-[#2E28A0] ml-5'></div>
                </div>
            </section>
            <a href="https://github.com/Alisser2001/Portfolio" target="_blank" className="flex flex-row w-1/2 h-auto justify-center items-center text-center my-5 text-[#2E28A0] font-bold text-lg">
                Designed and Built by Alidev
            </a>
        </div>
    );
}