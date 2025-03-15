import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-yellow-400 p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">🍬 Sweet Shop</h1>
            <nav>
                <ul className="flex gap-6">
                    <li><Link to="/" className="hover:text-white">Home</Link></li>
                    <li><Link to="/about" className="hover:text-white">About</Link></li>
                    <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
