import { useState } from 'react';

import header from '../css/Header.module.css';
import menubtn from "../../public/menubtn.svg"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handlehome = () => {
        const aboutSection = document.getElementById('home');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleskills = () => {
        const aboutSection = document.getElementById('skills');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlerepository = () => {
        const aboutSection = document.getElementById('repository');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleproject = () => {
        const aboutSection = document.getElementById('project');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlestep = () => {
        const aboutSection = document.getElementById('step');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`px-4 lg:px-14 fixed w-full bg-white/50 ${header.container}`}>
            <div className='flex justify-between items-center mx-auto max-w-6xl h-15'>
                <button
                    className='text-[30px] cursor-pointer text-gray-700 hover:text-black transition-all duration-200'
                    onClick={handlehome}>
                    Portfolio
                </button>
                <div className='hidden lg:flex gap-13'>
                    <button
                        className='cursor-pointer text-[20px] text-gray-700 hover:text-black'
                        onClick={handleAbout}>
                        About Me
                    </button>
                    <button
                        className='cursor-pointer text-[20px] text-gray-700 hover:text-black'
                        onClick={handleskills}
                    >
                        Skills
                    </button>
                    <button
                        className='cursor-pointer text-[20px] text-gray-700 hover:text-black'
                        onClick={handlerepository}
                    >
                        Repository
                    </button>
                    <button
                        className='cursor-pointer text-[20px] text-gray-700 hover:text-black'
                        onClick={handleproject}
                    >
                        Project
                    </button>
                    <button
                        className='cursor-pointer text-[20px] text-gray-700 hover:text-black'
                        onClick={handlestep}
                    >
                        Step
                    </button>
                </div>
                <button
                    className='block lg:hidden'
                    onClick={() => setMenuOpen((open) => !open)}>
                    <img src={menubtn} alt="menu" className="w-15 h-13 cursor-pointer" />
                </button>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)}>
                    <div className="lg:hidden absolute top-[60px] right-0 w-full bg-white/80 shadow-xl rounded-b-2xl transition-all">
                        <div className="flex flex-col items-end gap-3 p-8">
                            <button onClick={() => { handleAbout(); setMenuOpen(false); }} className="py-2 text-lg text-gray-800 hover:text-black cursor-pointer">About Me</button>
                            <button onClick={() => { handleskills(); setMenuOpen(false); }} className="py-2 text-lg text-gray-800 hover:text-black cursor-pointer">Skills</button>
                            <button onClick={() => { handlerepository(); setMenuOpen(false); }} className="py-2 text-lg text-gray-800 hover:text-black cursor-pointer">Repository</button>
                            <button onClick={() => { handleproject(); setMenuOpen(false); }} className="py-2 text-lg text-gray-800 hover:text-black cursor-pointer">Project</button>
                            <button onClick={() => { handlestep(); setMenuOpen(false); }} className="py-2 text-lg text-gray-800 hover:text-black cursor-pointer">Step</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
