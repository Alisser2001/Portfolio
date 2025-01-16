'use client';

export default function Description() {
    return (
        <div className='flex flex-col lg:flex-row w-full h-auto justify-start lg:justify-between items-center'>
            <img src='/perfil.png' alt="profile" className='w-80 h-80 xl:w-96 xl:h-96 rounded-full' />
            <p className='flex flex-col justify-start items-center w-full mt-10 lg:mt-0 lg:w-1/2 h-auto leading-8 text-lg md:text-xl 2xl:text-2xl 2xl:mr-32 font-medium'>Full stack web developer with focus on back end development. I am a proactive person, with a strong orientation towards continuous learning and the search for innovative solutions. I am motivated by setting clear goals and acquiring new knowledge to optimize my skills. I bring value to projects by combining up-to-date technology and an effective approach to solving challenges.</p>
        </div>
    )
}