## Overview

The Region Metric project was created as a proof of concept on how we can use micro-services to improve the implementation of IoT projects. This project was created to help to measure and give metrics to the current live project Region Alert, you can find more about it here: https://github.com/meslin8752/RegionAlert.

The idea behind Region Metric is that we have an open API to connect with the Mobile Hub and receive metric information from the users as they receive alerts. With this metrics we can understand better how the project is currently working and what areas it's having the biggest impact.

To help reading this metrics, this project contains with it a Metabase image that is useful to help understanding all the current available data inside our database (MongoDB).

## Running Region Metric

To run the project you only need to open the project folder in your terminal and run: docker-compose up

If you don't have docker-compose installed, please, take a look here: https://docs.docker.com/compose/install/

After running the command, the project will download some few images,if you don't have then yet, and start running the project. You don't need to do anything else but typing "docker-compose up" and wait.

After the images and dependencies are download, you will see that there will be some log info about the containers in the terminal.

#Metabase

The process to run metabase usually takes a little longer.

When the container is all up, it will log a message:
**"metabase | INFO metabase.core :: Metabase Initialization COMPLETE"**

## Set up Metabase

**This is only necessary when you run the project for the first time.**

After the metabase initialization is completed, you only need to run a script inside the "scripts" folder that will setup all the configuration necessary for your MongoDB database and Metabase sync and will also add some few cards to "OUR ANALYTICS" dashboard folder, you can find it in Metabase's homepage.

To do that, using your terminal, run the script by typing: "node src/scripts/setupMetabase.js".

After a few seconds, the script will finish with a message saying that now you can access Metabase at http://localhost:3000/ in your browser.

To authenticate, you need to use:
Email: region@metric.com
Password: 123456


# setupMetabase

The setupMetabase script is only necessary to be used on the first time you run the project. It is responsible to create the connection between Metabase and MongoDB and also create the default user. Running the script more than once is _not_ recommended.


## Metabase Queries

Metabase supports only MBQL to do queries with MongoDB. If you need some help doing queries, please, take a look at this documentation: https://docs.mongodb.com/manual/reference/operator/query/

Anyway, Metabase give us a way to do multiple queries via Summarize and Filter. To try this much more simple way, access the Alert DB in "OUR DATA" and then access "Alerts"/"Alerts Confirmations". Now you can use all your imagination doing multiple queries and have fun!
