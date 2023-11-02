import styled from 'styled-components/native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export const Container = styled.View`
	width: 100%;
	height: 40px;
	flex-direction: row;
	background-color: #edeef1;
	border-radius: 25px;
`

export const MagnifierIcon = styled(FontAwesomeIcon).attrs({
	icon: faSearch,
	size: 20,
	color: '#908e8c',
})`
	margin: 9px 16px;
`

export const Input = styled.TextInput`
	background-color: #edeef1;
	border-radius: 25px;
	flex: 1;
	color: #878787;
`
