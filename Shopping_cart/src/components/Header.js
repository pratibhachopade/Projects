import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@material-ui/core/Menu';
import images from "../images/images.png";
import MenuItem from '@material-ui/core/MenuItem';


import { NavLink } from 'react-router-dom';
function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
          <Navbar bg="dark" variant="dark">
              <Container>
                  <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                  <Nav className="me-auto">
                      <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                  </Nav>
              </Container>
              <Badge badgeContent={4} color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>

              </Badge>
             
          </Navbar>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
              <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                  <i className='fas fa-close smallclose'
                      onClick={handleClose}
                      style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                  <p style={{ fontSize: 22 }}>Your carts is empty</p>
                   <img src="images.png" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
              
              </div>
          </Menu>
    </div>
  )
}

export default Header