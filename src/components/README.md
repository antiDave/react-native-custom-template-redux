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
                <CustomHeader
                    title="Title"
                    leftIconVisible={true}
                    leftIconName="menu"
                    leftIconType="Entypo"
                    leftIconPress={() => {
                        console.log('Menu Pres');
                    }}
                    rightIconVisible={true}
                    rightIconName="customerservice"
                    rightIconType="AntDesign"
                    rightIconPress={() => {
                        console.log('Customer Service Press');
                    }}
                    optionVisible={true}
                    optionsData={optionsData}

                    searchVisible={true}
                    rightMultiple={true}
                    rightMultipleIcons={multipleIcons}
                    headerBackgroundColor={"#313d4b"}
                    statusBarBackgroundColor={"#313d4b"}
                />
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
