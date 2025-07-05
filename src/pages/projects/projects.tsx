export default function Projects () {
    return(
        <>
        <ul>
            <li>
                This Portolio was built with a Vite/React/Tailwind frontend deployed using Vercel. The backend which serves the AI chat was built
                with a FastAPI backend, deployed to Heroku. The source code can be found here:
                frameworks: Vite/React, FastAPI, Tailwind
                languages: Typescript, Python
                other: Vercel, Heroku

            </li>
            <li>
            Boojum Games. An online Multiplyer game with around 200 registered users and 30-50 active users. I began the project in October 2024, and it
            is ongoing. I am also currently working on coverting the application to a react frontend and replacing the django views with API views using
            the Django Rest Framework. I have plans to eventually build a mobile app version using React Native.
            I used Django Command scripts to automate many processes, including management of the tournamens, generating the gameboards, generating daily
            boards, daily puzzles, generating the game dictionary. 
            The source code for this project is not public.
            The project was built using Django as a full-stack framework. The live game and game chat uses the Django-Channels Framework, RabbitMQ to manage
            the cache memory layer. 
            I am currently using Neon Database.
            I used google cloud console to handle the google login API. Mailgun is used to send out emails for email verfication.
            Frameworks: Django, Bootstrap, Django-channels.
            languages: HTML, CSS, Python, Javascript.
            Database: Neon Database (postgres SQL)
            other: Google Cloud Console, Mailgun, RabbitMQ, Papertrail, Heroku, Heroku Scheduler.
            </li>
            <li>
                full-stack software development course portfolio project
            </li>
            <li>
                Hackathon Projects
            </li>
        </ul>
        </>
    )
}