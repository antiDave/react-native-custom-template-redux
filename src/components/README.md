# Custom Header
 
How to use Custom Header

# ⚛️ Usage

```js

const optionsData = [{
    id: 1,
    text: "Get",
    onPress: () => {
        console.log('Press')
    }
},
{
    id: 2,
    text: "Post",
    onPress: () => {
        console.log('Press')
    }
}];

const multipleIcons = [
    {
        id: 1,
        name: "stepforward",
        type: "AntDesign",
        size: 30,
        style: {},
        color: "#fff",
        onPress: () => {
            console.log('Press');
        }
    },
    {
        id: 2,
        name: "user",
        type: "AntDesign",
        size: 30,
        style: {},
        color: "#fff",
        onPress: () => {
            console.log('Press');
        }
    }
];

```
# Custom Icon
 
How to use Custom Icon

# ⚛️ Usage

```js

<CustomIcon
                iconType="AntDesign"
                name="customerservice"
                style={{margin:8}}
                color="#212121"
                size={20}/>

```
