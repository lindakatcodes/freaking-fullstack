import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'
import EditUserProfileCell from 'src/components/EditUserProfileCell'

const EditProfilePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title="Edit Profile" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
        <div className="lg:basis-7/12">
          <DisplayText solidText="edit my" outlineText="profile" />
        </div>

        <div className="mt-4 lg:mt-8 lg:basis-5/12">
          <EditUserProfileCell id={currentUser.id} />
        </div>
      </div>
    </>
  )
}

export default EditProfilePage
