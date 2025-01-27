export const locales = ['en', 'ar'];
export const defaultLocale = 'en';

export const publicRoutes = ['/public'];

export const owner = [
  '/managers',
  '/managers/new',
  '/managers/:id',
  '/managers/:id/edit',
  '/managers/:id/activities',
];

const managerOwner = [
  '/sections/:id/employees',
  '/sections/:id/activities',
  '/folders/:id/activities',
  '/files/:id/activities',
  '/sections/activities',
  '/employees',
  '/employees/new',
  '/employees/:id',
  '/employees/:id/edit',
  '/employees/:id/permissions',
  '/employees/:id/roles',
  '/employees/:id/activities',
  '/roles/new',
  '/roles/:id',
  '/roles/:id/edit',
  '/roles/:id/permissions',
  '/roles/:id/employees',
  '/plans',
  '/activities',
];

const employeeManagerOwner = [
  '/dashboard',
  '/sections',
  '/sections/:id',
  '/folders/:id',
  '/files/:id',
  '/files/:id/preview',
  '/profile',
  '/search',
  '/help',
  '/notifications',
  '/roles',
  // '/preview',
  // '/test',
];

export const employeeRoutes = ['/files', '/folders', ...employeeManagerOwner];
export const managerRoutes = [...managerOwner, ...employeeManagerOwner];
export const ownerRoutes = [...owner, ...managerOwner, ...employeeManagerOwner];

export const guestRoutes = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/pricing',
  '/contact',
  '/login',
  '/register',
  '/forget-password',
  '/new-password',
  '/demo',
  '/tour',
];

