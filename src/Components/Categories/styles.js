import { StyleSheet } from 'react-native';
import COLORS from '../../consts/colors';

const styles = StyleSheet.create({
    drawer: {
        width: "28.35%",
        height: "102.7%",
        backgroundColor: "#fff",
        position: "absolute",
        zIndex: 2,
        opacity: 1,
        borderRadius: 20,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        shadowColor: '#000',
        elevation: 4,

    },
    Categories: {
        paddingVertical: 10,
        display: "flex",
        width: "70%",
        height: "86.3%",
        justifyContent: "space-between", //justifyContent: "space-around",
        // alignItems: "right",
        flexDirection: "column",
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 13,
    },

    sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoriesListContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },

    categoriesListContainerVertical: {

        width: "100%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",

    },


    categoryBtnImgCon: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },

    ImgCat: {
        height: 35,
        width: 35,
        resizeMode: 'cover',
    },

    souscat: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingBottom: 100,
        // backgroundColor: "red",
    },
    souscatList: {
        width: "50%",
        height: "100%",
        // backgroundColor: "#000",


    },
    cat: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    addToCartBTn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },


});

export { styles }