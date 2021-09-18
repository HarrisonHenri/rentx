import React, { useCallback, useState } from 'react'
import { Alert, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
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
  const { signOut, user, updateUserAvatar } = useAuth()
  const [avatar, setAvatar] = useState(user.avatar)

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  const handleAvatarUpdate = useCallback(
    async (avatarUri: string) => {
      try {
        await updateUserAvatar(avatarUri)
      } catch {
        Alert.alert('Não foi possível atualizar o perfil')
      }
    },
    [updateUserAvatar],
  )

  const handleSelectAvatar = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (result.cancelled) {
      return
    }

    if (result.uri) {
      handleAvatarUpdate(result.uri)
      setAvatar(result.uri)
    }
  }, [handleAvatarUpdate])

  const handleSignOut = useCallback(() => {
    Alert.alert(
      'Tem certeza?',
      'Se você sair, precisará de internet para ter acesso novamente',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: signOut,
        },
      ],
    )
  }, [signOut])

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton
            onPress={handleGoBack}
            color={theme.colors.additionalColors.shape.main}
          />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSignOut}>
            <Feather
              name="power"
              size={24}
              color={theme.colors.additionalColors.shape.main}
            />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          {avatar ? (
            <Photo
              source={{
                uri: avatar,
              }}
            />
          ) : null}
          <PhotoButton onPress={handleSelectAvatar}>
            <Feather
              name="camera"
              size={24}
              color={theme.colors.additionalColors.shape.main}
            />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content style={{ marginBottom: useBottomTabBarHeight() }}>
        <Options>
          <Option>
            <OptionTitle active>Dados</OptionTitle>
          </Option>
        </Options>
        <Section>
          <Input iconName="user" editable={false} defaultValue={user.name} />
          <Input iconName="mail" editable={false} defaultValue={user.email} />
          <Input
            iconName="credit-card"
            editable={false}
            defaultValue={user.driver_license}
          />
        </Section>
      </Content>
    </Container>
  )
}

export { Profile }
