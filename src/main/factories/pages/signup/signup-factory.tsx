import React from 'react'
import { makeLocalUpdateCurrentAccount } from '@/main/factories/usecases/save-access-token/local-update-current-account-factory'
import Signup from '@/presentation/pages/signup'
import { makeSignupValidation } from './signup-validation-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account-factory'

export const makeSignup: React.FC = () => {
  return (
    <Signup
      addAccount={makeRemoteAddAccount()}
      validation={makeSignupValidation()}
      updateCurrentAccount={makeLocalUpdateCurrentAccount()}
    />
  )
}
