import UserIcon from "./UserIcon"
import SignInButton from "../SignInButton"
import { validateRequest } from "~/server/auth"

const AuthIndicator = async () => {
  const auth = await validateRequest()
  const user = auth.user
  return (
    <>
      {!!user ?
        <UserIcon user={user} />
      : <SignInButton size={"lg"} variant={"outline"}>
          Sign In
        </SignInButton>
      }
    </>
  )
}

export default AuthIndicator
