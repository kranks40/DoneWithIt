import { DefaultTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';


export default {
    ...DefaultTheme, colors: {
        ...DefaultTheme.colors,
        primary: color.primary,
        background: colors.white
    }
}

