import React from 'react';
import { TextInputProps } from 'react-native';
import * as Style from './style';
interface IInputSearchProps extends TextInputProps { }

function InputSearch({ ...rest }: IInputSearchProps) {
    return (
        <Style.Container>
            <Style.MagnifierIcon />
            <Style.Input {...rest} />
        </Style.Container>
    );
}

export default InputSearch;