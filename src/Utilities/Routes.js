export const routes = {
    ErrorPage: "*",
    Home: "/",
    SignIn: "/auth/sign-in",
    ForgotPassword: "/auth/forgot-password",
    ResetPassword: "/auth/reset-password",
    EmailVerification: "/auth/email-verification",
    ChangePassword: "/auth/change-password",
    Onboarding: "/onboarding",
    StaffDashboardOverview: "/dashboard/staff",
    Consumptions: "/dashboard/consumptions",
    HRDashboardOverview: "/dashboard/hr",
    HRStaffDashboard: "/dashboard/hr/staff",
    Vendor: "/dashboard/vendor",
    Finance: "dashboard/finance"
    
}

export const authRoutes = [routes.ErrorPage,routes.Home,routes.SignIn, routes.ForgotPassword, routes.ResetPassword,
     routes.EmailVerification, routes.ChangePassword, routes.ContactAdminPage]

export const dashboardRoutes = [routes.StaffDashboardOverview, routes.HRDashboardOverview, routes.Vendor,
routes.Finance, routes.Consumptions, routes.HRStaffDashboard ]