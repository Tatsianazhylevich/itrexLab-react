export interface SignInFormTypes {
    email: string,
    password: string,
};

export interface SignUpTypes {
    name: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface UserProfileType {
    id: string,
    first_name: string,
    last_name: string,
    photo: string,
    role_name: string
}

export interface InitialStateTypes {
    loading: boolean,
    status: string,
    profile?: UserProfileType,
    error: string,
}