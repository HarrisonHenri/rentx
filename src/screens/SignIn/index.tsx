import React, { useCallback, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import * as Yup from 'yup'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PasswordInput } from '../../components/PasswordInput'
import { useAuth } from '../../hooks/auth'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { Container, Header, Subtitle, Title, Footer, Form } from './styles'

const schema = Yup.object().shape({
  password: Yup.string()
    .required('Senha obrigatória')
    .min(6, 'The password must have 6 characters at least'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
})

const SignIn: React.FC = () => {
  const { navigate } = useNavigation<StackNavigationProps>()
  const { signIn } = useAuth()
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text)
  }, [])
  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text)
  }, [])
  const handleSubmit = useCallback(async () => {
    try {
      await schema.validate({ email, password })
      await signIn({ email, password })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        console.log(error)
        Alert.alert(
          'Erro na autenticação',
          'Verifique os dados e tente novamente',
        )
      }
    }
  }, [email, password, signIn])

  const handleSignUpNav = useCallback(() => {
    navigate('SignUpFirstStep')
  }, [navigate])

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
            <Title>Estamos{'\n'}quase lá.</Title>
            <Subtitle>
              Faça seu login para começar{'\n'}uma experiência incrível.
            </Subtitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleEmailChange}
              value={email}
            />
            <PasswordInput
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handlePasswordChange}
              value={password}
            />
          </Form>

          <Footer>
            <Button title="Login" onPress={handleSubmit} />
            <Button
              light
              title="Criar conta"
              color={theme.colors.additionalColors.background.secondary}
              onPress={handleSignUpNav}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { SignIn }
