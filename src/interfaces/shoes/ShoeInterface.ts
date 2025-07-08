

enum color {
    black = "black",
    white = "white",
    red = "red",
    blue = "blue"
}


enum brand {
    converse ="converse",
    formal = "formal",
    nike = "nike",
    adidas = "adidas",

}


export interface shoeInterface {
    color : color,
    size : number,
    brand : brand,
    style : string
}

