import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Person2Icon from "@mui/icons-material/Person2";
const TopBar = () => {
  return (
    <div className="bg-gray-800 my-container text-gray-300 py-2  flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-sm bg-transparent border border-white p-1 flex items-center justify-center rounded first-letter:hover:bg-white hover:text-green-600 transition duration-300">
          <LocalPhoneIcon style={{ fontSize: 18 }} />
        </span>
        <p className="text-sm ml-1">9876543210</p>
        <span className="text-sm bg-transparent border border-white p-1 flex items-center justify-center rounded first-letter:hover:bg-white hover:text-green-600 transition duration-300">
          <EmailIcon className="" style={{ fontSize: 18 }} />
        </span>
        <p className="text-sm ml-1">info@shoeshine.com</p>
      </div>
      <div className=" flex gap-4">
        <button className="text-sm bg-transparent border border-white p-1 flex items-center justify-center rounded first-letter:hover:bg-white hover:text-green-600 transition duration-300">
          <Person2Icon style={{ fontSize: 18 }} />
        </button>
        <button className="text-sm bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-gray-800 transition duration-300">
          Track Your Order
        </button>
      </div>
    </div>
  );
};

export default TopBar;
