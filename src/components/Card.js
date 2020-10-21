import React, {useState} from "react";
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, } from "react-native";

const Card = ({ value }) => {

    const [like, setLike] = useState(value.isLiked);

    return(
        <View style={styles.container}>
            <Image 
                source={{uri: value.img}}
                style={styles.image}
            />
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.title}>{value.userName}</Text>
                <TouchableOpacity
                    onPress={() => like ? setLike(false) : setLike(true)}
                >
                <Image 
                    source={require("../images/cw.png")}
                    style={styles.like}
                    tintColor={like ? "purple" : "grey" }
                />
                </TouchableOpacity>
            </View>
            <Text style={styles.desc}>{value.description}</Text>

        </View>

    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    image: {
        height: Dimensions.get("window").height / 3,
    },
    title: {
        margin: 5,
        padding: 5,
        fontWeight: "bold",
        fontSize: 20,
    },
    desc: {
        margin: 10,
    },
    like: {
        height: 30,
        width: 30,
        margin: 10,
    }
})