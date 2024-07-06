import { useNavigate } from "react-router-dom";
import ardillaLogo from "../../../assets/LOGO (1).png";
import world from "../../../assets/world.png";
import { AngleDown } from "../icons/AngleDown";
import { ArrowDown } from "../icons/ArrowDown";
import { useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";

export const HeaderTwo = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const menuItems = [
		{ id: 1, title: "products", url: "/products", hasChild: true },
		{ id: 2, title: "business", url: "/business", isBeta: true },
		{ id: 3, title: "company", url: "/company", hasChild: true },
		{ id: 4, title: "learn", url: "/learn" },
	];
	return (
		<div className="navbar h-90">
			<div className="logo" onClick={() => navigate("/")}>
				<img src={ardillaLogo} alt="Ardilla logo" />
			</div>
			<div className="hamburger" onClick={() => setShowMenu((prev) => !prev)}>
				{showMenu ? <CloseIcon /> : <MenuIcon />}
			</div>
			<div className={`grouped ${showMenu ? "display" : ""}`}>
				<div className="hamburger" onClick={() => setShowMenu((prev) => !prev)}>
					{showMenu ? (
						<CloseIcon color="#8807F7" />
					) : (
						<MenuIcon color="#8807F7" />
					)}
				</div>
				<div className="menu">
					{menuItems.map((menu) => (
						<div className="menu-item" key={menu.id}>
							<a href={menu.url}>{menu.title}</a>
							{menu.hasChild && <ArrowDown />}
							{menu.isBeta && <div className="beta">Beta</div>}
						</div>
					))}
				</div>
				<div className="options">
					<div className="menu-item">
						<a href="/login">Sign In</a>
					</div>
					<button className="rounded-btn white">Create Account</button>
					<div className="area">
						<div className="area-img white">
							<img src={world} alt="world map" />
						</div>
						<AngleDown className="arrow" />
					</div>
				</div>
			</div>
		</div>
	);
};
