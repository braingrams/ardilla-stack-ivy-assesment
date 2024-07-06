import { useNavigate } from "react-router-dom";
import ardillaLogo from "../../../assets/LOGO (1).png";
import world from "../../../assets/world.png";
import { AngleDown } from "../icons/AngleDown";
import { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { CloseIcon } from "../icons/CloseIcon";

export const Header = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const menuItems = [
		{ id: 1, title: "products", url: "/products" },
		{ id: 2, title: "business", url: "/business" },
		{ id: 3, title: "company", url: "/company" },
		{ id: 4, title: "learn", url: "/learn" },
	];
	return (
		<div className="navbar">
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
						</div>
					))}
				</div>
				<div className="options">
					<div className="area">
						<div className="area-img">
							<img src={world} alt="world map" />
						</div>
						<AngleDown className="arrow" />
					</div>
					<button
						className="rounded-btn"
						onClick={() => navigate("/get-started")}
					>
						Create Account
					</button>
				</div>
			</div>
		</div>
	);
};
