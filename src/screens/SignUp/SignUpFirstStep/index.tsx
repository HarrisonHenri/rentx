import React, { useCallback, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import * as Yup from 'yup'

import { BackButton } from '../../../components/BackButton'
import { BulletPoint } from '../../../components/BulletPoint'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { StackNavigationProps } from '../../../routes/stack.routes.model'
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
  driverLicense: Yup.string().required('CNH obrigatória'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  name: Yup.string().required('Nome obrigatório'),
})

const SignUpFirstStep: React.FC = () => {
  const { goBack, navigate } = useNavigation<StackNavigationProps>()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('')

  const handleNameChange = useCallback((text: string) => {
    setName(text)
  }, [])
  const handleEmailChange = useCallback((text: string) => {
    setEmail(text)
  }, [])
  const handleDriveLicenseChange = useCallback((text: string) => {
    setDriverLicense(text)
  }, [])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  const handleSubmit = useCallback(async () => {
    try {
      await schema.validate({ name, email, driverLicense })
      navigate('SignUpSecondStep', { name, email, driverLicense })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      }
    }
  }, [name, email, driverLicense, navigate])

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
              <BulletPoint active />
              <BulletPoint />
            </Steps>
          </Header>

          <Title>Crie sua{'\n'}conta.</Title>
          <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil.</Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              value={name}
              onChangeText={handleNameChange}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={handleEmailChange}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              value={driverLicense}
              onChangeText={handleDriveLicenseChange}
            />
          </Form>

          <Footer>
            <Button title="Próximo" onPress={handleSubmit} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { SignUpFirstStep }
