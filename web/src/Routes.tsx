import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import ProfileLayout from './layouts/ProfileLayout/ProfileLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <PrivateSet unauthenticated="login">
          <Route path="/edit-profile" page={EditProfilePage} name="editProfile" />
        </PrivateSet>
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/link/{id}" page={LinkDetailsPage} name="linkDetails" />
        <PrivateSet unauthenticated="login">
          <Route path="/submit-link" page={SubmitLinkPage} name="submitLink" />
        </PrivateSet>
      </Set>
      <Set wrap={ProfileLayout}>
        <Route path="/user-links/{id:Int}" page={UserLinksPage} name="userLinks" />
        <Route path="/user-comments/{id:Int}" page={UserCommentsPage} name="userComments" />
        <Route path="/user-profile/{id:Int}" page={UserProfilePage} name="userProfile" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
