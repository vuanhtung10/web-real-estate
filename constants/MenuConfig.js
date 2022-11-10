export default [
  {
    title: 'Trang chủ',
    page: '/',
  },
  {
    title: 'Tin tức',
    page: '/info',
  },
  {
    title: 'Dự Án',
    page: '/project',
  },
  {
    title: 'Quản lý truy cập',
    submenu: [
      {
        title: 'Quản lý người dùng',
        page: '/user',
      },
      {
        title: 'Quản lý nhóm người dùng',
        page: '/role',
      },
      {
        title: 'Quản lý quyền truy cập',
        page: '/permission',
      },
    ],
  },
  {
    title: 'Liên Hệ',
    page: '/contact',
  },
]
