import profImg from '../images/portfolio_pic.png'

export default function About () {
    return(
        <>
        <img 
        className="w-96 h-96 rounded-full object-cover"
        src={profImg} alt="profile picture"></img>
        </>
    )
}