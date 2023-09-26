import { View, Text } from 'react-native'
import NavButton from '../../components/NavButton'

export default function WalletPage() {
    return (
        <View>
            <Text>Wallet Page</Text>
            <NavButton href='/' title='Go Home' />
        </View>
    )
}

