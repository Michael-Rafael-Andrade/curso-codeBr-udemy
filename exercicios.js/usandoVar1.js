// usandoVar1.js

{
    {
        {
            {
                var seraVar = 'Será???'
                // console.log(sera);
            }
        }
    }
}
console.log(seraVar);

// {
//     {
//         {
//             {
//                 let seraLet = 'Será???'
//                 // console.log(seraLet);
//             }
//         }
//     }
// }
// console.log(seraLet);

function teste(){
    var local = 123; // observe que var só é visível dentro da function
    const localConst = 456; // observe que var só é visível dentro da function
    console.log(local);
    console.log(localConst);
}

teste();
// console.log(local);   // não roda fora do escopo da função
// console.log(localConst);  // não roda fora do escopo da função