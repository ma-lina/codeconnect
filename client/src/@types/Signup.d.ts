interface SignUp {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  image?: string;
  isAdmin: boolean;
}

type State = {
  userInput: string;
  files: FileList | null;
};
