import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
    {
        title: 'Admin',
        path: '/',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },

    {
        title: 'Patient',
        path: '/',
        icon: <FaIcons.FaUserFriends />,
        cName: 'nav-text'
    },
    {
        title: 'Medicine',
        path: '/',
        icon: <AiIcons.AiFillMedicineBox />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
    },

]