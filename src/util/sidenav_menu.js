// import images from "~/assets/js/Images";

export const menu = [
  {
    title: "관리자 설정",
    itemId: "/setting_admin",
    // elemBefore: () => (
    //   <img
    //     src={images.icons.SVG_NAV_ICON_WMU}
    //     className="icon"
    //     alt=""
    //   />
    // ),

    subNav: [
      {
        title: "계정 관리",
        itemId: "/setting_admin/user_account",
      },
      {
        title: "내 계정 관리",
        itemId: "/setting_admin/my_account",
      },
      {
        title: "관리 이력",
        itemId: "/setting_admin/history",
      },
    ],
  },
  {
    title: "회원 관리",
    itemId: "/member",
    subNav: [
      {
        title: "회원 현황",
        itemId: "/member/member_status",
      },
    ],
  },
  {
    title: "서비스 관리",
    itemId: "/service",
  },
  {
    title: "통계 관리",
    itemId: "/statistics",
  },
  {
    title: "공지 관리",
    itemId: "/notice",
  },
  {
    title: "시스템 설정",
    itemId: "/system_settings",
  },
]