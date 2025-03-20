import React from "react";
import Image from "next/image";
import { Home, Book, Smile, Film, Music, Camera, Dumbbell, Monitor, Globe, PenTool, Settings, LogOut, User } from "lucide-react";
import Link from "next/link";
import profile from "../../public/profile.png";

const sidebarItems = [
  { name: "Home", href: "/", icon: <Home size={24} color="red" /> },
  { name: "Book Categories", href: "/book-categories", icon: <Book size={24} color="red" /> },
  { name: "Old-School Cartoons", href: "/old-school-cartoons", icon: <Smile size={24} color="red" /> },
  { name: "Movies & TV Shows", href: "#", icon: <Film size={24} color="red" /> },
  { name: "Music", href: "#", icon: <Music size={24} color="red" /> },
  { name: "Photography", href: "#", icon: <Camera size={24} color="red" /> },
  { name: "Sports & Fitness", href: "#", icon: <Dumbbell size={24} color="red" /> },
  { name: "Technology & Gadgets", href: "#", icon: <Monitor size={24} color="red" /> },
  { name: "Travel & Exploration", href: "#", icon: <Globe size={24} color="red" /> },
  { name: "Writing & Journaling", href: "#", icon: <PenTool size={24} color="red" /> },
];

const settingsItems = [
  { name: "Profile", href: "#", icon: <User size={24} color="red" /> },
  { name: "Settings", href: "#", icon: <Settings size={24} color="red" /> },
  { name: "Logout", href: "#", icon: <LogOut size={24} color="red" /> },
];

const SidebarComponent = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={profile}
            alt="Profile"
            className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          />
          <h1 className="text-xl font-bold">PisalSek</h1>
          <p className="text-gray-700">PisalSek@gmail.com</p>
        </div>

        {/* Sidebar Items */}
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        {/* Settings Section */}
        <ul className="space-y-2 font-medium">
          {settingsItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarComponent;
