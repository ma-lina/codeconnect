interface ResponseJson {
    message: string;
    user?: UserRegistrationData;
    token?: string;
    image?: string;
    error?: any;
}

//TODO consider adding _id, timestamps to user data
interface UserRegistrationData {
    first_name: string,
    last_name: string,
    password: string,
    email: string,
    user_name?: string,
    image?: string,
}
interface UserData extends UserRegistrationData {
    is_admin: boolean; 
    starred_mentorship: any;
    starred_coworking: any;
    starred_shadowing: any;
}