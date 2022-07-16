import React from "react";
import { Link } from "@inertiajs/inertia-react";
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "./MenuItem";
import { UserMenus, UserOthers } from "./MenuList";

const Sidebar = ({ auth }) => {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href={route("user.dashboard.index")}>
                    <img src="/images/moonton.svg" alt="" />
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {/* Menu */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenus.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                text={menu.text}
                                icon={menu.icon}
                                link={menu.link}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>
                    {/* Menu */}

                    {/* Others */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                text={menu.text}
                                icon={menu.icon}
                                link={menu.link}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>
                    {/* Others */}
                    {auth.activePlan && (
                        <SubscriptionDetail
                            isPremium={auth.activePlan.name === "Premium"}
                            name={auth.activePlan.name}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
