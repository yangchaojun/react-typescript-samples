import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { LoginEntity, createEmptyLogin } from '../model/login'
import { isValidLogin } from '../api/lgoin'
import { NotificationComponent } from '../components'
const { useState } = React

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: '0 auto'
    }
  })
)

interface Props extends RouteComponentProps {}

const LoginPageInner = (props: Props) => {
  const [loginInfo, setLoginInfo] = useState<LoginEntity>(createEmptyLogin())
  const [showLoginFailedMsg, setShowLoginFailedMsg] = useState(false)

  const classes = useStyles()

  const onLogin = () => {
    if (isValidLogin(loginInfo)) {
      props.history.push('/pageB')
    } else {
      setShowLoginFailedMsg(true)
    }
  }

  const onUpdateLoginField = (name: string, value: string) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginForm
            onLogin={onLogin}
            onUpdateFiled={onUpdateLoginField}
            loginInfo={loginInfo}
          ></LoginForm>
        </CardContent>
      </Card>
      <NotificationComponent
        message="Invalid login or password, please type again"
        show={showLoginFailedMsg}
        onClose={() => setShowLoginFailedMsg(false)}
      />
    </>
  )
}

export const LoginPageComponent = withRouter(LoginPageInner)

interface PropsForm {
  onLogin: () => void
  onUpdateFiled: (name: string, value: any) => void
  loginInfo: LoginEntity
}

const useFormStyles = makeStyles(() =>
  createStyles({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  })
)

const LoginForm = (props: PropsForm) => {
  const classes = useFormStyles()
  const { onLogin, onUpdateFiled, loginInfo } = props

  const onTextFieldChange = (fieldId: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onUpdateFiled(fieldId, e.target.value)
  }

  return (
    <div className={classes.formContainer}>
      <TextField
        label="Name"
        margin="normal"
        value={loginInfo.login}
        onChange={onTextFieldChange('login')}
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        value={loginInfo.password}
        onChange={onTextFieldChange('password')}
      />
      <Button variant="contained" color="primary" onClick={onLogin}>
        Login
      </Button>
    </div>
  )
}
