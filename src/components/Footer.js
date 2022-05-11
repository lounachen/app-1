import "../styles/Footer.css"
function Footer () {
    return (
        <div className="footer--div">
            <ul className="footer--items">
                <li><a href="https://instagram.com/lunv.isme"><i class='fa fa-instagram'></i></a></li>
                <li><i class='fa fa-github'></i></li>
            </ul>
            <small className="footer--text">
            © 2022 Luna Chen. All rights reserved. 
            </small>
        </div>
    )
}
export default Footer;