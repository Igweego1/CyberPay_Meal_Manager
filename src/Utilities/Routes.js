export const routes = {
    ErrorPage: "*",
    Home: "/",
    Signin: "/auth/sign-in",
    ForgotPassword: "/auth/forgot-password",
    ResetPassword: "/auth/reset-password",
    EmailVerification: "/auth/email-verification",
    ChangePassword: "/auth/change-password",
    Onboarding: "/onboarding",
    StaffDashboardOverview: "/dashboard/staff",
    Consumptions: "/dashboard/consumptions",
    HRDashboardOverview: "/dashboard/hr",
    HRStaffDashboard: "/dashboard/hr/staff",
    Vendor: '/dashboard/vendor',
    Finance: '/dashboard/finance'
}

export const authRoutes = [routes.ErrorPage, routes.Signin, routes.ForgotPassword, routes.ResetPassword,
     routes.EmailVerification, routes.ChangePassword]

export const dashboardRoutes = [
    routes.StaffDashboardOverview, routes.Consumptions,
    routes.HRDashboardOverview, routes.HRStaffDashboard, routes.Vendor, routes.Finance
]