export const routes = {
    Signin: "/",
    ForgotPassword: "/auth/forgotpassword",
    ResetPassword: "/auth/resetpassword",
    EmailVerification: "/auth/emailverification",
    ChangePassword: "/auth/changepassword",
    ContactAdmin: "/contactadmin",
    ContactAdminPage: "/contactadminpage",
    StaffDashboardOverview: "/staffdashboard/overview",
    Consumptions: "/consumptions",
    HRDashboardOverview: "/hrdashboard/overview",
    HRStaffDashboard: "/hrdashboard/staff",
    RegisterStaff: "/registerstaff"
}

export const authRoutes = [routes.Signin, routes.ForgotPassword, routes.ResetPassword,
     routes.EmailVerification, routes.ChangePassword, routes.ContactAdminPage]

export const dashboardRoutes = [
    routes.StaffDashboardOverview, routes.Consumptions,
    routes.HRDashboardOverview, routes.HRStaffDashboard,
    routes.RegisterStaff
]