import React, { useCallback, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import * as Yup from 'yup'

import { BackButton } from '../../../components/BackButton'
import { BulletPoint } from '../../../components/BulletPoint'
import { Button } from '../../../components/Button'
import { PasswordInput } from '../../../components/PasswordInput'
import {
  RootParams,
  StackNavigationProps,
} from '../../../routes/stack.routes.model'
import { api } from '../../../services/api'
import {
  Container,
  Header,
  Subtitle,
  Title,
  Footer,
  Form,
  Steps,
  FormTitle,
} from './styles'

const schema = Yup.object().shape({
  password: Yup.string().required('Senha obrigatória'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem ser as mesmas')
    .required('Esse campo é obrigatório'),
})

const SignUpSecondStep: React.FC = () => {
  const { goBack, navigate } = useNavigation<StackNavigationProps>()
  const route = useRoute<RootParams<'SignUpSecondStep'>>()
  const { name, email, driverLicense } = route.params
  const theme = useTheme()
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text)
  }, [])
  const handlePasswordConfirmationChange = useCallback((text: string) => {
    setPasswordConfirmation(text)
  }, [])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  const handleSubmit = useCallback(async () => {
    try {
      await schema.validate({ password, passwordConfirmation })

      await api.post('/users', {
        name,
        email,
        password,
        driver_license: driverLicense,
      })

      navigate('Confirmation', {
        title: 'Contra criada!',
        message: 'Agora é só fazer login\ne aproveitar',
        nextScreen: 'SignIn',
      })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert('Erro no cadastro', 'Verifique os dados e tente novamente')
      }
    }
  }, [password, passwordConfirmation, name, email, driverLicense, navigate])

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <BackButton onPress={handleGoBack} />
            <Steps>
              <BulletPoint />
              <BulletPoint active />
            </Steps>
          </Header>

          <Title>Crie sua{'\n'}conta.</Title>
          <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil.</Subtitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              placeholder="Senha"
              onChangeText={handlePasswordChange}
              value={password}
            />
            <PasswordInput
              placeholder="Repertir Senha"
              onChangeText={handlePasswordConfirmationChange}
              value={passwordConfirmation}
            />
          </Form>

          <Footer>
            <Button
              title="Cadastrar"
              onPress={handleSubmit}
              color={theme.colors.additionalColors.success}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { SignUpSecondStep }
