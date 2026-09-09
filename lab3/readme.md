localhost
127.0.0.1 - IP address

ctrl C for stop the server 

every request from client has a
pair of {request,response}
## npm = node package  manager
used to install,run,uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm,the project must be npm project,
to create npm project we can use
- npm init -y
- it creates a package.json file automattically 
package.json holds all the information related to install packages from npm
  - update package.json,set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_module by .gitignore

Nodemon- it restarts the4 server automatically when file changes , to install 

> npm i nodemon -D

Note: -D flag will install this package as developer dependancy 

- to execute any program , update the package.json file tehn start the server as 
<b>npm run dev</b>
- start -> it will execute the app on development 
- dev -> it will start server in development phase (only for developer)

- res: it will return contents (json/html/plain) to the user/client
- res: it will retrivr the information from client to the server 

## Status codes

- 200 -> ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> Forbidden 
- 404 -> Not Found 
- 500 -> internal server error 

## content type 

-text/plain
-text/html
- application/json
-text/css

the content type and status code can be send back to the client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode

## response at html contenet
1. res.end 
end("any html context/text)

2. html file
. read by created stream
. pipe with res

## json
. server returns data only not html content bcoz html contents will be return by frontend devloper. the data is in json format
. json always stores data in key value pair enclosd by {} array can be stored by[] one pair of curly bractek will rpresent one object and its property will be serprated by ",".

