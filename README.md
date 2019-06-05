# The Software QA Test

## Purpose
This platform can be used to evaluate the abilities of a potential Software Quality Assruance or Software Quality Engineer or Software Development Engineer in Test cadidate that is apply for an open position with your company.

## Possible Tasks for the SQA/SQE/SDET candidate
1. Write a Test Plan to describe the scope of work surrounding the potential test effort
2. Write Test Cases to validate the sites functionality
3. Write an automate test script to validate the functionality

## Supporting User Story
> *As a admin of the system,  
> I want the ability to create and maintane users  
> So that I can create new users, change existing  
> users information and set/change permissions of  
> a the given user.*

# Managing the QA Test Platform
## Platform Prerequisites
* Git
* Docker

## Starting the Platform
1. Clone the repo
2. CD into the local repo folder
3. Run `docker compose`
4. From a browser open `https://...../`

## Base User Accounts
| Username | Password | Roll |
|:------:|:-----:|:---:|
| admin | P@ssw0rd | Admin |
| sam | SamIam | User |

## Platform Resources
* [Node JS](https://hub.docker.com/_/node)
* [MySQL](https://hub.docker.com/_/mysql)

## Container Access

### MySQL
shell to `qa-test-mysql`

    docker container exec -it qa-test-mysql bash

connect to mysql db from mysql container

    mysql -p 

connect to mysql db from host

connect to mysql db from node server

### Node JS
shell into `qa-test-node`

    docker container exec -it qa-test-node bash


### VirtualBox
Get Container IP Addresses

    VBoxManage guestproperty enumerate default |grep IP

