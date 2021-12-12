import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/1280px-Star_Wars_Logo.png"


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img className="logo-nav" src= {starWarsLogo}/>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-btn" variant="warning" title={"Favorites " + store.favorites.length}>
					{store.favorites.map((item, index) =>{
						return (
							<Dropdown.Item key={index}>
								{item}
								<i className="fas fa-trash-alt m-2" onClick={() => {
									actions.deleteFavorite(index)
								}} />
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
