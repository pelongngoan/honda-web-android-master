import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as LuIcons from "react-icons/lu";
import * as FCIcons from "react-icons/fc";
import * as MDIcons from "react-icons/md";
import * as IO5Icons from "react-icons/io5";
import * as IMIcons from "react-icons/im";
import * as TBIcons from "react-icons/tb";

const SidebarItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <RiIcons.RiDashboardLine />,
  },
  {
    title: "Quản lý",
    path: "/admin/management",
    icon: <LuIcons.LuFolderTree />,
    iconClosed: <MDIcons.MdOutlineKeyboardArrowDown />,
    iconOpened: <MDIcons.MdOutlineKeyboardArrowUp />,
    subItems: [
      {
        title: "Takeout",
        path: "/admin/management/takeout",
        icon: <FCIcons.FcSurvey />,
      },
      {
        title: "Máy quét",
        path: "/admin/management/scaner",
        icon: <MDIcons.MdScanner />,
      },
      {
        title: "Xe chuyên dụng",
        path: "/admin/management/dolly",
        icon: <FaIcons.FaDolly />,
      },
      {
        title: "Kho",
        path: "/admin/management/store",
        icon: <MDIcons.MdOutlineWarehouse />,
      },
      {
        title: "Maker",
        path: "/admin/management/maker",
        icon: <MDIcons.MdOutlineFactory />,
      },
      {
        title: "Lịch sử",
        path: "/admin/management/history",
        icon: <FaIcons.FaHistory />,
      },
    ],
  },
  {
    title: "Hệ thống",
    path: "/admin/system",
    icon: <IO5Icons.IoFileTrayFullOutline />,
    iconClosed: <MDIcons.MdOutlineKeyboardArrowDown />,
    iconOpened: <MDIcons.MdOutlineKeyboardArrowUp />,
    subItems: [
      {
        title: "Loại xe",
        path: "/admin/system/vehicle",
        icon: <IMIcons.ImTree />,
      },
      {
        title: "Tài khoản",
        path: "/admin/system/account",
        icon: <MDIcons.MdOutlineManageAccounts />,
      },
      {
        title: "Phân quyền",
        path: "/admin/system/roll",
        icon: <TBIcons.TbTriangleSquareCircleFilled />,
      },
      {
        title: "Cài đặt",
        path: "/admin/system/setting",
        icon: <TBIcons.TbSettings />,
      },
    ],
  },
];
export default SidebarItems;
