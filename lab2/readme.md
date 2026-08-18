# FS (file system)
it direct connect with client OS rather tha browser

## Major task of  FS Module
- Reading and writing files
     -readFile()
     -writeFile()
     -appendFile()
-Directory Managrmrnt
    -mkdir()
    -rmdir()-depricated
    -readdir()
-Metadata/Information
    -start()
    -lstat()
    -fstat()
-Watching for changes
    -watch()
    -watachFile()
    -unwatchFiles()
-streaming large files
    -createReadStream()
    -createWriteStream()
-file Operation
    -rename()
    -truncate()
    -link()
    -syslink()

## CRUD operation 
creat/Insert , Read/Retrieve , update ,delete
each item (id , name,prize,quty)
feature:
1.add to cart
2.show cart
3.remove from cart
4.update quntity from cart

## Item
id,name,price,qty

## operation

1.add to cart
2.show cart
3.remove item from cart
4.update quantity from cart
5.checkout
NOTE: all items will be stored inhdd, so after tenination of program we can 
retrieve cart details

## Required file

1.curd.js - it contains all the methods and entry point 
2.products.json - it contains the product details in array from