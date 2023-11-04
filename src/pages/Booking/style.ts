import {StatusBar} from 'react-native'
import styled from 'styled-components/native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBell, faUser} from '@fortawesome/free-solid-svg-icons'

const currentStatusBarHeight = StatusBar.currentHeight || 0

export const Container = styled.View`
	flex: 1;
	padding-horizontal: 24px;
	padding-top: ${currentStatusBarHeight + 65}px;
	background-color: '#fff';
`

export const CategoriesListContainer = styled.View`
	margin-top: 24px;
`

export const HotelCardListContainer = styled.View`
	margin-vertical: 8px;
	margin-horizontal: -20px;
`

export const TopHotelListContainer = styled.View`
	margin-top: 8px;
`

export const Header = styled.View`
	flex-direction: row;
	justify-content: start;
	margin-bottom: 20;
`

export const SubHeader = styled.View`
	flex-direction: column;
	justify-content: flex-start;
	padding-left: 12px;
`

export const InputContainer = styled.View`
	margin-top: 16px;
`

export const Title = styled.Text`
	font-size: 16px;
	font-weight: 700;
	color: #fff;
`

export const Subtitle = styled.Text`
	font-size: 12px;
	font-weight: 700;
	color: #fff;
`

export const PlaceTitle = styled.Text`
	color: ${({theme}: any) => theme.colors.primary};
`

export const TopHotelTitle = styled.Text`
	color: ${({theme}: any) => theme.colors.grey};
	font-weight: 700;
	font-size: 14px;
`

export const UserIcon = styled(FontAwesomeIcon).attrs({
	icon: faUser,
	size: 20,
	color: '#053731',
})`
	margin-top: 6px;
`

export const NotificationIcon = styled(FontAwesomeIcon).attrs({
	icon: faBell,
	size: 20,
	color: '#053731',
})`
	margin-top: 6px;
`
