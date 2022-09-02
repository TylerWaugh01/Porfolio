import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Container,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import CorgiLogo from '../app/assets/img/logo.png';
import { NavHashLink } from 'react-router-hash-link';



const Header = () => {

// const openNav = () => {
//     document.getElementById("myNav").props.display = "block";
// }

// const closeNav = () => {
//     document.getElementById("myNav").props.display = "none";
// }
    const [menuOpen, setMenuOpen] = useState(false);
    
        
        // <Container>
            {/* <html>
<head>

<style>
body {
  "font-family"= 'Lato', sans-serif};


.overlay {
  "height"= 100%
  "width"= 100%
  "display"= none;
  "position": fixed;
  "z-index": 1;
  "top": 0;
  "left": 0;
  "background-color": rgb(0,0,0);
  "background-color": rgba(0,0,0, 0.9);
}

.overlay-content {
  "position": relative;
  "top: 25%;
  "width: 100%;
  "text-align: center;
  "margin-top: 30px;
}

.overlay a {
  "padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}
</style>
</head>
<body>

<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>

<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>

<script>
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
</script>
     
</body>
</html>


        <Button onclick={openNav()}>Click Me</Button>
        
        <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onclick={closeNav()}>&times;</a>
  <div className="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div> */}
{/* <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span> */}

{/* <script>
function openNav() {
  document.getElementById("myNav").style.display = "block"};

function closeNav() {
  document.getElementById("myNav").style.display = "none"};

</script> */}

{/* </Container> */}
        return (
        <Navbar dark color='dark' sticky='top'>
            <NavbarBrand className='ms-5' href='/'>
                <NavLink className='nav-link' to='/'>
                    <h1 className='mt-1'>Tyler Waugh</h1>                 
                </NavLink>    
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                    <NavHashLink className='nav-link' to='/#home'>  
                            <i className='fa fa-home fa-lg' /> Home
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#projects'>  
                            <i className='fa fa-list fa-lg'  /> Work
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#bio'>
                            <i className='fa fa-info fa-lg' /> Bio
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavHashLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;

