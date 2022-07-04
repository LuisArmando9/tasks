
<p  align="center">

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo"  /></a>

</p>

  



  




  

## Configuration
```
#Required env variables
DB_HOST= HOST NAME
DB_PASSWORD= DATABASE PASSWORD
DB_USER= USER DATABASE
DB_PORT= PORT DATABASE(BY DEFAULT 3306)
DB_NAME= DATABASE NAME
#SQL STATEMENT
CREATE DATABASE Task;
CREATE TABLE `task`.`task_entity` (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	tags text  NULL,
	fedbacks text NULL,
	responsible VARCHAR(250) NOT NULL,
	completionStatus  VARCHAR(100) NOT NULL,
	description  VARCHAR(100) NOT NULL,
	deliveryDate DATE,
	PRIMARY KEY ( id )
);
```

  



  

## Installation
```bash


$ npm install

```

  

## Running the app

  

```

# development

$ npm run start

  

# watch mode

$ npm run start:dev


  ```
# API SWAGGER DOCUMENTATION

http://localhost:3000/api/ 
By default app run on port 3000




  

