const SocialMediaIcons =()=> {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/h%C3%A9ctor-salazar-a95b12224/"
            target="_blank"
            rel="noreferrer">
                <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/WritesApollo"
            target="_blank"
            rel="noreferrer">
                <img src="../assets/twitter.png" alt="twitter-link" />
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/hectordavidsr/"
            target="_blank"
            rel="noreferrer">
                <img src="../assets/facebook.png" alt="facebook-link" />
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/hdsrb112/"
            target="_blank"
            rel="noreferrer">
                <img src="../assets/instagram.png" alt="instagram-link" />
            </a>

        </div>
    )
}

export default SocialMediaIcons;