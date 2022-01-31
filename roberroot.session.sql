

use desofiwdb;
create database amazondb;
use amazondb
show databases
show tables
describe products
create table products(
    id int primary key AUTO_INCREMENT,
    name varchar(25) not null,
    quantity int,
    price float 
);

insert into products(name,quantity,price) 
values ('play station 5',500,500)

select * from products