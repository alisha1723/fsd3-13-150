# Expres
1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemone -D`
5. install `npm i express`
6. open  package.json
a. change `type:module`
b. update script {
    "start":"node prg1.js",
    "dev":"nodemon prg1.js",
}
6. create prg1.js in folder
7. add folderName/node_module in.gitignore
8. send-> send method is used to revert back content to the client it may be html ,json ,html file , plane text we can also add status code with status function it can be chain with send function 

## map
this function is used to iterate any array it must return new array 
```
array.map((iteam)=>{
    return
})
array.map((item)=> ())
```
in first function we have touse explicite keywords where as syntax two is not requires
exclude number of properties from any json object 
const {p1,p2,...rest}=products;
log(rest);

search->to search any iteam in json array we use find method it will return null on unsuccesfull and object on succesfull 
array.find((item)=> item.id===id);