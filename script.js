const inventoryDatabase = [

{name: "potions section",
items: '',
},

{name: "Armor section",
items: '',
},

{name: "Weapons Section",
items: '',
} 
]

const vendor = document.querySelector("#vendor")
const inventoryContainer = document.querySelector("#inventory")

function openInventoryOnClick(){
    inventoryDatabase.forEach((item)=>{
        console.log(item.name)
    }) 
}

vendor.addEventListener("click", openInventoryOnClick)
