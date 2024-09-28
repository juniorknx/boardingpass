import { Text, View } from "react-native";
import { styles } from "./styles";

interface FlightProps {
    label: string,
    value: string
}

export function Info({ label, value }: FlightProps) {
    return (
        <View>
            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    )
}