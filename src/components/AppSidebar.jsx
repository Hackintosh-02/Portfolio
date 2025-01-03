import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";
import {
    FiHome,
    FiUser,
    FiFolder,
    FiAward,
    FiActivity,
    FiBook,
    FiMail,
    FiLinkedin,
    FiTwitter,
    FiGithub,
    FiInstagram,
} from "react-icons/fi";
import { ScrollArea } from "./ui/scroll-area";

export default function AppSidebar({ isExpanded, activeSection, onSectionSelect }) {
    const menuItems = [
        { id: "home", label: "Explore", icon: <FiHome className="text-2xl" />, number: 0 },
        { id: "experience", label: "Experience", icon: <FiAward className="text-2xl" />, number: 1 },
        { id: "projects", label: "Projects", icon: <FiFolder className="text-2xl" />, number: 2 },
        { id: "certificates", label: "Certificates", icon: <FiBook className="text-2xl" />, number: 3 },
        { id: "activities", label: "Activities", icon: <FiActivity className="text-2xl" />, number: 4 },
        { id: "about", label: "About", icon: <FiUser className="text-2xl" />, number: 5 },
    ];

    const otherItems = [
        { id: "designs", label: "Designs", icon: <FiFolder className="text-2xl" />, number: 6 },
        { id: "blogs", label: "Blogs", icon: <FiBook className="text-2xl" />, number: 7 },
        { id: "tech-stacks", label: "Tech Stacks", icon: <FiActivity className="text-2xl" />, number: 8 },
        { id: "coding-profiles", label: "Coding Profiles", icon: <FiUser className="text-2xl" />, number: 9 },
    ];

    const connectItems = [
        { id: "contact", label: "Contact", icon: <FiMail className="text-2xl" />, link: "", }, // Render as a button
        { id: "linkedin", label: "LinkedIn", icon: <FiLinkedin className="text-2xl" />, link: "https://linkedin.com" },
        { id: "twitter", label: "Twitter", icon: <FiTwitter className="text-2xl" />, link: "https://twitter.com" },
        { id: "github", label: "GitHub", icon: <FiGithub className="text-2xl" />, link: "https://github.com" },
        { id: "instagram", label: "Instagram", icon: <FiInstagram className="text-2xl" />, link: "https://instagram.com" },
    ];

    const renderMenuItem = (item) => {
        const isActive = activeSection === item.id;
        return (
            <SidebarMenuItem key={item.id}>
                <SidebarMenuButton asChild>
                    <button
                        className={`flex justify-between items-center w-full p-5 rounded-lg transition-all duration-300 ${
                            isActive
                                ? "bg-primary dark:bg-border text-primary-foreground  border-primary hover:bg-primary "
                                : "text-muted-foreground hover:bg-primary dark:hover:bg-card hover:text-primary"
                        }`}
                        onClick={() => onSectionSelect(item.id)}
                    >
                        <div className={`flex items-center gap-3 ${isActive ? "text-card  dark:text-primary" : " dark:text-muted-foreground text-secondary"}`}>
                            {item.icon}
                            {isExpanded && <span className="text-base">{item.label}</span>}
                        </div>
                        {isExpanded && (
                            <span className="text-base text-secondary dark:text-muted-foreground">{item.number}</span>
                        )}
                    </button>
                </SidebarMenuButton>
            </SidebarMenuItem>
        );
    };

    const renderConnectItem = (item, isFirst) => {
        if (isFirst) {
            const isActive = activeSection === item.id;
            // Render the first item as a section trigger button
            return (
                <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                        <button
                            className={`flex justify-between items-center w-full p-5 rounded-lg transition-all duration-300 ${
                                isActive
                                    ? "bg-primary dark:bg-border text-primary-foreground  border-primary hover:bg-primary"
                                    : "text-muted-foreground hover:bg-primary dark:hover:bg-card hover:text-primary"
                            }`}
                            onClick={() => onSectionSelect(item.id)}
                        >
                            <div className={`flex items-center gap-3 ${isActive ? "text-card  dark:text-primary" : "dark:text-muted-foreground text-secondary"}`}>
                                {item.icon}
                                {isExpanded && <span className="text-base">{item.label}</span>}
                            </div>
                        </button>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            );
        } else {
            // Render the rest as links
            return (
                <SidebarMenuItem key={item.id}>
            <SidebarMenuButton asChild>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex justify-between items-center w-full p-5 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                            ? "bg-primary dark:bg-border text-primary-foreground  border-primary hover:bg-primary"
                            : "text-muted-foreground hover:bg-primary dark:hover:bg-card hover:text-primary"
                    }`}
                >
                    <div className={`flex items-center gap-3 ${activeSection === item.id ? "text-card  dark:text-primary" : "dark:text-muted-foreground text-secondary"}`}>
                        {item.icon}
                        {isExpanded && <span className="text-base">{item.label}</span>}
                    </div>
                    {isExpanded && (
                        <span className="size-5 text-gray-500 dark:text-muted-foreground">↗</span>
                    )}
                </a>
            </SidebarMenuButton>
        </SidebarMenuItem>
            );
        }
    };

    return (
        <Sidebar
            className={`top-0 left-0 h-full bg-gray-100 dark:bg-gray-900 shadow-lg transition-all duration-300 ${isExpanded ? "w-64" : "w-35"
                }`}
        >
            <SidebarHeader>
                <div className="flex items-center gap-4 p-4">
                    <div className="w-14 h-14 rounded-lg bg-yellow-400">
                        <img
                            src="/src/assets/images/profile.png"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    {isExpanded && (
                        <div>
                            <h2 className="text-lg font-bold">Ashutosh Sharma</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Software Developer</p>
                        </div>
                    )}
                </div>
            </SidebarHeader>
            <ScrollArea>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {menuItems.map(renderMenuItem)}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    {isExpanded && (
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 px-5">Others</p>
                    )}
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {otherItems.map(renderMenuItem)}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    {isExpanded && (
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 px-5">Connect</p>
                    )}

                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {connectItems.map((item, index) =>
                                    renderConnectItem(item, index === 0)
                                )}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </ScrollArea>
            <SidebarFooter>
                {isExpanded && (
                    <div className="text-center py-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Made by <strong>Hackintosh</strong>
                        </p>
                    </div>
                )}
            </SidebarFooter>
        </Sidebar>
    );
}
