import React, { useCallback, useState } from 'react'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
} from './styles'

const Profile: React.FC = () => {
  const theme = useTheme()
  const { goBack } = useNavigation()
  const { signOut } = useAuth()

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton
            onPress={handleGoBack}
            color={theme.colors.additionalColors.shape.main}
          />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={signOut}>
            <Feather
              name="power"
              size={24}
              color={theme.colors.additionalColors.shape.main}
            />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo
            source={{
              uri: 'https://avatars.githubusercontent.com/u/13942973?v=4',
            }}
          />
          <PhotoButton>
            <Feather
              name="camera"
              size={24}
              color={theme.colors.additionalColors.shape.main}
            />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <Options>
          <Option>
            <OptionTitle active>Dados</OptionTitle>
          </Option>
        </Options>
        <Section>
          <Input iconName="user" editable={false} />
          <Input iconName="mail" editable={false} />
          <Input iconName="credit-card" editable={false} />
        </Section>
      </Content>
    </Container>
  )
}

export { Profile }
