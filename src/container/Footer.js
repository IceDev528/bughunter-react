import React from 'react';
import { FaTwitter, FaLinkedin, FaGitlab, FaGithub, FaBug } from 'react-icons/fa';
import { SiHackerone, SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer-bar">
            <small>
                © 2021 Jecon, JLSec
            </small>
            <br />
            <div>
                <a href="mailto:jasmin.landry@jlsec.io" target="_blank" rel="noopener noreferrer"><SiGmail color="#DB4437" size={24} /> </a>
                <a href="https://www.twitter.com/jr0ch17" target="_blank" rel="noopener noreferrer"><FaTwitter color="#00acee" size={24} /> </a>
                <a href="https://linkedin.com/in/jasmin.landry" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#0e76a8" size={24} /> </a>
                <a href="https://hackerone.com/jr0ch17" target="_blank" rel="noopener noreferrer"><SiHackerone color="#000000" size={20} /> </a>
                <a href="https://bugcrowd.com/jr0ch17" target="_blank" rel="noopener noreferrer"><FaBug color="#f26822" size={24} /> </a>
                <a href="https://github.com/jr0ch17" target="_blank" rel="noopener noreferrer"><FaGithub color="#000000" size={24} /> </a>
                <a href="https://gitlab.com/jr0ch17" target="_blank" rel="noopener noreferrer"><FaGitlab color="#FC6D27" size={24} /> </a>
            </div>
        </footer>
    );
};

export default Footer;
