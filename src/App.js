import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";
import Pomodoro from './pages/Pomodoro';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;


const App = () => {

 
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {/* components only access by registered users */}
      <SignedIn>
        <Pomodoro/>
      </SignedIn>
      
      {/* redirect to sign in page for unauthenticated users */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

    </ClerkProvider>
  )
}

export default App